import { Navigate, useParams } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import ProjectDetail from '../components/ProjectDetail.jsx'
import CTASection from '../components/CTASection.jsx'
import { allProjects, getProjectBySlug, asParagraphs } from '../data/projects.js'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  if (!project) return <Navigate to="/work" replace />
  const idx = allProjects.indexOf(project)
  const next = allProjects.length > 1 ? allProjects[(idx + 1) % allProjects.length] : null
  const desc = project.shortDescription || asParagraphs(project.description)[0] || `${project.title}, a project by NexGen Technology.`
  return (
    <>
      <Seo title={project.title} description={desc} image={project.coverImage} />
      <ProjectDetail project={project} next={next} />
      <div className="mt-24"><CTASection /></div>
    </>
  )
}
