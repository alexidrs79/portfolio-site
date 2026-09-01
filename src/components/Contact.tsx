import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data'
import { CursorGrid } from './CursorGrid'
import { MagneticLink } from './Magnetic'

const channels = [
  { label: 'EMAIL', href: `mailto:${profile.email}`, value: profile.email, external: false },
  { label: 'PHONE', href: `tel:${profile.phone.replace(/\s/g, '')}`, value: profile.phone, external: false },
  { label: 'GITHUB', href: profile.github, value: 'github.com/alexidrs79', external: true },
  { label: 'LINKEDIN', href: profile.linkedin, value: 'Alexi Dermosesian', external: true },
]

export function Contact() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="section__grid">
        <CursorGrid
          cellSize={64}
          color="#156fc8"
          radius={190}
          maxOpacity={0.55}
          fillOpacity={0.05}
          gridOpacity={0.05}
        />
      </div>
      <motion.div
        className="shell contact__inner"
        initial={reducedMotion ? false : { opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: reducedMotion ? 0 : 0.75 }}
      >
        <span className="contact__eyebrow">CONTACT / YEREVAN</span>
        <motion.h2
          id="contact-title"
          initial={reducedMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          <span className="reveal-mask">
            <motion.span
              variants={{
                hidden: { y: '105%' },
                visible: { y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              HAVE WORK
            </motion.span>
          </span>
          <span className="reveal-mask">
            <motion.span
              className="contact__accent"
              variants={{
                hidden: { y: '105%' },
                visible: { y: 0, transition: { duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              IN MIND?
            </motion.span>
          </span>
        </motion.h2>
        <div className="contact__bottom">
          <p>
            I&apos;m available for full-stack roles and freelance web projects in Armenia or
            remotely. Send me the scope, timeline and what you need built.
          </p>
          <MagneticLink className="button button--primary button--large" href={`mailto:${profile.email}`}>
            GET IN TOUCH <ArrowUpRight size={18} />
          </MagneticLink>
        </div>
        <div className="contact__links">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.external ? '_blank' : undefined}
              rel={channel.external ? 'noopener noreferrer' : undefined}
            >
              <span>{channel.label}</span>
              <strong>{channel.value}</strong>
              <ArrowUpRight size={17} />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
