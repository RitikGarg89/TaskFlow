import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function About() {
    const { isAuthenticated } = useSelector((state) => state.auth);

    const coreFeatures = [
        {
            title: "Priority-Driven Organization",
            description:
                "Assign High, Medium, or Low urgency to any task. Clear color badges and visual markers make your most critical items immediately apparent.",
            icon: (
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
                    <path d="M12 22c4.4 0 8-3.6 8-8 0-3-1.5-5.2-4-7.5-.2 2-1.2 3.2-2.5 4C13.5 6.5 11 3.5 8 2c.5 4-1 6-3 8.5C3.8 12 4 13.3 4 14c0 4.4 3.6 8 8 8Z" />
                </svg>
            ),
            badgeColor: "bg-red-50 text-red-600",
        },
        {
            title: "Dynamic Status Lifecycle",
            description:
                "Transition work seamlessly between Pending, In Progress, and Completed states with one click, automatically logging completion timestamps.",
            icon: (
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
                    <path d="M12 7v5l3 2" />
                    <circle cx="12" cy="12" r="9" />
                </svg>
            ),
            badgeColor: "bg-blue-50 text-blue-600",
        },
        {
            title: "Live Dashboard Metrics",
            description:
                "Track your current productivity at a glance with real-time counter cards for Total, Pending, In Progress, and Completed tasks.",
            icon: (
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
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
            ),
            badgeColor: "bg-emerald-50 text-emerald-600",
        },
        {
            title: "Smart Search & Multi-Filters",
            description:
                "Find any task immediately with instant keyword search. Combine filters by priority level and execution status to pinpoint specific workflows.",
            icon: (
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
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
            ),
            badgeColor: "bg-indigo-50 text-indigo-600",
        },
        {
            title: "Secure User Data Isolation",
            description:
                "Every task belongs strictly to its owner. Protected API endpoints and JWT tokens keep your data confidential, accessible only by you.",
            icon: (
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
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
            ),
            badgeColor: "bg-amber-50 text-amber-600",
        },
        {
            title: "Account Overview & History",
            description:
                "View personal profile details and lifetime statistics reflecting all tasks created, completed, and in progress directly from the database.",
            icon: (
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
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            ),
            badgeColor: "bg-purple-50 text-purple-600",
        },
    ];

    const workflowSteps = [
        {
            step: "01",
            title: "Capture Tasks Quickly",
            description:
                "Add tasks with a descriptive title, full notes, and assign an urgency level (Low, Medium, or High) so nothing slips your mind.",
        },
        {
            step: "02",
            title: "Organize and Prioritize",
            description:
                "Review your dashboard overview. Filter by urgency or status to determine what needs immediate focus for the day.",
        },
        {
            step: "03",
            title: "Track to Completion",
            description:
                "Move items from Pending to In Progress and Completed. Enjoy clean visual confirmation and watch your completed count grow.",
        },
    ];

    return (
        <div className="mx-auto my-6 flex w-full min-w-0 max-w-[1440px] flex-col gap-14 px-4 sm:my-8 sm:gap-20 sm:px-6 lg:my-10 lg:gap-24 lg:px-8">
            {/* Hero Section */}
            <section className="flex flex-col items-center gap-5 py-8 text-center sm:py-12 lg:py-16">
                <span className="rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 sm:text-sm">
                    About TaskFlow
                </span>

                <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-6xl">
                    Bringing clarity, focus, and momentum to your{" "}
                    <span className="text-blue-600">everyday work.</span>
                </h1>

                <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                    TaskFlow is a focused task management system built to help you track priorities,
                    organize your daily goals, and move work from idea to completion without unnecessary clutter.
                </p>

                {/* Authentication-Based Call to Action */}
                <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                    {isAuthenticated ? (
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                            <span>Go to Dashboard</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </Link>
                    ) : (
                        <>
                            <Link
                                to="/register"
                                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            >
                                Get Started
                            </Link>

                            <Link
                                to="/login"
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            >
                                Sign In
                            </Link>
                        </>
                    )}
                </div>
            </section>

            {/* Purpose Section */}
            <section className="grid min-w-0 grid-cols-1 gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-12">
                <div className="min-w-0">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-600 sm:text-sm">
                        Our Purpose
                    </p>

                    <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
                        Productivity should feel simple, not complicated.
                    </h2>

                    <p className="mt-4 text-base leading-7 text-slate-600">
                        Managing multiple tasks can quickly become overwhelming when everything feels equally urgent.
                        TaskFlow is designed to bring order to your daily workload by providing a dedicated, distraction-free
                        space to capture tasks, assign clear priorities, and track progress step by step.
                    </p>

                    <p className="mt-3 text-base leading-7 text-slate-600">
                        Instead of bloated feature sets, TaskFlow emphasizes high visibility: you always know what is pending,
                        what is actively being worked on, and what is accomplished.
                    </p>
                </div>

                <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-5 sm:p-6">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                            ✓
                        </div>
                        <h3 className="font-bold text-slate-900">
                            Clear Prioritization
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            Distinguish critical tasks from regular duties with high, medium, and low urgency tags.
                        </p>
                    </div>

                    <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-5 sm:p-6 sm:mt-6">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-slate-900">
                            Transparent Progress
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            Stay accountable with dynamic live counters and instant status updates.
                        </p>
                    </div>
                </div>
            </section>

            {/* Implemented Features Grid */}
            <section className="flex flex-col gap-8">
                <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-600 sm:text-sm">
                        Built for Everyday Use
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
                        Implemented Features
                    </h2>

                    <p className="text-base leading-7 text-slate-600">
                        Everything you need to organize your daily workload effectively.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {coreFeatures.map((feat) => (
                        <article
                            key={feat.title}
                            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1 sm:p-7"
                        >
                            <div>
                                <div
                                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${feat.badgeColor}`}
                                >
                                    {feat.icon}
                                </div>

                                <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                                    {feat.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-slate-600">
                                    {feat.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* How TaskFlow Helps Users */}
            <section className="flex flex-col gap-8 rounded-2xl bg-slate-900 px-6 py-10 text-white sm:px-10 sm:py-14 lg:p-16">
                <div className="max-w-2xl">
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-400 sm:text-sm">
                        How It Works
                    </p>
                    <h2 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                        A direct path from to-do to done.
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
                        TaskFlow follows an intuitive three-stage cycle designed to keep your mind focused on execution.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {workflowSteps.map((step) => (
                        <div
                            key={step.step}
                            className="rounded-xl border border-slate-800 bg-slate-800/60 p-6"
                        >
                            <span className="font-mono text-2xl font-bold text-blue-400">
                                {step.step}
                            </span>
                            <h3 className="mt-3 text-lg font-bold text-white">
                                {step.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-400">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom Call to Action */}
            <section className="flex flex-col items-center gap-5 rounded-2xl bg-blue-600 px-6 py-12 text-center text-white sm:px-10 sm:py-16">
                <h2 className="max-w-2xl text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                    {isAuthenticated
                        ? "Ready to organize your next task?"
                        : "Ready to bring more clarity to your day?"}
                </h2>

                <p className="max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
                    {isAuthenticated
                        ? "Access your dashboard to add new tasks, update active work, and track completed goals."
                        : "Create your free TaskFlow account and start organizing your tasks, priorities, and workflow today."}
                </p>

                <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                    {isAuthenticated ? (
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 shadow-md transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
                        >
                            <span>Go to Dashboard</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </Link>
                    ) : (
                        <>
                            <Link
                                to="/register"
                                className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 shadow-md transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
                            >
                                Get Started
                            </Link>

                            <Link
                                to="/login"
                                className="rounded-xl border border-white/40 bg-blue-700/60 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                            >
                                Sign In
                            </Link>
                        </>
                    )}
                </div>
            </section>
        </div>
    );
}

export default About;
