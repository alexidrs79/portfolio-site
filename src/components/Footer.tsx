import { profile } from '../data'
import { MagneticLink } from './Magnetic'

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <span>© 2026 {profile.name}</span>
        <span>{profile.role} · {profile.location}</span>
        <nav aria-label="Social links">
          <MagneticLink href={profile.github} target="_blank" rel="noopener noreferrer">GITHUB</MagneticLink>
          <MagneticLink href={profile.linkedin} target="_blank" rel="noopener noreferrer">LINKEDIN</MagneticLink>
        </nav>
      </div>
    </footer>
  )
}
