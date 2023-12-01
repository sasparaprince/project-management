import React from 'react'

const Button = ({children, ...props}) => {
  return (
    <button className='px-4 py-2 text-xs md:text-base rounded-md text-stone-100 bg-stone-600 hover:bg-stone-400 hover:text-stone-900' {...props}>
    {children}
  </button>
  )
}

export default Button