// =====================================================================
//  PORTFOLIO PROJECTS: this is the only file you edit to manage work.
//
//  HOW TO ADD A PROJECT
//  1. Put screenshots in  public/projects/<your-project>/  (e.g. cover.jpg, 1.jpg, 2.jpg)
//     (Or import them from src/assets and use the imported variable instead of a string.)
//  2. Copy the example object below into the `projects` array and fill it in.
//  3. Save. The project appears in the Work grid, gets its own page at
//     /work/<slug>, and shows on the home page if `featured: true`.
//
//  FIELD GUIDE
//  id                unique number or string
//  slug              unique, lowercase, hyphens only. Becomes the URL: /work/<slug>
//  title             project name
//  category          Business | E-commerce | Healthcare | Corporate | Web Applications
//                    (a new category name also works; filters update automatically)
//  shortDescription  1-2 sentences shown on cards
//  description       longer overview for the project page. Use an array of strings for
//                    several paragraphs, or a single string.
//  features          (optional) array of key features shown as a list on the project page
//  coverImage        main screenshot used on cards (16:10 ratio works best). May be ''.
//  gallery           array of extra screenshots. May be [].
//  technologies      array of strings, e.g. ['React', 'Tailwind CSS']
//  liveUrl           live website URL, or '' to hide the button
//  githubUrl         repository URL, or '' to hide the button
//  featured          true = shown on the home page
//
//  EXAMPLE (copy this, remove the leading // on each line, and edit):
//
//  {
//    id: 1,
//    slug: 'riverside-dental-clinic',
//    title: 'Riverside Dental Clinic',
//    category: 'Healthcare',
//    shortDescription: 'Appointment-focused website for a local dental practice.',
//    description: [
//      'A responsive website that lets patients see treatments, meet the doctors and request an appointment.',
//      'Add a second paragraph here if you want one.',
//    ],
//    features: ['Online appointment request form', 'Treatment pages', 'Mobile-first layout', 'Google Maps location'],
//    coverImage: '/projects/riverside-dental-clinic/cover.jpg',
//    gallery: [
//      '/projects/riverside-dental-clinic/1.jpg',
//      '/projects/riverside-dental-clinic/2.jpg',
//    ],
//    technologies: ['React', 'Tailwind CSS', 'Vite'],
//    liveUrl: 'https://example.com',
//    githubUrl: '',
//    featured: true,
//  },
//
//  Only add real work. The site shows exactly what is in this array.
// =====================================================================

const projects = [
  // Add your projects here.
]

export default projects

// ---------------------------------------------------------------------
//  Helpers used by the site. You normally don't need to edit below.
// ---------------------------------------------------------------------
const CATEGORY_ORDER = ['Business', 'E-commerce', 'Healthcare', 'Corporate', 'Web Applications']

export const allProjects = projects.filter((p) => p && p.slug && p.title)
export const featuredProjects = allProjects.filter((p) => p.featured)
export const getProjectBySlug = (slug) => allProjects.find((p) => p.slug === slug)

// Only categories that actually have projects, in the preferred order.
export const availableCategories = (() => {
  const used = [...new Set(allProjects.map((p) => p.category).filter(Boolean))]
  const known = CATEGORY_ORDER.filter((c) => used.includes(c))
  const extra = used.filter((c) => !CATEGORY_ORDER.includes(c))
  return [...known, ...extra]
})()

export const asParagraphs = (d) => (Array.isArray(d) ? d : d ? [d] : [])
