import React from 'react'

function Login() {
    return (
        <div className="flex min-h-screen w-full">
            {/* left Panel */}
            <div className="hidden md:w-1/3 xl:w-1/2 md:flex md:flex-col md:justify-center md:items-center bg-primary">
                <h2>TaskFlow</h2>
                <p>Manage your tasks and projects with ease.</p>
            </div>
            {/* Right Panel */}
            <div className="w-full md:w-2/3 xl:w-1/2 bg-page">
            </div>
        </div>
    )
}

export default Login