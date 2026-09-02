import type { CSSProperties } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Contact } from './components/Contact'
import { ExperienceItem } from './components/ExperienceItem'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Project } from './components/Project'
import { SectionHeading } from './components/SectionHeading'
import { SectionIndex } from './components/SectionIndex'
import { TechGroup } from './components/TechGroup'
import {
  certifications,
  education,
  experience,
  languages,
  profile,
  projectIndex,
  projects,
  techGroups,
} from './data'

function App() {
  const reducedMotion = useReducedMotion()

  return (
    <>
      <SectionIndex />
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />

        <section className="work section" id="work" aria-labelledby="work-title">
          <div className="shell">
            <div id="work-title">
              <SectionHeading
                index="01 / 06"
                title="SELECTED WORK"
                copy="Two products of my own, plus platform work in telecom and real estate."
              />
            </div>
            <div className="project-list">
              {projects.map((project, index) => (
                <Project
                  key={project.title}
                  project={project}
                  index={index}
                  total={projects.length}
                />
              ))}
            </div>
            <motion.div
              className="work-index"
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: reducedMotion ? 0 : 0.6 }}
            >
              <span className="work-index__label">
                ALSO SHIPPED <em>A SELECTION OF {projectIndex.length}</em>
              </span>
              <ul style={{ '--index-rows': Math.ceil(projectIndex.length / 2) } as CSSProperties}>
                {projectIndex.map((item, position) => {
                  const row = (
                    <>
                      <span className="work-index__name">
                        <b>{String(position + 1).padStart(2, '0')}</b>
                        {item.name}
                      </span>
                      <em>{item.meta}</em>
                    </>
                  )

                  return (
                    <li key={item.name}>
                      {item.url ? (
                        <a href={item.url} target="_blank" rel="noopener noreferrer">{row}</a>
                      ) : (
                        <span className="work-index__row">{row}</span>
                      )}
                    </li>
                  )
                })}
              </ul>
              <p className="work-index__note">
                Six years of client sites, platform work and plugins sit behind this list.{' '}
                <a href="#contact">Ask me for the full rundown</a>.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="experience section" id="experience" aria-labelledby="experience-title">
          <div className="shell">
            <div id="experience-title">
              <SectionHeading index="02 / 06" title="EXPERIENCE" />
            </div>
            <div className="experience-list">
              {experience.map((item) => <ExperienceItem key={item.company} item={item} />)}
            </div>
          </div>
        </section>

        <section className="about section" id="about" aria-labelledby="about-title">
          <div className="shell">
            <div id="about-title">
              <SectionHeading index="03 / 06" title="A LITTLE ABOUT ME" />
            </div>
            <motion.div
              className="about__grid"
              initial={reducedMotion ? false : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
            >
              <p className="about__statement">
                <span className="reveal-mask">
                  <motion.span
                    variants={{
                      hidden: { y: '105%' },
                      visible: { y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
                    }}
                  >
                    I WORK ACROSS THE STACK, WITH MOST OF MY TIME IN{' '}
                    <em>REACT, PHP AND WORDPRESS.</em>
                  </motion.span>
                </span>
              </p>
              <div className="about__copy">
                <img
                  className="about__portrait"
                  src="/alexi.webp"
                  alt={profile.name}
                  width={657}
                  height={855}
                  loading="lazy"
                  decoding="async"
                />
                <span>PROFILE / YEREVAN</span>
                <p>
                  I&apos;m Alexi, a full-stack web developer with six years in the IT industry,
                  working on React interfaces, PHP back ends and WordPress platforms. I build
                  custom themes and plugins, connect third-party APIs, and take projects from
                  development through deployment.
                </p>
                <p>
                  I started my studies in Kuala Lumpur and finished my bachelor&apos;s in Tehran.
                  Away from the keyboard I&apos;m the caregiver for my family, a musician, and a
                  volunteer at a local scout club where I mentor young people.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="stack section" id="stack" aria-labelledby="stack-title">
          <div className="shell">
            <div id="stack-title">
              <SectionHeading index="04 / 06" title="TECHNICAL STACK" />
            </div>
            <div className="stack__rows">
              {techGroups.map((group, index) => (
                <TechGroup key={group.title} {...group} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="credentials section" id="credentials" aria-labelledby="credentials-title">
          <div className="shell">
            <div id="credentials-title">
              <SectionHeading
                index="05 / 06"
                title="EDUCATION & CERTIFICATIONS"
                copy="Software engineering degree, professional certificates and languages."
              />
            </div>
            <motion.div
              className="credentials__grid"
              initial={reducedMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.02 }}
              transition={{ duration: reducedMotion ? 0 : 0.65 }}
            >
              <div className="credentials__column">
                <span className="credentials__label">EDUCATION</span>
                <ul className="credentials__education">
                  {education.map((item) => (
                    <motion.li
                      key={item.degree}
                      initial={reducedMotion ? false : 'hidden'}
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.25 }}
                    >
                      <span className="credentials__period">{item.period}</span>
                      <h3 className="reveal-mask">
                        <motion.span
                          variants={{
                            hidden: { y: '105%' },
                            visible: { y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                          }}
                        >
                          {item.degree}
                        </motion.span>
                      </h3>
                      <p>{item.school}</p>
                      <p className="credentials__detail">{item.detail}</p>
                    </motion.li>
                  ))}
                </ul>

                <span className="credentials__label">LANGUAGES</span>
                <ul className="credentials__languages">
                  {languages.map((item) => (
                    <li key={item.name}>
                      <span>{item.name}</span>
                      <em>{item.level}</em>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="credentials__column">
                <span className="credentials__label">
                  CERTIFICATIONS <em>{certifications.length} TOTAL</em>
                </span>
                <ul className="credentials__certs">
                  {certifications.map((item) => (
                    <li key={item.name}>
                      <span>{item.name}</span>
                      <em>{item.issuer}</em>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
