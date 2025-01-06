import Results from '@components/Results';
import React from 'react'

const page = async({params}) => {
    const param = await params
    const query = param.searchTerms
    const response = await fetch(
        `${process.env.BASE_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${query}&language=en-US&page=1`,
        { next: { revalidate: 60 } } // Optional caching with revalidation
    );
    const data = await response.json()
    console.log(data)
  return (
    <div>
        {
            data && data?.results.length > 0 ? 
            <div>
                 <Results movies={data.results} />
            </div>
            :
            <h1 className='text-center text-xl text-orange-400'>No Result Found!</h1>
        }
    </div>
  )
}

export default page
