import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const sections = [
  ['work', '01 / 06'],
  ['experience', '02 / 06'],
  ['about', '03 / 06'],
  ['stack', '04 / 06'],
  ['credentials', '05 / 06'],
  ['contact', '06 / 06'],
] as const

export function SectionIndex() {
  const reducedMotion = useReducedMotion()
  const [active, setActive] = useState('01 / 06')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const update = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7)
      const marker = window.scrollY + window.innerHeight * 0.42
      let current: string = sections[0][1]

      for (const [id, label] of sections) {
        const element = document.getElementById(id)
        if (element && element.offsetTop <= marker) current = label
      }
      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          className="section-index"
          aria-hidden="true"
          initial={reducedMotion ? false : { opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 12 }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={active}
              initial={reducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: reducedMotion ? 0 : 0.2 }}
            >
              {active}
            </motion.span>
          </AnimatePresence>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
