import { ThumbsUp } from '@node_modules/react-feather/dist';
import Image from 'next/image';
import React from 'react'

const MoviePage = async ({ params }) => {
    const param = await params
    const id = param.id
    // Fetch data from TMDB API   
    const response = await fetch(
        `${process.env.BASE_URL}/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`,
        { next: { revalidate: 60 } } // Revalidate every 60 seconds
    );

    const data = await response.json();
    console.log(data, 'onnew')
    return (
        <div className='w-full'>
            <div className='p-4 md:p-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-4'>
                <Image
                    src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
                    alt="Movie Poster"
                    width={200}
                    height={300}
                    className='w-full sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 ease-in-out '
                />
                <div className='p-2'>
                    <p className='text-sm'>{data?.overview}</p>
                    <h1 className='text-lg font-bold '>{data?.original_title}</h1>
                    <p className='mt-2'>
                        <span className='font-bold mr-1'>Realsed Data:</span>
                        {data?.release_date}
                    </p>
                    <p className='mt-2'>
                        <span className='font-bold mr-1'>Rating :</span>
                        {data?.vote_count}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MoviePage
