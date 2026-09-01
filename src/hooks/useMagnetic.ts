import { useEffect, useState } from 'react'
import { useReducedMotion, useSpring } from 'framer-motion'

export function useMagnetic(strength = 10) {
  const reducedMotion = useReducedMotion()
  const [canHover, setCanHover] = useState(false)
  const x = useSpring(0, { stiffness: 320, damping: 24, mass: 0.45 })
  const y = useSpring(0, { stiffness: 320, damping: 24, mass: 0.45 })

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setCanHover(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (!canHover || reducedMotion) return
    const rect = event.currentTarget.getBoundingClientRect()
    x.set(((event.clientX - rect.left) / rect.width - 0.5) * strength * 2)
    y.set(((event.clientY - rect.top) / rect.height - 0.5) * strength * 2)
  }

  const onPointerLeave = () => {
    x.set(0)
    y.set(0)
  }

  return {
    style: reducedMotion || !canHover ? undefined : { x, y },
    onPointerMove,
    onPointerLeave,
  }
}
