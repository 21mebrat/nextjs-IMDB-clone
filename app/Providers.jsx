'use client'
import { ThemeProvider } from 'next-themes';
import React, { useEffect, useState } from 'react';

const Providers = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="bg-black min-h-screen" />; // Placeholder to avoid server-client mismatch
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
