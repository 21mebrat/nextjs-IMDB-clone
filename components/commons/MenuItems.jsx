import Link from 'next/link'
import React from 'react'

const MenuItems = (
    {
        Icon,
        title,
        address
    }
) => {
    console.log(title)
    return (
        <Link
            href={address}
            className='flex gap-2 items-center text-xl hover:text-orange-400'
        >
            <Icon />
            <p
                className='hidden sm:inline '
            >{title}</p>
        </Link>
    )
}

export default MenuItems
