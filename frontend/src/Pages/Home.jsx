import React from 'react'
import Visitor from './Visitor';
import TaskBoard from './TaskBoard';
import { useSelector } from 'react-redux';

function Home() {
    const { isAuthenticated } = useSelector((state) => state.auth);
    return (
        isAuthenticated ? (
            <TaskBoard />
        ) : (
            <Visitor />
        )
    )
}

export default Home