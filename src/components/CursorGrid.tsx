import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import './CursorGrid.css'

type CursorGridProps = {
  cellSize?: number
  color?: string
  radius?: number
  maxOpacity?: number
  fillOpacity?: number
  gridOpacity?: number
}

const HOLD_TIME = 260
const FADE_DURATION = 950
const PULSE_SPEED = 640

const hexToRgb = (hex: string): [number, number, number] => {
  const h = hex.replace('#', '')
  const v = h.length === 3 ? h.split('').map((c) => c + c).join('') : h
  const num = parseInt(v.slice(0, 6), 16)
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255]
}

export function CursorGrid({
  cellSize = 70,
  color = '#4da3ff',
  radius = 140,
  maxOpacity = 1,
  fillOpacity = 0,
  gridOpacity = 0,
}: CursorGridProps) {
  const reducedMotion = useReducedMotion()
  const [finePointer, setFinePointer] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wakeRef = useRef<(() => void) | null>(null)
  const propsRef = useRef({
    cellSize,
    color,
    radius,
    maxOpacity,
    fillOpacity,
    gridOpacity,
  })

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setFinePointer(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    propsRef.current = {
      cellSize,
      color,
      radius,
      maxOpacity,
      fillOpacity,
      gridOpacity,
    }
    wakeRef.current?.()
  }, [cellSize, color, radius, maxOpacity, fillOpacity, gridOpacity])

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (reducedMotion || !finePointer || !container || !canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    let cols = 0
    let rows = 0
    let offX = 0
    let offY = 0
    let alphas = new Float32Array(0)
    let touched = new Float64Array(0)
    let w = 0
    let h = 0
    const pulses: { x: number; y: number; t0: number }[] = []
    let raf = 0
    let running = false
    let lastFrame = 0
    let rect = container.getBoundingClientRect()

    const rebuild = () => {
      const p = propsRef.current
      w = container.offsetWidth
      h = container.offsetHeight
      canvas.width = Math.max(1, Math.round(w * dpr))
      canvas.height = Math.max(1, Math.round(h * dpr))
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cols = Math.ceil(w / p.cellSize) + 1
      rows = Math.ceil(h / p.cellSize) + 1
      offX = (w - cols * p.cellSize) / 2
      offY = (h - rows * p.cellSize) / 2
      alphas = new Float32Array(cols * rows)
      touched = new Float64Array(cols * rows)
      rect = container.getBoundingClientRect()
    }

    const cellCenter = (i: number): [number, number] => {
      const p = propsRef.current
      return [
        offX + (i % cols) * p.cellSize + p.cellSize / 2,
        offY + Math.floor(i / cols) * p.cellSize + p.cellSize / 2,
      ]
    }

    const energize = (x: number, y: number, boost = 1) => {
      const p = propsRef.current
      const r = Math.max(p.radius, 1)
      const now = performance.now()
      const minCol = Math.max(0, Math.floor((x - r - offX) / p.cellSize))
      const maxCol = Math.min(cols - 1, Math.floor((x + r - offX) / p.cellSize))
      const minRow = Math.max(0, Math.floor((y - r - offY) / p.cellSize))
      const maxRow = Math.min(rows - 1, Math.floor((y + r - offY) / p.cellSize))

      for (let cRow = minRow; cRow <= maxRow; cRow++) {
        for (let cCol = minCol; cCol <= maxCol; cCol++) {
          const i = cRow * cols + cCol
          const [cx, cy] = cellCenter(i)
          const dist = Math.hypot(cx - x, cy - y)
          if (dist > r) continue
          const t = 1 - dist / r
          const level = t * t * (3 - 2 * t) * p.maxOpacity * boost
          if (level > alphas[i]) {
            alphas[i] = level
            touched[i] = now
          } else if (level > 0) {
            touched[i] = now
          }
        }
      }
    }

    const draw = (now: number) => {
      const p = propsRef.current
      const dt = Math.min(now - lastFrame, 50)
      lastFrame = now
      ctx.clearRect(0, 0, w, h)
      const [cr, cg, cb] = hexToRgb(p.color)

      if (p.gridOpacity > 0) {
        ctx.strokeStyle = `rgba(${cr}, ${cg}, ${cb}, ${p.gridOpacity})`
        ctx.lineWidth = 1
        ctx.beginPath()
        for (let cCol = 0; cCol <= cols; cCol++) {
          const x = Math.round(offX + cCol * p.cellSize) + 0.5
          ctx.moveTo(x, 0)
          ctx.lineTo(x, h)
        }
        for (let cRow = 0; cRow <= rows; cRow++) {
          const y = Math.round(offY + cRow * p.cellSize) + 0.5
          ctx.moveTo(0, y)
          ctx.lineTo(w, y)
        }
        ctx.stroke()
      }

      for (let pi = pulses.length - 1; pi >= 0; pi--) {
        const pulse = pulses[pi]
        const age = (now - pulse.t0) / 1000
        const ringR = age * PULSE_SPEED
        if (ringR > Math.hypot(w, h)) {
          pulses.splice(pi, 1)
          continue
        }
        const band = p.cellSize
        const minCol = Math.max(0, Math.floor((pulse.x - ringR - band - offX) / p.cellSize))
        const maxCol = Math.min(cols - 1, Math.floor((pulse.x + ringR + band - offX) / p.cellSize))
        const minRow = Math.max(0, Math.floor((pulse.y - ringR - band - offY) / p.cellSize))
        const maxRow = Math.min(rows - 1, Math.floor((pulse.y + ringR + band - offY) / p.cellSize))

        for (let cRow = minRow; cRow <= maxRow; cRow++) {
          for (let cCol = minCol; cCol <= maxCol; cCol++) {
            const i = cRow * cols + cCol
            const [cx, cy] = cellCenter(i)
            const dist = Math.hypot(cx - pulse.x, cy - pulse.y)
            if (Math.abs(dist - ringR) < band / 2 && p.maxOpacity > alphas[i]) {
              alphas[i] = p.maxOpacity
              touched[i] = now
            }
          }
        }
      }

      let anyVisible = pulses.length > 0
      const fadeStep = dt / FADE_DURATION
      const half = p.cellSize / 2

      for (let i = 0; i < alphas.length; i++) {
        let a = alphas[i]
        if (a <= 0) continue
        if (now - touched[i] > HOLD_TIME) {
          a = Math.max(0, a - fadeStep)
          alphas[i] = a
          if (a <= 0) continue
        }
        anyVisible = true

        const [cx, cy] = cellCenter(i)
        const gradient = ctx.createRadialGradient(cx, cy, half * 0.1, cx, cy, p.cellSize)
        gradient.addColorStop(0, `rgba(${cr}, ${cg}, ${cb}, ${a})`)
        gradient.addColorStop(1, `rgba(${cr}, ${cg}, ${cb}, 0)`)

        const x = cx - half + 0.5
        const y = cy - half + 0.5
        const s = p.cellSize - 1

        ctx.beginPath()
        ctx.roundRect(x, y, s, s, 2)
        if (p.fillOpacity > 0) {
          ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${a * p.fillOpacity})`
          ctx.fill()
        }
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1
        ctx.stroke()
      }

      if (anyVisible) {
        raf = requestAnimationFrame(draw)
      } else {
        running = false
        if (propsRef.current.gridOpacity <= 0) ctx.clearRect(0, 0, w, h)
      }
    }

    const wake = () => {
      if (running) return
      running = true
      lastFrame = performance.now()
      raf = requestAnimationFrame(draw)
    }
    wakeRef.current = wake

    const toLocal = (event: PointerEvent): [number, number] | null => {
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      const margin = propsRef.current.radius
      if (x < -margin || y < -margin || x > w + margin || y > h + margin) return null
      return [x, y]
    }

    const onPointerMove = (event: PointerEvent) => {
      const point = toLocal(event)
      if (!point) return
      energize(point[0], point[1])
      wake()
    }

    const onPointerDown = (event: PointerEvent) => {
      const point = toLocal(event)
      if (!point) return
      pulses.push({ x: point[0], y: point[1], t0: performance.now() })
      wake()
    }

    const measure = () => {
      rect = container.getBoundingClientRect()
    }

    const ro = new ResizeObserver(() => {
      rebuild()
      wake()
    })
    ro.observe(container)
    rebuild()
    wake()

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerdown', onPointerDown, { passive: true })
    window.addEventListener('scroll', measure, { passive: true })
    window.addEventListener('resize', measure)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('scroll', measure)
      window.removeEventListener('resize', measure)
    }
  }, [cellSize, finePointer, reducedMotion])

  if (reducedMotion || !finePointer) return null

  return (
    <div ref={containerRef} className="cursor-grid" aria-hidden="true">
      <canvas ref={canvasRef} className="cursor-grid__canvas" />
    </div>
  )
}
