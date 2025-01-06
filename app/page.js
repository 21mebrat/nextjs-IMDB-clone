import Results from '@components/Results'
import React from 'react'

const page = async () => {
  await new Promise((resolve)=> setTimeout(resolve,4000))
  let data 
  const fetchResult = async () => {
    try {
      const res = await fetch('url')
       data = await res.json()
    } catch (error) {
      console.log(error)
      throw Error(error.message || 'failed to fetch Results.')
    }
  }
  return (
    <div>
      <Results result={data} />
      home page
    </div>
  )
}

export default page
