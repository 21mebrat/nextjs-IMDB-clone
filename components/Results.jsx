import React from 'react'
import Card from './Card'

const Results = ({ movies  }) => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {

                movies?.map(movie => (
                    <Card
                        key={movie.id}
                        result={movie}
                    />
                ))
            }
        </div>
    )
}

export default Results
