
import React from "react";
import Illustration from "../assets/WCS.svg";

function WhyChooseSection() {
    return (
        <div className="flex w-full gap-4 mx-6">
            {/* Illustration */}
            <div className="w-1/2">
                <img src={Illustration} alt="Why choose TaskFlow" />
            </div>

            {/* Content */}
            <div className="w-1/2">
                <div className="mt-3 flex w-fit items-center gap-2 bg-blue-100 rounded-full px-2 py-1">
                    <div className="h-3 w-3 rounded-full bg-blue-500" />
                    <h2 className="text-sm font-bold tracking-wide text-blue-500">
                        Why Choose TaskFlow?
                    </h2>
                </div>
                <p className="text-6xl text-slate-800 font-extrabold my-4">A better way to manage your day</p>
                <p className="text-xl font-bold text-slate-500">TaskFlow helps you stay organized, reduce stress, and get more done. wheather its work, study, or personal goals, TaskFlow keeps everything in one place</p>
                <div className=" flex-col flex gap-4 justify-center mt-4">
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center justify-center rounded-full text-white font-bold bg-blue-500 h-8 w-8'>
                            ✓
                        </div>
                        <p className='text-xl font-bold text-slate-600'>Clean and Simple Interface</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center justify-center rounded-full text-white font-bold bg-blue-500 h-8 w-8'>
                            ✓
                        </div>
                        <p className='text-xl font-bold text-slate-600'>Accessible from anywhere</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center justify-center rounded-full text-white font-bold bg-blue-500 h-8 w-8'>
                            ✓
                        </div>
                        <p className='text-xl font-bold text-slate-600'>Free to get Started</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseSection;
