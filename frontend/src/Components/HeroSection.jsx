
import React from 'react';
import heroImage from "../assets/Hero.svg";

function HeroSection() {
    return (
        <div className="flex w-full min-w-0 flex-col items-center justify-between gap-10 md:flex-row md:gap-8 lg:gap-12">

            {/* Left side */}
            <div className="flex w-full min-w-0 flex-col gap-6 md:w-1/2">

                <div className="flex flex-col gap-2">
                    <p className="w-fit rounded-2xl bg-blue-100 px-2 py-1 text-sm font-bold text-blue-500">
                        Get more done
                    </p>

                    <h1 className="break-words text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">
                        Organize your work.
                    </h1>

                    <h2 className="break-words text-4xl font-bold leading-tight text-blue-500 sm:text-5xl lg:text-6xl xl:text-7xl">
                        One task at a time.
                    </h2>

                    <p className="w-full max-w-xl text-base font-semibold leading-relaxed text-slate-800 sm:text-lg">
                        Keep your tasks organized and make every day more productive.
                    </p>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col gap-3 min-[420px]:flex-row">
                    <button
                        type="button"
                        className="w-full rounded-lg bg-blue-500 px-5 py-3 text-base font-semibold text-white shadow-md transition-colors duration-200 hover:bg-blue-600 min-[420px]:w-auto sm:px-6 sm:text-lg"
                    >
                        Get Started
                    </button>

                    <button
                        type="button"
                        className="w-full rounded-lg border-2 border-blue-500 bg-transparent px-5 py-3 text-base font-semibold text-blue-500 shadow-md transition-colors duration-200 hover:bg-blue-50 min-[420px]:w-auto sm:px-6 sm:text-lg"
                    >
                        Learn more
                    </button>
                </div>

                {/* Benefits */}
                <div className="flex flex-col gap-3 min-[520px]:flex-row min-[520px]:flex-wrap min-[520px]:gap-x-4">
                    <p className="flex items-center gap-2 text-sm font-semibold text-gray-600 sm:text-base">
                        ✓ Simple and easy to use
                    </p>

                    <p className="flex items-center gap-2 text-sm font-semibold text-gray-600 sm:text-base">
                        ✓ Track your progress
                    </p>

                    <p className="flex items-center gap-2 text-sm font-semibold text-gray-600 sm:text-base">
                        ✓ Stay focused
                    </p>
                </div>
            </div>

            {/* Right side */}
            <div className="flex w-full min-w-0 items-center justify-center md:w-1/2 md:order-">
                <img
                    src={heroImage}
                    alt="TaskFlow task management dashboard illustration"
                    className="h-auto w-full max-w-lg object-contain lg:max-w-none"
                />
            </div>
        </div>
    );
}

export default HeroSection;
