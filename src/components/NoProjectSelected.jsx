import React from 'react'
import NoProjectImage from '../assets/no-projects.png'
import Button from './Button.jsx'

const NoProjectSelected = ({onStartAddProject}) => {
  return (
    <div className='mt-24 text-center w-2/3'>
        <img src={NoProjectImage} alt="" className=' w-16 h-16 object-contain mx-auto' />
        <h2 className='text-xl font-bold text-stone-500 my-4'>No project selected</h2>
        <p className='text-stone-400'>select a project or get started with a new project</p>
        <p className='mt-8'>
            <Button onClick={onStartAddProject}>
                Create New Project
            </Button>
        </p>
    </div>
  )
}

export default NoProjectSelected