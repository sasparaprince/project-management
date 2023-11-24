import React from 'react'
const classes = 'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-500'
const Input = ({label, textarea, ...props}) => {
  return (
   <p className='flex flex-col gap-4 my-1'>
   <label className=' text-sm font-bold uppercase text-stone-500' htmlFor="">{label}</label>
   {textarea ? <textarea className={classes} {...props} /> : <input className={classes} {...props}/>}
   </p>
  )
}

export default Input