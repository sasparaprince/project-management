import React from 'react'

const ProjectsSidebar = () => {
  return (
    <aside className='w-1/3 py-16 px-8 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>
        Your Projeect
      </h2>
      <div>
        <button className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-400 hover:bg-stone-600 hover:text-sotne-100'>
          + Add Projec
        </button>
      </div>
      <ul></ul>
    </aside>
  )
}

export default ProjectsSidebar