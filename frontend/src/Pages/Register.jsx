import React from 'react'
import RegisterForm from '../Components/RegisterForm'

function Register() {
    return (
        <div className='flex w-full h-full'>
            {/* Left Side */}
            <div className="flex flex-col h-full w-full xl:w-1/2 md:w-2/3 items-center justify-center bg-page px-6 md:px-8">
                <RegisterForm />
            </div>

            {/* Right Side */}
            <div className="relative hidden min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100 px-10 py-12 text-slate-900 md:flex md:w-1/3 md:flex-col md:justify-between xl:w-1/2 xl:px-14">

                {/* Decorative circles */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-200/40 blur-2xl" />

                <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-200/40 blur-2xl" />

                {/* Main Content */}
                <div className="relative z-10">

                    <p className="mb-5 text-sm font-bold tracking-[0.2em] text-blue-600">
                        PLAN. TRACK. ACHIEVE.
                    </p>

                    <h2 className="max-w-lg text-4xl font-bold leading-tight tracking-tight xl:text-5xl">
                        Turn Your Goals into{" "}
                        <span className="text-blue-600">Progress.</span>
                    </h2>

                    <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
                        A simple and powerful task management app to help
                        you stay focused and productive every day.
                    </p>

                    {/* Benefits */}
                    <div className="mt-10 space-y-6">

                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl font-bold text-blue-600 shadow-sm">
                                ✓
                            </div>
                            <div>
                                <h3 className="font-semibold">Create and manage tasks</h3>
                                <p className="mt-1 text-sm text-slate-600">
                                    Keep all your work in one place.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl font-bold text-blue-600 shadow-sm">
                                ↗
                            </div>
                            <div>
                                <h3 className="font-semibold">Track your progress</h3>
                                <p className="mt-1 text-sm text-slate-600">
                                    See what's done and what's next.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl font-bold text-blue-600 shadow-sm">
                                ◈
                            </div>
                            <div>
                                <h3 className="font-semibold">Stay organized</h3>
                                <p className="mt-1 text-sm text-slate-600">
                                    Focus on what matters.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl font-bold text-blue-600 shadow-sm">
                                ⚡
                            </div>
                            <div>
                                <h3 className="font-semibold">Boost your productivity</h3>
                                <p className="mt-1 text-sm text-slate-600">
                                    Get more done every day.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Message */}
                <div className="relative z-10 mt-10 border-t border-blue-200 pt-6">
                    <p className="text-lg font-semibold">
                        Small steps. Meaningful progress.
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                        Organize your day, build better habits, and keep moving
                        toward your goals.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Register