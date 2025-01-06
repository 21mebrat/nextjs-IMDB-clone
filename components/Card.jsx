import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { ThumbsUp } from '@node_modules/react-feather/dist'

const Card = ({ result }) => {
  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:m-2 sm:border-slate-400 transition-shadow duration-300'>
      <Link
        href={`/${result.id}`}
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500/${result?.poster_path}`}
          alt="Movie Poster"
          width={700}
          height={500}
          className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 ease-in-out '
        />
        <div className='p-2'>
          <p className='line-clamp-2 text-sm'>{result?.overview}</p>
          <h1 className='text-lg font-bold truncate'>{result?.original_title}</h1>
          <p className='flex gap-2 items-center'>
            {result?.release_date}
            <ThumbsUp className='h-5 ml-1 mr-3' />
            {result?.vote_count}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Card
