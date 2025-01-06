import React from 'react'
import Card from './Card'

const Results = ({ data }) => {
    const sampleData = [
        {
            id: 1,
            title: 'firest',
            overView: 'manner of matter'
        },
        {
            id: 2,
            title: 'second',
            overView: 'manner of matter'
        },
        {
            id: 3,
            title: 'third',
            overView: 'manner of matter'
        },
    ]
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl mx-auto'>
            {
                sampleData.map(data => (
                    <Card
                        key={data.id}
                        result={data}
                    />
                ))
            }
        </div>
    )
}

export default Results
