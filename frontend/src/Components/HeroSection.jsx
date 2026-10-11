import React from 'react'
import heroImage from "../assets/11668613_20945628.svg";

function HeroSection() {
    return (
        <div className='w-full flex items-center justify-between h-full w-[1440px] '>
            {/* left side  */}
            <div className='w-1/2'>
                <div>
                    <div className="flex flex-row items-center  mb-3">
                        <div className="mr-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-3xl font-bold text-white shadow-xl shadow-blue-600/25">
                            ✓
                        </div>
                        <span className="text-2xl font-bold ">TaskFlow</span>
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900">
                        Welcome to TaskFlow
                    </h1>
                    <p className="mt-2 text-slate-600">
                        Manage your tasks and boost your productivity
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