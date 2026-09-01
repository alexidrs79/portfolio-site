import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Building2, Check, KeyRound, ScanLine, Signal } from 'lucide-react'
import type { ProjectData, ProjectKind } from '../data'

const listings = [
  { place: 'HOUSTON, TX', price: '$486,000', meta: '4 BD · 3 BA · 2,410 SQFT', status: 'ACTIVE' },
  { place: 'AUSTIN, TX', price: '$729,500', meta: '3 BD · 2 BA · 1,860 SQFT', status: 'IDX' },
  { place: 'OAKVILLE, ON', price: '$1,240,000', meta: '5 BD · 4 BA · 3,120 SQFT', status: 'RESO' },
]

const extracted = [
  ['Supplier', 'Office Central Ltd'],
  ['Date', '12 May 2024'],
  ['Total', '£850.00'],
  ['VAT', '£141.67'],
  ['Category', 'Office supplies'],
]

function ProductVisual({ kind }: { kind: ProjectKind }) {
  if (kind === 'corporate') {
    return (
      <div className="product-ui product-ui--devotel">
        <div className="devotel__head"><b>devotel</b><span>Instantly everywhere, always connected</span></div>
        <div className="devotel__map">
          <div className="map-orbit map-orbit--one" />
          <div className="map-orbit map-orbit--two" />
          <span className="map-pulse"><Signal size={18} /></span>
          <span className="map-place map-place--a">SMS API</span>
          <span className="map-place map-place--b">eSIM</span>
          <span className="map-place map-place--c">OTP</span>
        </div>
        <code className="devotel__snippet">POST /api/v1/sms/quick-send → 200 OK</code>
        <div className="devotel__metrics">
          <div><small>CHANNEL</small><strong>SMS</strong></div>
          <div><small>DELIVERY</small><strong>API</strong></div>
          <div className="status-bars">{[82, 55, 94, 71, 88].map((width) => <i key={width} style={{ width: `${width}%` }} />)}</div>
        </div>
      </div>
    )
  }

  if (kind === 'realtyna') {
    return (
      <div className="product-ui product-ui--realtyna">
        <div className="realtyna__copy">
          <span className="ui-kicker"><Building2 size={14} /> REALTYNA / MLS · IDX · RESO</span>
          <strong>Property data,<br />delivered live.</strong>
          <div className="realtyna__stats">
            <div><small>PROPERTY DATA</small><b>MLS / IDX</b></div>
            <div><small>STANDARD</small><b>RESO</b></div>
            <div><small>PLATFORM</small><b>WORDPRESS</b></div>
          </div>
        </div>
        <ul className="listing-cards">
          {listings.map((listing) => (
            <li key={listing.price}>
              <span className="listing-cards__thumb" aria-hidden="true" />
              <div>
                <small>{listing.place}</small>
                <b>{listing.price}</b>
                <em>{listing.meta}</em>
              </div>
              <i>{listing.status}</i>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  if (kind === 'one') {
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

  return (
    <div className="product-ui product-ui--snap">
      <div className="snap__copy">
        <span className="ui-kicker"><ScanLine size={14} /> SNAP / DOCUMENT INTELLIGENCE</span>
        <strong>Documents in.<br />Bookkeeping ready.</strong>
        <ol className="snap__flow">
          {['Capture', 'Extract', 'Review', 'Export'].map((step, position) => (
            <li key={step}>
              <small>{String(position + 1).padStart(2, '0')}</small>
              {step}
            </li>
          ))}
        </ol>
      </div>
      <div className="snap__card">
        <div className="snap__card-head"><span>EXTRACTED DETAILS</span><em>VALIDATED</em></div>
        <dl>
          {extracted.map(([field, value]) => (
            <div key={field}>
              <dt>{field}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <span className="snap__badge"><Check size={12} /> READY FOR BOOKKEEPING</span>
      </div>
    </div>
  )
}

export function Project({ project, index }: { project: ProjectData; index: number }) {
  const reducedMotion = useReducedMotion()
  const visualRef = useRef<HTMLAnchorElement>(null)
  const { scrollYProgress } = useScroll({
    target: visualRef,
    offset: ['start end', 'end start'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])
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
          <ProductVisual kind={project.kind} />
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
      {index < 3 && <span className="project__divider" aria-hidden="true" />}
    </motion.article>
  )
}
