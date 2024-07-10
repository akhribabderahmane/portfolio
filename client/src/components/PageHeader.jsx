import React from 'react'

const PageHeader = ({title,description}) => {
  return (
    <div className=' space-y-4 border-b-2 border-dotted border-background-light-500 pb-4'>
       <h1 className=' text-4xl font-medium '>{title}</h1>
       <p className='dark:text-background-light-400 text-xl '>{description}</p>
    </div>
  )
}

export default PageHeader
