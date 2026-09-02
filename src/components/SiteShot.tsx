import { KeyRound } from 'lucide-react'
import type { ProjectData } from '../data'

function AuthVisual() {
  return (
    <div className="product-ui product-ui--one">
      <div className="one__card">
        <span className="one__brand">devotel <b>one</b></span>
        <strong>Devotel Authentication</strong>
        <p>Signing you in to one.devotel.com</p>
        <span className="one__button"><KeyRound size={14} /> Sign in with Google</span>
        <span className="one__note">AUTHORISED COMPANY ACCOUNTS ONLY</span>
      </div>
      <ul className="one__apps">
        {['CMP', 'HUB', 'RETAIL', 'DOCSHUB'].map((app) => <li key={app}>{app}</li>)}
      </ul>
    </div>
  )
}

export function SiteShot({ project }: { project: ProjectData }) {
  return (
    <div className="site-shot">
      <div className="site-shot__viewport">
        {project.shot ? (
          <picture>
            {project.shotMobile && <source media="(max-width: 767px)" srcSet={project.shotMobile} />}
            <img
              className="site-shot__img"
              src={project.shot}
              alt={`${project.title} website`}
              loading="lazy"
              decoding="async"
            />
          </picture>
        ) : (
          <AuthVisual />
        )}
      </div>
    </div>
  )
}
