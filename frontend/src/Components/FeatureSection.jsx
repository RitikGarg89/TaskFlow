
import React from 'react';

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
        <div className="my-4 grid w-full min-w-0 grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {features.map((feature) => (
                <div
                    className="flex min-w-0 items-start gap-3 rounded-lg border border-border bg-white p-4 shadow-xl shadow-card sm:gap-4 sm:p-5"
                    key={feature.id}
                >
                    <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full p-2 ${feature.color}`}
                    >
                        {feature.icon}
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col gap-2">
                        <div>
                            <h2 className="break-words text-xl font-bold text-slate-900 sm:text-2xl">
                                {feature.title}
                            </h2>

                            <p className="break-words text-base text-slate-900 sm:text-lg">
                                {feature.subtitle}
                            </p>
                        </div>

                        <p className="break-words text-sm leading-relaxed text-slate-600">
                            {feature.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FeatureSection;
