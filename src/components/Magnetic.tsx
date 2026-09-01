import { motion, type HTMLMotionProps } from 'framer-motion'
import { useMagnetic } from '../hooks/useMagnetic'

export function MagneticLink({
  children,
  ...props
}: HTMLMotionProps<'a'>) {
  const magnetic = useMagnetic()

  return (
    <motion.a
      {...props}
      style={magnetic.style}
      onPointerMove={magnetic.onPointerMove}
      onPointerLeave={magnetic.onPointerLeave}
    >
      {children}
    </motion.a>
  )
}

export function MagneticButton({
  children,
  ...props
}: HTMLMotionProps<'button'>) {
  const magnetic = useMagnetic()

  return (
    <motion.button
      {...props}
      style={magnetic.style}
      onPointerMove={magnetic.onPointerMove}
      onPointerLeave={magnetic.onPointerLeave}
    >
      {children}
    </motion.button>
  )
}
