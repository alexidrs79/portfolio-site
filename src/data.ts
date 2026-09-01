export const profile = {
  name: 'ALEXI DERMOSESIAN',
  role: 'FULL-STACK WEB DEVELOPER',
  specialism: 'REACT · WORDPRESS · PHP',
  location: 'YEREVAN, ARMENIA',
  email: 'alexi.drs79@gmail.com',
  phone: '+98 901 638 5480',
  github: 'https://github.com/alexidrs79',
  linkedin: 'https://www.linkedin.com/in/alexi-dermosesian',
}

export type ProjectKind = 'corporate' | 'realtyna' | 'one' | 'snap'

export interface ProjectData {
  number: string
  category: string
  title: string
  context: string
  description: string
  technologies: string[]
  kind: ProjectKind
  url?: string
}

export const projects: ProjectData[] = [
  {
    number: '01',
    category: 'SAAS / TELECOM',
    title: 'Devotel',
    context: 'DEVOTEL · 2025 — PRESENT',
    description:
      'I worked across Devotel’s WordPress site and React interfaces, connecting custom themes, ACF content and interactive components to REST APIs.',
    technologies: ['WordPress', 'React', 'Custom Themes', 'ACF', 'JavaScript (ES6+)', 'PHP', 'REST API'],
    kind: 'corporate',
    url: 'https://devotel.com/',
  },
  {
    number: '02',
    category: 'REAL ESTATE / WORDPRESS',
    title: 'Realtyna',
    context: 'REALTYNA · 2023 — 2024',
    description:
      'I developed WordPress sites and plugins for Realtyna, integrating MLS, IDX and RESO data feeds alongside CRM and payment services.',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'MySQL', 'MLS / IDX APIs', 'CRM'],
    kind: 'realtyna',
    url: 'https://realtyna.com/',
  },
  {
    number: '03',
    category: 'SAAS / IDENTITY',
    title: 'Devotel One',
    context: 'DEVOTEL · 2025 — PRESENT',
    description:
      'I worked on this authenticated React workspace for Devotel staff, with Google sign-in, domain-restricted access and WordPress REST API integration.',
    technologies: ['React', 'WordPress', 'REST API', 'Authentication', 'JavaScript (ES6+)', 'PHP'],
    kind: 'one',
    url: 'https://one.devotel.com/',
  },
  {
    number: '04',
    category: 'SAAS / DOCUMENT INTELLIGENCE',
    title: 'Snap',
    context: 'DEVOTEL · 2025 — PRESENT',
    description:
      'I worked on the React and WordPress front end for this accounting product, which prepares invoices, receipts and statements for export by CSV or API.',
    technologies: ['WordPress', 'React', 'JavaScript (ES6+)', 'REST API', 'PHP', 'Integrations'],
    kind: 'snap',
    url: 'https://snaplanding.lucibook.co.uk/',
  },
]

export interface ShippedProject {
  name: string
  meta: string
  url?: string
}

export const projectIndex: ShippedProject[] = [
  { name: 'Devotel Corporate Website', meta: 'DEVOTEL', url: 'https://devotel.com/' },
  { name: 'Devotel CMP Platform', meta: 'DEVOTEL', url: 'https://cmp.devotel.com/' },
  { name: 'Devotel CMP Retail', meta: 'DEVOTEL', url: 'https://cmp-retail.devotel.com/' },
  { name: 'Devotel Hub', meta: 'DEVOTEL', url: 'https://devhub.devotel.com/' },
  { name: 'Devotel One', meta: 'DEVOTEL', url: 'https://one.devotel.com/' },
  { name: 'Snap', meta: 'DEVOTEL', url: 'https://snaplanding.lucibook.co.uk/' },
  { name: 'DocsHub', meta: 'DEVOTEL', url: 'https://docshubs.devotel.com/' },
  { name: 'Esimora eSIM Platform', meta: 'DEVOTEL', url: 'https://esimora.com/' },
  { name: 'Bracesoft', meta: 'DEVOTEL', url: 'https://bracesoft.com/' },
  { name: 'Bracecloud', meta: 'DEVOTEL', url: 'https://bracecloud.com/' },
  { name: 'Zeela Ventures', meta: 'DEVOTEL', url: 'https://zeelaventures.com/' },
  { name: 'Devostark Inventory Synchronizer', meta: 'DEVOTEL · PLUGIN' },
  { name: 'Fintranet', meta: 'PERSICI LTD', url: 'https://fintranet.io/' },
  { name: 'Fintranet Account', meta: 'PERSICI LTD', url: 'https://account.fintranet.io/' },
  { name: 'Sarafi.uk Currency Calculator', meta: 'PERSICI LTD', url: 'https://sarafi.uk/en' },
  { name: 'UK Exchange', meta: 'PERSICI LTD', url: 'https://uk.exchange/' },
  { name: 'PFS Ltd', meta: 'PERSICI LTD', url: 'https://pfs.ltd/' },
  { name: 'Realtyna Corporate Website', meta: 'REALTYNA', url: 'https://realtyna.com/' },
  { name: 'Listings.com', meta: 'REALTYNA', url: 'https://listings.com/' },
  { name: 'Klein Group', meta: 'REALTYNA', url: 'https://kleingroup.com/' },
  { name: 'New Homes Houston', meta: 'REALTYNA', url: 'https://newhomeshoustontx.com/' },
  { name: 'Superb Painting', meta: 'DERMOWEB', url: 'https://superbpainting.com/' },
  { name: 'Premier Edge Painting', meta: 'DERMOWEB', url: 'https://premieredgepainting.com.au/' },
  { name: 'Superb Two Pak', meta: 'DERMOWEB', url: 'https://superbtwopak.com.au/' },
  { name: '4Rah Computer', meta: '4RAH COMPUTER', url: 'https://4rahecomputer.com/' },
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
      'Devotel',
      'Devotel CMP Retail',
      'Devotel Hub',
      'Devotel One',
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
      'HTML5',
      'CSS3',
      'Sass/SCSS',
      'React',
      'React Hooks',
      'CSS Grid & Flexbox',
      'Tailwind CSS',
      'Bootstrap',
      'Responsive Design',
      'Cross-browser Compatibility',
      'Accessibility (WCAG)',
      'Performance Optimisation',
      'jQuery',
    ],
  },
  {
    title: 'Frameworks & Tooling',
    items: [
      'Next.js',
      'Redux',
      'TanStack Query',
      'React Router',
      'Vite',
      'Webpack',
      'npm / yarn',
    ],
  },
  {
    title: 'WordPress Development',
    items: [
      'WordPress Core',
      'Custom Themes',
      'Custom Plugins',
      'Custom Post Types',
      'ACF',
      'REST API',
      'Multisite',
      'WooCommerce',
      'Gutenberg Blocks',
    ],
  },
  {
    title: 'WordPress Builders',
    items: ['Elementor', 'Flatsome', 'Betheme', 'Avada', 'Woodmart', 'Divi Builder'],
  },
  {
    title: 'Backend & Databases',
    items: [
      'PHP',
      'Laravel',
      'Node.js',
      'MySQL',
      'SQL',
      'GraphQL',
    ],
  },
  {
    title: 'APIs & Integrations',
    items: [
      'REST API Development',
      'JSON',
      'Third-party APIs',
      'Payment Gateways',
      'API Authentication',
      'Postman',
    ],
  },
  {
    title: 'Testing & Code Quality',
    items: ['Vitest', 'Jest', 'PHPUnit', 'Pest', 'ESLint', 'Prettier'],
  },
  {
    title: 'Infrastructure & Security',
    items: [
      'Docker',
      'Linux',
      'Apache',
      'Nginx',
      'SSL/TLS',
      'Server Deployment',
      'Server Security',
      'Backup Strategies',
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
      'Photoshop',
      'Illustrator',
      'Canva',
      'UI/UX',
    ],
  },
  {
    title: 'SEO',
    items: ['Technical SEO', 'On-page Optimisation', 'Content Strategy'],
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
