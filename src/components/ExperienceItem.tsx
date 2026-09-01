import { motion, useReducedMotion } from 'framer-motion'
import type { ExperienceData } from '../data'

export function ExperienceItem({ item }: { item: ExperienceData }) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.article
      className="experience-item"
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reducedMotion ? 0 : 0.6 }}
    >
      <span className="experience-item__number">{item.number}</span>
      <span className="experience-item__period">{item.period}</span>
      <div className="experience-item__role">
        <h3>{item.role}</h3>
        <p>{item.company}</p>
      </div>
      <div className="experience-item__focus">
        <span>FOCUS</span>
        <p>{item.focus}</p>
        {item.projects.length > 0 && (
          <ul className="experience-item__projects">
            {item.projects.map((project) => (
              <li key={project}>{project}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  )
}
