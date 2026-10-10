import React from 'react'
import Navbar from '../Components/Navbar'
import TaskCard from '../Components/TaskCard'

function Home() {
    const task = {
        id: "task-001",
        title: "Build Registration Page",
        description:
            "Create a responsive registration form with input validation, password confirmation, and error handling.Create a responsive registration form with input validation, password confirmation, and error handling.Create a responsive registration form with input validation, password confirmation, and error handling.",
        priority: "high",
        status: "in-progress",
        createdAt: "2026-10-10",
        userId: "user-001",
    };
    return (
        <div className='flex flex-col gap-10 h-screen w-screen bg-page'>
            <Navbar />
            <TaskCard task={task} />
        </div>
    )
}

export default Home