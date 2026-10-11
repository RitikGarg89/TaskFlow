import React from 'react'

function ViewTask({ task }) {

    const priority = {
        high: {
            label: "High Priority",
            color: "text-red-600 bg-red-100",
            bg: "bg-red-600",
            icon: (
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
                    aria-hidden="true"
                >
                    <path d="M12 22c4.4 0 8-3.6 8-8 0-3-1.5-5.2-4-7.5-.2 2-1.2 3.2-2.5 4C13.5 6.5 11 3.5 8 2c.5 4-1 6-3 8.5C3.8 12 4 13.3 4 14c0 4.4 3.6 8 8 8Z" />
                    <path d="M12 22c2 0 3.5-1.6 3.5-3.5 0-1.5-.8-2.5-2-3.5-.2 1.2-.8 1.8-1.5 2.2-.3-1.5-1.2-2.5-2.5-3.2.2 2-1 3-1 4.5C8.5 20.4 10 22 12 22Z" />
                </svg>
            ),
        },

        medium: {
            label: "Medium Priority",
            color: "text-amber-700 bg-amber-100",
            bg: "bg-amber-700",
            icon: (
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
                    aria-hidden="true"
                >
                    <path d="M3 21h18" />
                    <rect x="5" y="12" width="3" height="7" rx="0.5" />
                    <rect x="10.5" y="7" width="3" height="12" rx="0.5" />
                    <rect x="16" y="3" width="3" height="16" rx="0.5" />
                </svg>
            ),
        },

        low: {
            label: "Low Priority",
            color: "text-green-700 bg-green-100",
            bg: "bg-green-700",
            icon: (
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
                    aria-hidden="true"
                >
                    <path d="M20 4c-7 0-13 2-15 8-1.2 3.6 1.2 7 4.5 7C16 19 20 12 20 4Z" />
                    <path d="M4 21c3-5 6-8 11-11" />
                </svg>
            ),
        },
    };
    const status = {
        "in-progress": {
            label: "In Progress",
            color: "text-blue-600 bg-blue-100",
            icon: (
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
                    aria-hidden="true"
                >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                </svg>
            ),
        },

        pending: {
            label: "Pending",
            color: "text-slate-700 bg-slate-100",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                >
                    <circle cx="12" cy="12" r="9" />
                </svg>
            ),
        },

        completed: {
            label: "Completed",
            color: "text-green-700 bg-green-100",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                >
                    <circle cx="12" cy="12" r="10" fill="#16A34A" />
                    <path
                        d="m7.5 12.5 3 3 6-6"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
        },
    };

    const date = task.createdAt ? new Date(task.createdAt) : null;

    const formattedDate =
        date && !Number.isNaN(date.getTime())
            ? date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
            })
            : "No date";

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
                <div className='flex flex-row justify-between items-start gap-2'>
                    <div>
                        <p className='text-2xl font-bold text-slate-700'>{task.title}</p>
                        <p className='text-sm font-semibold text-gray-500'>Created on {formattedDate}</p>
                    </div>
                    <div className='flex flex-col justify-center items-end gap-2'>
                        <div className={`px-3 py-1 rounded-xl ${priority[task.priority]?.color} flex justify-center items-center`}>
                            {priority[task.priority]?.icon}
                            <span
                                className={`ml-2 font-medium text-sm ${priority[task.priority]?.color}
                        }`}
                            >
                                {priority[task.priority]?.label}
                            </span>
                        </div>
                        <div className={`px-3 py-1 rounded-xl ${status[task.status]?.color} flex justify-center items-center`}>
                            {status[task.status]?.icon}
                            <span
                                className={`ml-2 font-medium text-sm ${status[task.status]?.color}
                            }`}
                            >
                                {status[task.status]?.label}
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Task Detail</p>
                </div>
            </div>
        </div >
    )
}

export default ViewTask