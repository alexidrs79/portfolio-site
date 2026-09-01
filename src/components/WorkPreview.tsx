import { useEffect } from 'react'
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import type { ProjectData } from '../data'
import { SiteShot } from './SiteShot'

export function WorkPreview({ project }: { project: ProjectData | null }) {
  const reducedMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const springX = useSpring(pointerX, { stiffness: 240, damping: 30, mass: 0.7 })
  const springY = useSpring(pointerY, { stiffness: 240, damping: 30, mass: 0.7 })
  const x = reducedMotion ? pointerX : springX
  const y = reducedMotion ? pointerY : springY

  useEffect(() => {
    const track = (event: PointerEvent) => {
      pointerX.set(event.clientX)
      pointerY.set(event.clientY)
    }
    window.addEventListener('pointermove', track, { passive: true })
    return () => window.removeEventListener('pointermove', track)
  }, [pointerX, pointerY])

  return (
    <motion.div className="work-preview" style={{ x, y }} aria-hidden="true">
      <div className="work-preview__anchor">
        <AnimatePresence>
          {project && (
            <motion.div
              key={project.title}
              className="work-preview__frame"
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reducedMotion ? 0.15 : 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <SiteShot project={project} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
