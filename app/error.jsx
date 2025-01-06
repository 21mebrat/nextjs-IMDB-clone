'use client'
import React from 'react'

const error = ({ error, reset }) => {
    return (
        <div className='mt-8 flex flex-col gap-3 justify-center items-center'>
            <h1> Something go wrong </h1>
            <button
                className='hover:text-orange-400'
                onClick={() => reset()}
            >
                Tray Again
            </button>
        </div>
    )
}

export default error
