import React from 'react'
import Visitor from './Visitor';
import TaskBoard from './TaskBoard';

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

        // <Visitor />
        <TaskBoard />
    )
}

export default Home