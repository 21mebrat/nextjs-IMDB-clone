'use client'

import { useState } from "react"
import {useRouter} from 'next/navigation'
const SearchBox = () => {
    const router = useRouter()
    const [search, setSearch] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
       router.push(`/search/${search}`)
    }
    return (
        <form onSubmit={handleSubmit} className="flex justify-between items-center max-w-5xl mx-auto" >
            <input
                type="text"
                placeholder='Search Keywords...'
                className='w-full h-14 rounded-md outline-none placeholder-gray-500 bg-transparent flex-1'
                onChange={(e)=>setSearch(e.target.value)}
            />
            <button
                disabled={search === ''}
                className=' disabled:text-gray-500  disabled:cursor-not-allowed'
            >
                Search
            </button>
        </form>
    )
}

export default SearchBox
