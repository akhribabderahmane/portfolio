import React from 'react'

const MenuBtn = ({children}) => {
  return (
    <div className=' bg-none hover:bg-background-light-200 transition duration-200 py-2 px-4 rounded-lg group'>
        {children}
    </div>
  )
}

export default MenuBtn