import { useState } from 'react'
import type { ProjectData } from '../data'
import { useFinePointer } from '../hooks/useFinePointer'
import { Project } from './Project'
import { WorkPreview } from './WorkPreview'

export function WorkList({ projects }: { projects: ProjectData[] }) {
  const canPreview = useFinePointer()
  const [active, setActive] = useState<number | null>(null)

  return (
    <div
      className="project-list"
      onMouseLeave={canPreview ? () => setActive(null) : undefined}
    >
      {projects.map((project, index) => (
        <Project
          key={project.title}
          project={project}
          index={index}
          dimmed={canPreview && active !== null && active !== index}
          inlineShot={!canPreview}
          onActivate={canPreview ? () => setActive(index) : undefined}
        />
      ))}
      {canPreview && <WorkPreview project={active === null ? null : projects[active]} />}
    </div>
  )
}
