'use client'
import { ThemeProvider } from 'next-themes';
import Image from 'next/image'; 
import React, { useEffect, useState } from 'react';

const Providers = ({ children }) => {
    const [mounted, setMounted] = useState(false);

    // Ensure the component is mounted on the client
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
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
        )
    }

    return (
        <ThemeProvider defaultTheme="system" attribute="class">
            <div className="text-gray-700 dark:text-white transition-colors duration-300 min-h-screen select-none">
                {children}
            </div>
        </ThemeProvider>
    );
};

export default Providers;
