import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { profile } from '../data'
import { MagneticButton, MagneticLink } from './Magnetic'

const links = [
  { label: 'WORK', href: '#work' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const reducedMotion = useReducedMotion()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const mobileNavRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    const nav = mobileNavRef.current
    const button = menuButtonRef.current
    const links = nav ? Array.from(nav.querySelectorAll<HTMLAnchorElement>('a[href]')) : []
    const focusable = button ? [button, ...links] : links

    document.body.style.overflow = 'hidden'
    links[0]?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        button?.focus()
        return
      }

      if (event.key !== 'Tab' || focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__pill">
        <MagneticLink className="wordmark" href="#top" aria-label="Alexi Dermosesian, home">
          {profile.name}
        </MagneticLink>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <MagneticLink key={link.href} href={link.href}>
              {link.label}
            </MagneticLink>
          ))}
        </nav>
        <MagneticButton
          ref={menuButtonRef}
          className="menu-button"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </MagneticButton>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            ref={mobileNavRef}
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={reducedMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: reducedMotion ? 0 : 0.25 }}
          >
            <div className="shell mobile-nav__links">
              {links.map((link, index) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                  <span>0{index + 1}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
