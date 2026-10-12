import React from 'react'

function TaskBoard() {
    const today = new Date();


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
        <div className='w-[1440px] flex flex-col gap-32 mx-auto my-10'>
            <div className='space-y-2'>
                <p className='font-semibold text-xl text-slate-600 tracking-wide'>{formattedDate}</p>
                <h1 className='font-semibold text-5xl'>{greeting}</h1>
                <p className='font-light text-slate-500 text-2xl'>Ready to make today productive. Here's your task overview.</p>
            </div>

            <div>
                <div>
                    <p>All</p>
                </div>
            </div>
        </div>
    )
}

export default TaskBoard