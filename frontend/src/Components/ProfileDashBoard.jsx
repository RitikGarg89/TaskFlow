import React from 'react'

function ProfileDashBoard() {

    return (
        <div className='shadow-card flex flex-col gap-3 rounded-2xl bg-white p-5 w-[640px] min-w-[440px]'>
            <div className='flex items-center gap-4'>
                <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect x="7" y="12" width="3" height="6" rx="1" />
                        <rect x="12" y="8" width="3" height="10" rx="1" />
                        <rect x="17" y="4" width="3" height="14" rx="1" />
                    </svg>
                </div>
                <div>
                    <p className='font-bold'>Task Overview</p>
                    <p className='text-sm text-muted'>Here's a summary of your tasks</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-3'>
                <div className='flex items-center rounded-2xl bg-blue-50 gap-2'>
                    <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <path d="M14 2v6h6" />
                            <path d="M8 13h8" />
                            <path d="M8 17h8" />
                        </svg>
                    </div>
                    <div>
                        <p className="">Total Tasks</p>
                        <p className="font-bold">12</p>
                    </div>
                </div>
                <div className='flex items-center rounded-2xl bg-green-100 gap-2 p-2'>
                    <div className="rounded-xl bg-green-300 p-2 text-green-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <circle cx="12" cy="12" r="9" />
                            <path d="m7 12 3 3 7-7" />
                        </svg>
                    </div>
                    <div>
                        <p className="">Completed Tasks</p>
                        <p className="font-bold">12</p>
                    </div>
                </div>
                <div className='flex items-center rounded-2xl bg-amber-50 gap-2 p-2'>
                    <div className="rounded-xl bg-amber-100 p-2 text-amber-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 7v5l3 2" />
                        </svg>
                    </div>
                    <div>
                        <p className="">In Progress Tasks</p>
                        <p className="font-bold">12</p>
                    </div>
                </div>
                <div className='flex items-center rounded-2xl bg-red-50 gap-2 p-2'>
                    <div className="rounded-xl bg-red-100 p-2 text-red-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <circle cx="12" cy="12" r="9" />
                        </svg>
                    </div>
                    <div>
                        <p className="">Pending Tasks</p>
                        <p className="font-bold">12</p>
                    </div>
                </div>
                <div></div>
            </div>
        </div >
    )
}

export default ProfileDashBoard
