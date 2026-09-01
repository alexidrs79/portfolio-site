import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { experience, profile, projectIndex } from '../data'
import { CursorGrid } from './CursorGrid'
import { MagneticLink } from './Magnetic'

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const pad = (value: number) => String(value).padStart(2, '0')

const stats = [
  { value: '06', label: 'YEARS SHIPPING' },
  { value: pad(projectIndex.length), label: 'PRODUCTION SITES' },
  { value: pad(experience.length), label: 'CAREER ROLES' },
]

const heroLines = [
  ['I', 'BUILD', 'FOR', 'THE'],
  ['WEB,', 'FRONT', 'TO', 'BACK.'],
]

export function Hero() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="section__grid">
        <CursorGrid
          cellSize={64}
          color="#4da3ff"
          radius={190}
          maxOpacity={0.7}
          fillOpacity={0.06}
          gridOpacity={0.035}
        />
      </div>
      <div className="shell hero__inner">
        <motion.div
          className="hero__eyebrow"
          initial={reducedMotion ? false : 'hidden'}
          animate="visible"
          variants={reveal}
          transition={{ duration: reducedMotion ? 0 : 0.65 }}
        >
          <span>
            {profile.role} <em>/ {profile.specialism}</em>
          </span>
          <span className="hero__location">{profile.location}</span>
        </motion.div>

        <h1 id="hero-title">
          {heroLines.map((line, lineIndex) => (
            <span className="hero__line reveal-mask" key={line.join('-')}>
              <span className="hero__words">
                {line.map((word, wordIndex) => (
                  <motion.span
                    className={word === 'BACK.' ? 'hero__accent' : undefined}
                    key={word}
                    initial={reducedMotion ? false : { y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: reducedMotion ? 0 : 0.8,
                      delay: reducedMotion ? 0 : 0.08 + lineIndex * 0.12 + wordIndex * 0.055,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </span>
          ))}
        </h1>

        <div className="hero__bottom">
          <motion.div
            className="hero__visual"
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reducedMotion ? 0 : 1, delay: 0.3 }}
          >
            <dl className="hero-stats">
              {stats.map((stat) => (
                <div className="hero-stats__item" key={stat.label}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
            <p className="hero-stats__note">
              FRONTEND <span>·</span> BACKEND <span>·</span> WORDPRESS <span>·</span> INTEGRATIONS
            </p>
          </motion.div>

          <motion.div
            className="hero__intro"
            initial={reducedMotion ? false : 'hidden'}
            animate="visible"
            variants={reveal}
            transition={{ duration: reducedMotion ? 0 : 0.75, delay: 0.2 }}
          >
            <p>
              I build React interfaces, PHP back ends and custom WordPress platforms. Over six
              years, I&apos;ve worked on telecom, fintech, real-estate and e-commerce projects
              from development through deployment.
            </p>
            <div className="hero__actions">
              <MagneticLink className="button button--primary" href="#work">
                VIEW WORK <ArrowDownRight size={16} />
              </MagneticLink>
              <MagneticLink className="button button--secondary" href="#contact">
                LET&apos;S TALK <ArrowUpRight size={16} />
              </MagneticLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
