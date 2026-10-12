import React from 'react'

function TaskBoard() {
    const today = new Date();

    const statCards = [
        {
            id: 1,
            title: "Total Task",
            count: 10,
            borderColor: "border-blue-500",
            icon:
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
        },
        {
            id: 2,
            title: "To Do",
            count: 3,
            borderColor: "border-yellow-500",
            icon:
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
        },
        {
            id: 3,
            title: "In Progress",
            count: 2,
            borderColor: "border-orange-500",
            icon: <div className="rounded-xl bg-amber-100 p-2 text-amber-300">
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
        },
        {
            id: 4,
            title: "Completed",
            count: 5,
            borderColor: "border-green-500",
            icon:
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
        },
    ]


    const formattedDate = today.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });

    const getGreeting = () => {
        const hour = new Date().getHours()
        if (hour >= 5 && hour < 12) {
            return "Good morning! 🌅";
        }
        if (hour >= 12 && hour < 17) {
            return "Good afternoon! ☀️";
        }
        if (hour >= 17 && hour < 21) {
            return "Good evening! 🌇";
        }
        return "Good night! 🌙";
    }

    const greeting = getGreeting()

    return (
        <div className='w-[1440px] px-6 flex flex-col gap-10 mx-auto my-10'>
            <div className='space-y-2'>
                <p className='font-semibold text-xl text-slate-600 tracking-wide'>{formattedDate}</p>
                <h1 className='font-semibold text-5xl'>{greeting}</h1>
                <p className='font-light text-slate-500 text-2xl'>Ready to make today productive. Here's your task overview.</p>
            </div>

            <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3'>
                {
                    statCards.map((card) => (
                        <div key={card.id} className={`flex items-center rounded-2xl bg-blue-50 gap-2 p-2 border-l-8 ${card.borderColor}`}>
                            {card.icon}
                            <div>
                                <p className="">{card.title}</p>
                                <p className="font-bold">{card.count}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TaskBoard