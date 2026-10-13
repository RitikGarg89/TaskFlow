
import React from "react";
import Illustration from "../assets/WCS.svg";

function WhyChooseSection() {
    return (
        <div className="flex w-full min-w-0 flex-col items-center gap-8 md:flex-row md:gap-8 lg:gap-12">

            {/* Illustration */}
            <div className="flex w-full min-w-0 items-center justify-center md:w-1/2">
                <img
                    src={Illustration}
                    alt="Why choose TaskFlow"
                    className="h-auto w-full max-w-lg object-contain md:max-w-none"
                />
            </div>

            {/* Content */}
            <div className="flex w-full min-w-0 flex-col md:w-1/2">

                <div className="mt-3 flex w-fit max-w-full items-center gap-2 rounded-full bg-blue-100 px-2 py-1">
                    <div className="h-3 w-3 shrink-0 rounded-full bg-blue-500" />

                    <h2 className="text-sm font-bold tracking-wide text-blue-500">
                        Why Choose TaskFlow?
                    </h2>
                </div>

                <h2 className="my-4 break-words text-3xl font-extrabold leading-tight text-slate-800 sm:text-4xl lg:text-5xl xl:text-6xl">
                    A better way to manage your day
                </h2>

                <p className="text-base font-bold leading-relaxed text-slate-500 sm:text-lg lg:text-xl">
                    TaskFlow helps you stay organized, reduce stress, and get more done. Whether it's work, study, or personal goals, TaskFlow keeps everything in one place.
                </p>

                {/* Benefits */}
                <div className="mt-6 flex flex-col justify-center gap-4">

                    <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500 font-bold text-white">
                            ✓
                        </div>

                        <p className="break-words text-base font-bold text-slate-600 sm:text-lg lg:text-xl">
                            Clean and Simple Interface
                        </p>
                    </div>

                    <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500 font-bold text-white">
                            ✓
                        </div>

                        <p className="break-words text-base font-bold text-slate-600 sm:text-lg lg:text-xl">
                            Accessible from anywhere
                        </p>
                    </div>

                    <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500 font-bold text-white">
                            ✓
                        </div>

                        <p className="break-words text-base font-bold text-slate-600 sm:text-lg lg:text-xl">
                            Free to get Started
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default WhyChooseSection;
