"use client"

import React from 'react'
import Navbar from "@/components/Navbar";

function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className="relative flex h-screen w-full flex-col">
            <Navbar />
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}

export default Layout
