import React from 'react'

const Tool = ({name,icon}) => {
  return (
    <div className='flex flex-row shadow-md  items-center gap-1 sm:gap-3 w-fit px-6 py-2 rounded-full text-sm sm:text-xl border-[1px]  border-slate-300 dark:bg-background-dark-900 dark:border-gray-600'>
       <div>
        {icon}
       </div>
       <p className='text-nowrap text-text-light dark:text-text-dark font-normal font-sans'>{name}</p>
    </div>
  )
}

export default Tool
