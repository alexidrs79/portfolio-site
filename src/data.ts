export const profile = {
  name: 'ALEXI DERMOSESIAN',
  role: 'FULL-STACK WEB DEVELOPER',
  specialism: 'REACT · WORDPRESS · PHP',
  location: 'YEREVAN, ARMENIA',
  email: 'alexi.drs79@gmail.com',
  phone: '+374 41 044 241',
  github: 'https://github.com/alexidrs79',
  linkedin: 'https://www.linkedin.com/in/alexi-dermosesian',
}

export interface ProjectData {
  number: string
  category: string
  title: string
  context: string
  description: string
  technologies: string[]
  shot?: string
  shotMobile?: string
  url?: string
}

export const projects: ProjectData[] = [
  {
    number: '01',
    category: 'PERSONAL PRODUCT / FINANCE',
    title: 'Balancil',
    context: 'PERSONAL PROJECT · 2026',
    description:
      'A manual personal ledger I designed and built alone — React and TypeScript on the front, Laravel and Sanctum behind it. Accounts, transactions, budgets, savings goals and spending analytics, with every record scoped to the account that owns it.',
    technologies: ['React', 'TypeScript', 'Laravel', 'TanStack Query', 'Zod', 'Recharts', 'Vitest'],
    shot: '/work/balancil.webp',
    shotMobile: '/work/balancil-mobile.webp',
    url: 'https://balancil.vercel.app/',
  },
  {
    number: '02',
    category: 'PERSONAL PRODUCT / MEDIA',
    title: 'Stub',
    context: 'PERSONAL PROJECT · 2026',
    description:
      'A private film and television archive on a React front end and an Express, Prisma and Postgres API. State changes run inside transactions so two open tabs cannot disagree, and TMDb responses are cached so the archive still loads when TMDb is down.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'JWT', 'TMDb API'],
    shot: '/work/stub.webp',
    shotMobile: '/work/stub-mobile.webp',
    url: 'https://stub-du13.onrender.com/',
  },
  {
    number: '03',
    category: 'SAAS / TELECOM',
    title: 'Devotel',
    context: 'DEVOTEL · 2025 — PRESENT',
    description:
      'I worked across Devotel’s WordPress site and React interfaces, connecting custom themes, ACF content and interactive components to REST APIs.',
    technologies: ['WordPress', 'React', 'Custom Themes', 'ACF', 'JavaScript (ES6+)', 'PHP', 'REST API'],
    shot: '/work/devotel.webp',
    shotMobile: '/work/devotel-mobile.webp',
    url: 'https://devotel.com/',
  },
  {
    number: '04',
    category: 'REAL ESTATE / WORDPRESS',
    title: 'Realtyna',
    context: 'REALTYNA · 2023 — 2024',
    description:
      'I developed WordPress sites and plugins for Realtyna, integrating MLS, IDX and RESO data feeds alongside CRM and payment services.',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'MySQL', 'MLS / IDX APIs', 'CRM'],
    shot: '/work/realtyna.webp',
    shotMobile: '/work/realtyna-mobile.webp',
    url: 'https://realtyna.com/',
  },
  {
    number: '05',
    category: 'SAAS / IDENTITY',
    title: 'Devotel One',
    context: 'DEVOTEL · 2025 — PRESENT',
    description:
      'I worked on this authenticated React workspace for Devotel staff, with Google sign-in, domain-restricted access and WordPress REST API integration.',
    technologies: ['React', 'WordPress', 'REST API', 'Authentication', 'JavaScript (ES6+)', 'PHP'],
    url: 'https://one.devotel.com/',
  },
]

export interface ShippedProject {
  name: string
  meta: string
  url?: string
}

export const projectIndex: ShippedProject[] = [
  { name: 'Balancil', meta: 'PERSONAL PROJECT' },
  { name: 'Stub', meta: 'PERSONAL PROJECT' },
  { name: 'Lucibook', meta: 'DEVOTEL', url: 'https://landingpage.lucibook.co.uk/' },
  { name: 'Devotel Corporate Website', meta: 'DEVOTEL', url: 'https://devotel.com/' },
  { name: 'Devotel CMP Platform', meta: 'DEVOTEL', url: 'https://cmp.devotel.com/' },
  { name: 'Devotel Hub', meta: 'DEVOTEL', url: 'https://devhub.devotel.com/' },
  { name: 'Devotel One', meta: 'DEVOTEL', url: 'https://one.devotel.com/' },
  { name: 'Snap', meta: 'DEVOTEL', url: 'https://snaplanding.lucibook.co.uk/' },
  { name: 'DocsHub', meta: 'DEVOTEL', url: 'https://docshubs.devotel.com/' },
  { name: 'Esimora eSIM Platform', meta: 'DEVOTEL', url: 'https://esimora.com/' },
  { name: 'Fintranet', meta: 'PERSICI LTD', url: 'https://fintranet.io/' },
  { name: 'Fintranet Account', meta: 'PERSICI LTD', url: 'https://account.fintranet.io/' },
  { name: 'Sarafi.uk Currency Calculator', meta: 'PERSICI LTD', url: 'https://sarafi.uk/en' },
  { name: 'UK Exchange', meta: 'PERSICI LTD', url: 'https://uk.exchange/' },
  { name: 'Realtyna Corporate Website', meta: 'REALTYNA', url: 'https://realtyna.com/' },
  { name: 'Listings.com', meta: 'REALTYNA', url: 'https://listings.com/' },
  { name: 'Superb Painting', meta: 'FREELANCE', url: 'https://superbpainting.com/' },
  { name: 'Premier Edge Painting', meta: 'FREELANCE', url: 'https://premieredgepainting.com.au/' },
]

export interface ExperienceData {
  number: string
  role: string
  company: string
  period: string
  focus: string
  projects: string[]
}

export const experience: ExperienceData[] = [
  {
    number: '01',
    role: 'Full-Stack Web Developer',
    company: 'Devotel',
    period: '2025 — PRESENT',
    focus:
      'I build and maintain React interfaces and custom WordPress platforms, connecting both to REST APIs. My work also covers custom themes, ACF, Custom Post Types, Multisite, performance, deployment and site security.',
    projects: [
      'Devotel Corporate Website',
      'Devotel CMP Platform',
      'Devotel CMP Retail',
      'Devotel Hub',
      'Devotel One',
      'Lucibook',
      'Snap',
      'DocsHub',
      'Esimora eSIM Platform',
      'Bracesoft',
      'Bracecloud',
      'Zeela Ventures',
      'Devostark Inventory Synchronizer',
    ],
  },
  {
    number: '02',
    role: 'Full-Stack Web Developer',
    company: 'Persici LTD (Fintranet)',
    period: 'JUN 2024 — FEB 2026',
    focus:
      'I built React interfaces and WordPress features for Fintranet, including AML tools, an authenticated account portal and a live exchange calculator. I also handled theme work, SEO, content updates and site security.',
    projects: [
      'Fintranet',
      'Fintranet Account',
      'Sarafi.uk Currency Calculator',
      'UK Exchange',
      'PFS Ltd',
    ],
  },
  {
    number: '03',
    role: 'WordPress Developer & Plugin Coordinator',
    company: 'Realtyna',
    period: 'JAN 2023 — FEB 2024',
    focus:
      'I built custom WordPress sites, themes and plugins in PHP, JavaScript and MySQL. The work included MLS feeds, CRM and payment integrations, plus testing, deployment, performance and database optimisation.',
    projects: [
      'Realtyna Corporate Website',
      'Listings.com',
      'Klein Group',
      'New Homes Houston',
    ],
  },
  {
    number: '04',
    role: 'Freelance WordPress Developer',
    company: 'DermoWeb',
    period: '2019 — 2023',
    focus:
      'I built and maintained WordPress sites and WooCommerce stores for freelance clients using PHP, JavaScript and MySQL. Projects included custom theme work, SEO, security and page-builder development.',
    projects: [
      'Superb Painting',
      'Premier Edge Painting',
      'Superb Two Pak',
    ],
  },
  {
    number: '05',
    role: 'WordPress Developer',
    company: '4Rah Computer',
    period: '2018 — 2021',
    focus:
      'I developed WordPress and WooCommerce sites in PHP, JavaScript and MySQL, including the company website. I also prepared design assets in Illustrator and Photoshop and handled basic SEO.',
    projects: ['4Rah Computer'],
  },
]

export interface TechGroupData {
  title: string
  items: string[]
}

export const techGroups: TechGroupData[] = [
  {
    title: 'Frontend Development',
    items: [
      'JavaScript (ES6+)',
      'TypeScript',
      'React',
      'HTML5',
      'CSS3',
      'Sass/SCSS',
      'CSS Grid & Flexbox',
      'Tailwind CSS',
      'Bootstrap',
      'Responsive Web Design',
      'Cross-browser Compatibility',
      'Web Accessibility (WCAG)',
      'Performance Optimization',
    ],
  },
  {
    title: 'Frontend Frameworks & Tooling',
    items: [
      'Next.js',
      'Redux',
      'TanStack Query',
      'React Router',
      'Vite',
      'Webpack',
      'npm/yarn',
    ],
  },
  {
    title: 'Backend & Databases',
    items: [
      'Node.js',
      'PHP',
      'Laravel',
      'MySQL',
      'SQL',
      'GraphQL',
      'Database Design & Query Optimization',
      'Authentication & Authorization',
    ],
  },
  {
    title: 'APIs & Integrations',
    items: [
      'REST API Development & Integration',
      'JSON',
      'Third-party API Integration',
      'Payment Gateway Integration',
      'Postman',
    ],
  },
  {
    title: 'Testing & Code Quality',
    items: ['Vitest', 'Jest', 'PHPUnit', 'Pest', 'ESLint', 'Prettier'],
  },
  {
    title: 'WordPress Development',
    items: [
      'WordPress Core',
      'Custom Theme & Plugin Development',
      'Advanced Custom Fields (ACF)',
      'WordPress REST API',
      'WordPress Multisite',
      'WooCommerce',
      'Gutenberg Block Development',
    ],
  },
  {
    title: 'Infrastructure & Security',
    items: [
      'Docker',
      'Linux',
      'Apache',
      'Nginx',
      'SSL/TLS Configuration',
      'Server Deployment & Security',
    ],
  },
  {
    title: 'Tools & Workflow',
    items: [
      'Git',
      'GitHub',
      'GitLab',
      'Chrome DevTools',
      'Figma',
      'Adobe Photoshop & Illustrator',
      'UI/UX Principles',
    ],
  },
  {
    title: 'SEO',
    items: ['Technical SEO', 'On-page Optimization', 'Content Strategy'],
  },
]

export interface EducationData {
  degree: string
  school: string
  period: string
  detail: string
}

export const education: EducationData[] = [
  {
    degree: 'Bachelor of Software Engineering',
    school: 'Tehran Azad University',
    period: '2018 — 2024',
    detail: 'GPA 18.92 · Thesis: a Subway Surfers-style game built in Unity',
  },
  {
    degree: 'Diploma, Software Engineering',
    school: 'Firooz Bahram',
    period: '2016 — 2018',
    detail: 'GPA 18.50 · Thesis: a website for buying music online',
  },
]

export interface CertificationData {
  name: string
  issuer: string
}

export const certifications: CertificationData[] = [
  { name: 'Meta Front-End Developer Professional Certificate', issuer: 'META / COURSERA' },
  { name: 'Meta Back-End Developer Professional Certificate', issuer: 'META / COURSERA' },
  { name: 'IBM Full Stack Software Developer Professional Certificate', issuer: 'IBM / COURSERA' },
  { name: 'JavaScript Algorithms and Data Structures', issuer: 'FREECODECAMP' },
  { name: 'Responsive Web Design', issuer: 'FREECODECAMP' },
  { name: 'React — The Complete Guide', issuer: 'UDEMY' },
  { name: 'PHP & Laravel — The Complete Guide', issuer: 'UDEMY' },
  { name: 'Advanced WordPress Development', issuer: 'UDEMY' },
  { name: 'Docker & Kubernetes: The Practical Guide', issuer: 'UDEMY' },
  { name: 'Git & GitHub — The Complete Guide', issuer: 'UDEMY' },
]

export interface LanguageData {
  name: string
  level: string
}

export const languages: LanguageData[] = [
  { name: 'English', level: 'ADVANCED' },
  { name: 'Armenian', level: 'NATIVE' },
  { name: 'Persian', level: 'NATIVE' },
]
