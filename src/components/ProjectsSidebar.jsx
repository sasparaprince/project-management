import React from 'react'
import Button from './Button.jsx'

const ProjectsSidebar = ({ onStartAddProject, projects }) => {
  return (
    <aside className='w-1/3 py-16 px-8 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>
        Your Projeect
      </h2>
      <div>
        <Button onClick={onStartAddProject}>
          + Add Project
        </Button>
      </div>
      <ul>
        {projects.map(project => <li key={projects.id} className=''>{project.title}</li>)}
      </ul>
    </aside>
  )
}

export default ProjectsSidebar