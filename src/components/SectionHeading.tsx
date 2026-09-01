import { motion, useReducedMotion } from 'framer-motion'

interface SectionHeadingProps {
  index: string
  title: string
  copy?: string
}

export function SectionHeading({ index, title, copy }: SectionHeadingProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className="section-heading"
      initial={reducedMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      <span className="section-heading__index">{index}</span>
      <h2 className="reveal-mask">
        <motion.span
          variants={{
            hidden: { y: '105%' },
            visible: { y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          {title}
        </motion.span>
      </h2>
      {copy && <p>{copy}</p>}
    </motion.div>
  )
}
