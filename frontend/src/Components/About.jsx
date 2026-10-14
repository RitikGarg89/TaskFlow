
import React from "react";

const benefits = [
    {
        number: "01",
        title: "Stay Organized",
        description:
            "Keep your tasks in one place, with clear priorities and descriptions that help you know what needs your attention.",
    },
    {
        number: "02",
        title: "Track Your Progress",
        description:
            "Move tasks from pending to in progress and completed so you can see how your work is moving forward.",
    },
    {
        number: "03",
        title: "Focus on What Matters",
        description:
            "Set task priorities and organize your workload to spend more time on the things that matter most.",
    },
];

function About() {
    return (
        <div className="mx-auto my-6 flex w-full min-w-0 max-w-[1440px] flex-col gap-14 px-4 sm:my-8 sm:gap-20 sm:px-6 lg:my-10 lg:gap-24 lg:px-8">
            {/* Hero */}
            <section className="flex flex-col items-center gap-5 py-8 text-center sm:py-12 lg:py-16">
                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                    About TaskFlow
                </span>

                <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-slate-800 sm:text-4xl lg:text-6xl">
                    Make every task a step toward{" "}
                    <span className="text-blue-600">progress.</span>
                </h1>

                <p className="max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
                    TaskFlow is a simple task management application designed
                    to help you organize your work, manage priorities, and
                    keep track of your progress without unnecessary complexity.
                </p>

                <button
                    type="button"
                    onClick={() => (window.location.href = "/register")}
                    className="mt-3 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                    Get Started
                </button>
            </section>

            {/* Mission */}
            <section className="grid min-w-0 grid-cols-1 gap-8 rounded-2xl border border-border bg-white p-5 shadow-card sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-12">
                <div className="min-w-0">
                    <p className="mb-3 text-sm font-bold uppercase tracking-wider text-blue-600">
                        Our Purpose
                    </p>

                    <h2 className="text-2xl font-bold leading-tight text-slate-800 sm:text-3xl lg:text-4xl">
                        Productivity should feel simple.
                    </h2>

                    <p className="mt-5 leading-7 text-slate-500">
                        Managing multiple tasks can become overwhelming when
                        everything feels equally important. TaskFlow brings
                        structure to your daily work by giving you a clear
                        place to record tasks, choose priorities, and update
                        their status.
                    </p>

                    <p className="mt-4 leading-7 text-slate-500">
                        The goal is simple: spend less time figuring out what
                        to do next and more time making meaningful progress.
                    </p>
                </div>

                <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-xl bg-blue-50 p-5 sm:p-6">
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M9 11l3 3L22 4" />
                                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                            </svg>
                        </div>

                        <h3 className="font-bold text-slate-800">
                            Clear Tasks
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                            Know what needs to be done and where each task
                            stands.
                        </p>
                    </div>

                    <div className="rounded-xl bg-indigo-50 p-5 sm:mt-8 sm:p-6">
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M3 3v18h18" />
                                <path d="m19 9-5 5-4-4-4 4" />
                            </svg>
                        </div>

                        <h3 className="font-bold text-slate-800">
                            Visible Progress
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                            Make your progress easier to follow, one task at
                            a time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="flex flex-col gap-8">
                <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
                    <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                        Why TaskFlow?
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl lg:text-4xl">
                        Everything you need to stay on track.
                    </h2>

                    <p className="leading-7 text-slate-500">
                        Simple tools to bring clarity, structure, and focus
                        to your everyday tasks.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((benefit) => (
                        <article
                            key={benefit.number}
                            className="rounded-2xl border border-border bg-white p-6 shadow-card transition-transform duration-200 hover:-translate-y-1 sm:p-8"
                        >
                            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 font-bold text-blue-600">
                                {benefit.number}
                            </span>

                            <h3 className="mt-5 text-xl font-bold text-slate-800">
                                {benefit.title}
                            </h3>

                            <p className="mt-3 leading-7 text-slate-500">
                                {benefit.description}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            {/* Call to action */}
            <section className="flex flex-col items-center gap-5 rounded-2xl bg-blue-600 px-5 py-10 text-center sm:px-10 sm:py-14 lg:py-16">
                <h2 className="max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                    Ready to bring more clarity to your day?
                </h2>

                <p className="max-w-xl leading-7 text-blue-100">
                    Start organizing your tasks, setting priorities, and
                    tracking your progress with TaskFlow.
                </p>

                <button
                    type="button"
                    onClick={() => (window.location.href = "/register")}
                    className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition-colors duration-200 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
                >
                    Create Your Account
                </button>
            </section>
        </div>
    );
}

export default About;
