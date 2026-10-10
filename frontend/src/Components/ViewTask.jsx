import React from 'react'

function ViewTask({ task }) {
    return (
        <div className='min-w-[440px] w-[640px] h-fit flex flex-col items-center justify-center gap-2'>
            <div className='flex flex-row items-center justify-between w-full'>
                <div className='flex flex-row text-primary hover:text-primary-hover cursor-pointer items-center justify-center gap-2'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m12 19-7-7 7-7" />
                        <path d="M19 12H5" />
                    </svg>
                    <p className='font-semibold text-md'>Back to home</p>
                </div>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <div className='flex flex-row justify-center items-center gap-2 border-2 px-4 py-2 rounded-lg bg-white border-border '>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L8 18l-4 1 1-4Z" />
                        </svg>
                        <p>Edit</p>
                    </div>
                    <div className='flex flex-row justify-center text-red-500 items-center gap-2 border-2 px-4 py-2 rounded-lg bg-white border-red-400 '>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M3 6h18" />
                            <path d="M8 6V4h8v2" />
                            <path d="m19 6-1 14H6L5 6" />
                            <path d="M10 11v5" />
                            <path d="M14 11v5" />
                        </svg>
                        <p>Delete</p>
                    </div>
                </div>

            </div>
            <div className='w-full flex flex-col bg-white shadow-card border-2 border-border p-4 rounded-lg gap-4'>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <h2 className='text-3xl font-bold'>{task.title}</h2>
                    <p className='text-md text-muted font-semibold'>
                        {task.description}
                    </p>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row justify-center items-center gap-2'>
                        <span className='text-md font-semibold'>Priority:</span>
                        <span className='text-md font-semibold'>{task.priority}</span>
                    </div>
                    <div className='flex flex-row justify-center items-center gap-2'>
                        <span className='text-md font-semibold'>Status:</span>
                        <span className='text-md font-semibold'>{task.status}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTask