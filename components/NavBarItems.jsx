'use client'
import { useSearchParams } from '@node_modules/next/navigation'
import Link from 'next/link'
import React from 'react'

const NavBarItems = ({ title, param }) => {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')
    return (
        <Link
            href={`/?genre=${param}`}
            className={`hover:text-orange-400 font-bold ${genre === param ? 'text-orange-400 underline underline-offset-8 decoration-4 decoration-orange-400 rounded-full':''}`}
        >
            {title}
        </Link>
    )
}

export default NavBarItems
