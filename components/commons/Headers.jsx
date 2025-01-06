import { headerData } from '@public/headerData'
import React from 'react'
import MenuItems from './MenuItems'
import { Home, Info } from '@node_modules/react-feather/dist'
import Link from '@node_modules/next/link'
import DarkModeSwitch from './DarkModeSwitch'

const Headers = () => {
    return (
        <header className='max-w-4xl mx-auto flex justify-between items-center p-3' >
            {/* nav div */}
            <div className='flex gap-3'>
                <MenuItems
                    title='Home'
                    address='/'
                    Icon={Home}
                />
                <MenuItems
                    title='About'
                    address='/about'
                    Icon={Info}
                />
            </div>
            {/* log div */}
            <div className='flex items-center gap-2'>
                <DarkModeSwitch />
                <Link href={"/"} className='flex gap-2 mr-2 items-center'>
                    <span className='px-2 py-1 rounded-lg bg-orange-400'>IMDb</span>
                    <span className='text-2xl hidden sm:inline'>Clone</span>
                </Link>
            </div>
        </header>
    )
}

export default Headers
