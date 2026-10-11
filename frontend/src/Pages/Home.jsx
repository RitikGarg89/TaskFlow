import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import TaskCard from '../Components/TaskCard'
import AddTask from '../Components/AddTask';
import ViewTask from '../Components/ViewTask';
import EditTask from '../Components/EditTask';

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
            <div className='w-[1440px] mx-auto'>
                {/* <TaskCard task={task} /> */}
                {/* <AddTask />
                <EditTask task={task} /> */}
                {/* <ViewTask task={task} /> */}
                <HeroSection />
            </div>
        </div>
    )
}

export default Home