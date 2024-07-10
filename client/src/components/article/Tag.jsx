import React from 'react'

const Tag = ({text}) => {
  return (
    <p className=' w-fit text-sm font-code capitalize font-medium text-neutral-100 bg-background-dark-700 bg-opacity-50 rounded-full py-1 px-2'>
      {"# "+text}
    </p>
  )
}

export default Tag
