"use client"
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Database, Eye, EyeOff, Home, Moon, Sun } from '@node_modules/react-feather/dist'
const DarkModeSwitch = () => {
    const { theme, setTheme, systemTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const currentTheme = theme === 'system' ? systemTheme : theme
    useEffect(() => {
        setMounted(true)
        console.log(currentTheme, 'themes')
    }, [theme])
    return (
        <div>
            {
                mounted && (currentTheme === 'dark' ?
                    <Sun
                        className="cursor-pointer hover:text-orange-400"
                        onClick={() => setTheme('light')} // Switch to light mode
                    />
                    :
                    <Moon
                        className="cursor-pointer hover:text-orange-400"
                        onClick={() => setTheme('dark')} // Switch to dark mode
                    />

                )
            }
        </div>
    )
}

export default DarkModeSwitch
