import Image from 'next/image'; // Correct import path for Next.js Image component
import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Image
        src="/loading.svg" // Ensure the path starts with `/` for public assets
        alt="Loading spinner"
        width={80} // Slightly larger for better visibility
        height={80}
        className='text-red-600'
      />
    </div>
  );
};

export default Loading;
