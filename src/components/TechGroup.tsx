import { motion, useReducedMotion } from 'framer-motion'
import type { TechGroupData } from '../data'

interface TechGroupProps extends TechGroupData {
  index: number
}

export function TechGroup({ title, items, index }: TechGroupProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className="tech-row"
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: reducedMotion ? 0 : 0.5 }}
    >
      <span className="tech-row__index">{String(index + 1).padStart(2, '0')}</span>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </motion.div>
  )
}
