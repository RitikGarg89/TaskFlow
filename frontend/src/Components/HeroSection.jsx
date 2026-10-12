import React from 'react'
import heroImage from "../assets/Hero.svg";

function HeroSection() {
    return (
        <div className='w-full flex items-center justify-between h-fit mx-6 w-[1440px] '>
            {/* left side  */}
            <div className='w-1/2 flex-col flex gap-6'>
                <div className="flex flex-col gap-1.5">
                    <p className='text-sm w-fit font-bold bg-blue-100 rounded-2xl px-2 py-1 text-blue-500'>Get more done</p>
                    <p className="text-7xl font-bold text-slate-900">Organize your work.</p>
                    <p className="text-7xl font-bold text-blue-500">One task at a time.</p>
                    <p className='text-lg font-semibold text-slate-800 w-[80%]'>Keep your tasks organized and make every day more productive.</p>
                </div>
                <div className='flex gap-2'>
                    <button className='px-6 py-3 bg-blue-500 text-white text-xl font-semibold rounded-lg shadow-md cursor-pointer hover:bg-blue-600 transition-colors duration-200'>Get Started</button>
                    <button className='px-6 py-3 bg-transparent border-2 border-blue-500 text-blue-500 text-xl font-semibold rounded-lg shadow-md cursor-pointer hover:bg-blue-50 transition-colors duration-200'>Learn more</button>
                </div>
                <div className='flex gap-4'>
                    <p className="flex items-center gap-2 text-md font-semibold text-gray-600">
                        ✓ Simple and easy to use
                    </p>
                    <p className="flex items-center gap-2 text-md font-semibold text-gray-600">
                        ✓ Track your progress
                    </p>
                    <p className="flex items-center gap-2 text-md font-semibold text-gray-600">
                        ✓ Stay focused
                    </p>
                </div>
            </div>
            {/* right side  */}
            <div className='w-1/2'>
                <img src={heroImage} alt="hero" />
            </div>
        </div>
    )
}

export default HeroSection