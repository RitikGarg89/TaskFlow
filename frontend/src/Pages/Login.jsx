import React from 'react'
import LoginForm from '../Components/LoginForm'

function Login() {
    return (
        <div className="flex min-h-screen w-full">
            {/* left Panel */}

            {/* Left Panel */}
            <div className="relative hidden min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 px-10 py-12 text-slate-900 md:flex md:w-1/3 md:flex-col md:justify-between xl:w-1/2 xl:px-16">

                {/* Decorative circles */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-200/40 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-blue-300/30 blur-2xl" />

                {/* Logo */}
                <div className="relative z-10 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-2xl font-bold text-white shadow-lg shadow-blue-600/20">
                        ✓
                    </div>
                    <span className="text-2xl font-bold tracking-tight">
                        TaskFlow
                    </span>
                </div>

                {/* Main content */}
                <div className="relative z-10 my-12 max-w-xl">
                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                        Plan. Track. Achieve.
                    </p>

                    <h1 className="max-w-lg text-4xl font-bold leading-tight tracking-tight xl:text-5xl">
                        Organize Your Work, Achieve More.
                    </h1>

                    <p className="mt-6 max-w-md text-base leading-7 text-slate-600 xl:text-lg">
                        A simple and powerful task management app to help you stay focused
                        and productive every day.
                    </p>

                    {/* Benefits */}
                    <div className="mt-8 space-y-5">
                        <div className="flex items-center gap-4">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-blue-600 shadow-sm">
                                ✓
                            </span>
                            <div>
                                <h3 className="font-semibold">Create and manage tasks</h3>
                                <p className="mt-1 text-sm text-slate-600">
                                    Keep all your work in one place.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-blue-600 shadow-sm">
                                ▣
                            </span>
                            <div>
                                <h3 className="font-semibold">Track your progress</h3>
                                <p className="mt-1 text-sm text-slate-600">
                                    See what's done and what's next.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-blue-600 shadow-sm">
                                ↗
                            </span>
                            <div>
                                <h3 className="font-semibold">Stay organized</h3>
                                <p className="mt-1 text-sm text-slate-600">
                                    Focus on what matters.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-blue-600 shadow-sm">
                                ⚡
                            </span>
                            <div>
                                <h3 className="font-semibold">Boost your productivity</h3>
                                <p className="mt-1 text-sm text-slate-600">
                                    Get more done every day.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer statistics */}
                <div className="relative z-10 grid grid-cols-3 gap-4 border-t border-blue-200/70 pt-6">
                    <div>
                        <p className="text-2xl font-bold">10K+</p>
                        <p className="mt-1 text-sm text-slate-600">Active Users</p>
                    </div>

                    <div>
                        <p className="text-2xl font-bold">4.8★</p>
                        <p className="mt-1 text-sm text-slate-600">User Rating</p>
                    </div>

                    <div>
                        <p className="text-2xl font-bold">100%</p>
                        <p className="mt-1 text-sm text-slate-600">Free to start</p>
                    </div>
                </div>
            </div>

            {/* Right Panel */}
            <div className="w-full md:w-2/3 xl:w-1/2 bg-page flex items-center justify-center">
                <LoginForm />
            </div>
        </div>
    )
}

export default Login