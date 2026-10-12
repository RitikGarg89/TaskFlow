import React from 'react'

function FeatureSection() {
    const features = [
        {
            id: 1,
            title: "Tasks",
            subtitle: "Stay organized",
            color: "text-blue-500 bg-blue-100",
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="3" width="16" height="18" rx="2.5"
                        stroke="#2563EB" strokeWidth="1.7" />

                    <path d="M8 8.5L9.5 10L12 7.5"
                        stroke="#2563EB" strokeWidth="1.7"
                        strokeLinecap="round" strokeLinejoin="round" />

                    <path d="M14 9H17"
                        stroke="#60A5FA" strokeWidth="1.7"
                        strokeLinecap="round" />

                    <path d="M8 14L9.5 15.5L12 13"
                        stroke="#2563EB" strokeWidth="1.7"
                        strokeLinecap="round" strokeLinejoin="round" />

                    <path d="M14 14.5H17"
                        stroke="#60A5FA" strokeWidth="1.7"
                        strokeLinecap="round" />
                </svg>
            ,
            description: "Stay organized and manage your tasks.",
        },
        {
            id: 2,
            title: "Progress",
            subtitle: "Track your work",
            color: "text-green-500 bg-green-100",
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="M3 20H21" stroke="#64748B" strokeWidth="1.7" strokeLinecap="round" />
                    <rect x="5" y="11" width="3.5" height="9" rx="1" fill="#60A5FA" />
                    <rect x="10.25" y="6.5" width="3.5" height="13.5" rx="1" fill="#2563EB" />
                    <rect x="15.5" y="3" width="3.5" height="17" rx="1" fill="#93C5FD" />
                    <path d="M5 8.5L10.5 5L14 7L19 2.5" stroke="#1D4ED8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.5 2.5H19V5" stroke="#1D4ED8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ,
            description: "Track your progress every day.",
        },
        {
            id: 3,
            title: "Focus",
            subtitle: "Focus your goals",
            color: "text-purple-500 bg-purple-100",
            icon:

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="#A78BFA" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="5.8" stroke="#7C3AED" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="2.5" fill="#8B5CF6" />
                    <path d="M12 12L20.5 3.5M16 3.5H20.5V8" stroke="#5B21B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ,
            description: "Focus on what matters and reach your goals.",
        },
    ];

    return (
        <div className="flex flex-row gap-2 w-full my-4 mx-6 justify-center items-center ">
            {features.map((feature) => (
                <div className='border border-border bg-white shadow-xl shadow-card rounded-lg p-4 w-full flex gap-4' key={feature.id}>
                    <div className={`w-12 h-12 ${feature.color} rounded-full p-2 flex items-center justify-center`}>{feature.icon}</div>
                    <div className='flex flex-col w-[80%] gap-2'>
                        <div>
                            <h1 className='text-2xl font-bold text-slate-900'>{feature.title}</h1>
                            <p className='text-xl text-slate-900'>{feature.subtitle}</p>
                        </div>
                        <p className='text-sm text-slate-600'>{feature.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FeatureSection