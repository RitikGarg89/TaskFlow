import React from 'react'

function TaskCard({ task }) {


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

    const taskPriority = priority[task.priority] ?? priority.medium;
    const taskStatus = status[task.status] ?? status.pending;

    return (
        <div className={`max-w-sm ${taskPriority.bg} rounded-xl h-fit justify-end`}>
            <div className='flex flex-col gap-2 items-center w-[376px] ml-2 shadow-card bg-white p-4 rounded-xl'>
                <div className='w-full flex justify-between'>
                    <div className={`flex gap-2 ${taskPriority.color} rounded-xl px-2 py-1`}>
                        {taskPriority.icon}
                        {taskPriority.label}
                    </div>
                    <div className={`flex gap-2 ${taskStatus.color} rounded-xl px-2 py-1`}>
                        {taskStatus.icon}
                        {taskStatus.label}
                    </div>
                </div>
                <div className='w-full text-xl truncate font-semibold'>
                    {task.title}
                </div>
                <div className='w-full text-muted text-sm line-clamp-3 text-wrap'>
                    {task.description}
                </div>
                <div className='w-full '></div>
                <div className='w-full flex items-center text-left gap-2'>
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
                        <rect x="3" y="5" width="18" height="16" rx="2" />
                        <path d="M16 3v4" />
                        <path d="M8 3v4" />
                        <path d="M3 11h18" />
                    </svg>
                    <p className='text-md font-bold'>{formattedDate}</p>
                </div>
                <button type='button' className='w-full text-lg font-bold gap-1 bg-primary rounded-lg text-white flex justify-center items-center py-2 cursor-pointer hover:bg-primary/80 transition-all duration-200'>
                    View More

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>

                </button>
            </div>
        </div>
    )
}

export default TaskCard