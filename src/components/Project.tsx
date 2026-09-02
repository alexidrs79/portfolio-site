import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { ProjectData } from '../data'
import { SiteShot } from './SiteShot'

export function Project({
  project,
  index,
  total,
}: {
  project: ProjectData
  index: number
  total: number
}) {
  const reducedMotion = useReducedMotion()
  const visualRef = useRef<HTMLAnchorElement>(null)
  const { scrollYProgress } = useScroll({
    target: visualRef,
    offset: ['start end', 'end start'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-3.4%', '3.4%'])
  const href = project.url ?? '#contact'
  const label = project.url ? 'VISIT SITE' : 'REQUEST DETAILS'

  return (
    <motion.article
      className="project"
      initial={reducedMotion ? false : { opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reducedMotion ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.a
        ref={visualRef}
        className="project__visual"
        href={href}
        target={project.url ? '_blank' : undefined}
        rel={project.url ? 'noopener noreferrer' : undefined}
        aria-label={`${label}: ${project.title}`}
        tabIndex={-1}
        initial={reducedMotion ? false : { clipPath: 'inset(10% 0 10% 0)' }}
        whileInView={{ clipPath: 'inset(0% 0 0% 0)' }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: reducedMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div className="project__parallax" style={reducedMotion ? undefined : { y: parallaxY }}>
          <SiteShot project={project} />
        </motion.div>
        <span className="project__overlay">
          {label} <ArrowUpRight size={18} />
        </span>
      </motion.a>
      <div className="project__meta">
        <div className="project__number">{project.number}</div>
        <div className="project__title">
          <span>{project.category}</span>
          <h3>{project.title}</h3>
          <p className="project__context">{project.context}</p>
        </div>
        <div className="project__details">
          <p>{project.description}</p>
          <p className="project__tech">{project.technologies.join(' · ')}</p>
          <a
            href={href}
            target={project.url ? '_blank' : undefined}
            rel={project.url ? 'noopener noreferrer' : undefined}
          >
            {label} <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
      {index < total - 1 && <span className="project__divider" aria-hidden="true" />}
    </motion.article>
  )
}
