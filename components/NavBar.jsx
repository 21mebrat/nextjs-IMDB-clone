import React from 'react'
import NavBarItems from './NavBarItems'
const NavBar = () => {
  return (
    <div className='bg-gray-600 text-white p-4 flex gap-6 justify-center'>
        <NavBarItems
        title='Tranding'
        param='upcoming'
         />
        <NavBarItems
        title='Top Related'
        param='now-playing'
         />
    </div>
  )
}

export default NavBar
