
import { useState, useMemo } from 'react';
import TaskCard from '../Components/TaskCard';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

function TaskBoard() {
    const tasks = useSelector((state) => state.tasks.tasks);
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();

    const today = new Date();

    const [showFilters, setShowFilters] = useState(false);
    const [search, setSearch] = useState("");
    const [priority, setPriority] = useState("all");
    const [status, setStatus] = useState("all");

    const userTasks = useMemo(
        () => tasks.filter((task) => task.userId === user?.id),
        [tasks, user?.id]
    );

    const filteredTasks = useMemo(() => {
        return userTasks.filter((task) => {
            const matchesSearch = task.title
                .toLowerCase()
                .includes(search.toLowerCase().trim());

            const matchesPriority =
                priority === "all" || task.priority === priority;

            const matchesStatus =
                status === "all" || task.status === status;

            return matchesSearch && matchesPriority && matchesStatus;
        });
    }, [userTasks, search, priority, status]);

    const statCards = [
        {
            id: 1,
            title: "Total Task",
            count: userTasks.length,
            borderColor: "border-blue-500",
            icon:
                <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <path d="M14 2v6h6" />
                        <path d="M8 13h8" />
                        <path d="M8 17h8" />
                    </svg>
                </div>
        },
        {
            id: 2,
            title: "Pending",
            count: userTasks.filter(
                (task) => task.status === "pending"
            ).length,
            borderColor: "border-amber-500",
            icon:
                <div className="rounded-xl bg-red-100 p-2 text-red-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <circle cx="12" cy="12" r="9" />
                    </svg>
                </div>
        },
        {
            id: 3,
            title: "In Progress",
            count: userTasks.filter(
                (task) => task.status === "in-progress"
            ).length,
            borderColor: "border-yellow-500",
            icon: <div className="rounded-xl bg-amber-100 p-2 text-amber-300">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                </svg>
            </div>
        },
        {
            id: 4,
            title: "Completed",
            count: userTasks.filter(
                (task) => task.status === "completed"
            ).length,
            borderColor: "border-green-500",
            icon:
                <div className="rounded-xl bg-green-300 p-2 text-green-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <circle cx="12" cy="12" r="9" />
                        <path d="m7 12 3 3 7-7" />
                    </svg>
                </div>
        },
    ];

    const formattedDate = today.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });

    const getGreeting = () => {
        const hour = today.getHours();

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
    };

    const greeting = getGreeting();

    const clearFilters = () => {
        setSearch("");
        setPriority("all");
        setStatus("all");
    };

    return (
        <div className="mx-auto my-6 flex w-full min-w-0 max-w-[1440px] flex-col gap-6 px-4 sm:my-8 sm:gap-8 sm:px-6 lg:my-10 lg:gap-10 lg:px-8">

            {/* Greeting section */}
            <section className="min-w-0 space-y-2">
                <p className="break-words text-sm font-semibold tracking-wide text-slate-600 sm:text-base lg:text-xl">
                    {formattedDate}
                </p>

                <h1 className="break-words text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
                    {greeting}
                </h1>

                <p className="max-w-3xl text-base font-light leading-relaxed text-slate-500 sm:text-lg lg:text-2xl">
                    Ready to make today productive. Here's your task overview.
                </p>
            </section>

            {/* Statistics cards */}
            <section
                aria-label="Task statistics"
                className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4"
            >
                {statCards.map((card) => (
                    <div
                        key={card.id}
                        className={`flex min-w-0 items-center gap-3 rounded-2xl border-l-8 bg-blue-50 p-3 sm:p-4 ${card.borderColor}`}
                    >
                        {card.icon}

                        <div className="min-w-0">
                            <p className="break-words text-sm text-slate-600 sm:text-base">
                                {card.title}
                            </p>

                            <p className="text-2xl font-bold text-slate-900">
                                {card.count}
                            </p>
                        </div>
                    </div>
                ))}
            </section>

            {/* Tasks section */}
            <section className="flex min-w-0 flex-col gap-5">

                {/* Section heading and add button */}
                <div className="flex min-w-0 flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                    <h2 className="text-2xl font-semibold text-slate-900">
                        All Tasks
                    </h2>

                    <button
                        type="button"
                        onClick={() => navigate('/task/add')}
                        className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-base font-medium text-white transition-all hover:bg-blue-700 sm:w-auto sm:px-3 sm:py-2 sm:text-lg"
                    >
                        + Add Task
                    </button>
                </div>

                {/* Search and filter container */}
                <div className="relative min-w-0 rounded-2xl bg-white p-3 shadow-card sm:p-4">
                    <div className="flex min-w-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center">

                        {/* Search bar */}
                        <div className="relative min-w-0 flex-1">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="10.8" cy="10.8" r="6.8" />
                                    <path d="m16 16 4.2 4.2" />
                                </svg>
                            </div>

                            <input
                                type="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search tasks..."
                                aria-label="Search tasks"
                                className="w-full min-w-0 rounded-xl border border-slate-200 py-3 pl-10 pr-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        {/* Filter button */}
                        <button
                            type="button"
                            onClick={() => setShowFilters((prev) => !prev)}
                            aria-expanded={showFilters}
                            className={`flex shrink-0 items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition ${showFilters
                                ? "border-blue-300 bg-blue-50 text-blue-600"
                                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                                }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M4 7h9" />
                                <path d="M17 7h3" />
                                <path d="M4 17h3" />
                                <path d="M11 17h9" />
                                <circle cx="15" cy="7" r="2" />
                                <circle cx="9" cy="17" r="2" />
                            </svg>

                            Filter
                        </button>
                    </div>

                    {/* Filter panel */}
                    {showFilters && (
                        <div className="absolute right-0 top-full z-50 mt-2 w-80 max-w-[calc(100vw-2rem)] rounded-xl border border-slate-200 bg-white p-4 shadow-xl sm:p-5">

                            {/* Filter header */}
                            <div className="mb-5 flex items-center justify-between gap-3">
                                <p className="text-lg font-semibold text-slate-800">
                                    Filter Tasks
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setShowFilters(false)}
                                    className="shrink-0 rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                                    aria-label="Close filters"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    >
                                        <path d="m18 6-12 12M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Priority filters */}
                            <div className="mb-5">
                                <p className="mb-3 text-sm font-semibold text-slate-700">
                                    Filter by Priority
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {[
                                        { label: "All", value: "all", color: "blue" },
                                        { label: "High", value: "high", color: "red" },
                                        { label: "Medium", value: "medium", color: "amber" },
                                        { label: "Low", value: "low", color: "green" },
                                    ].map((item) => (
                                        <button
                                            key={item.value}
                                            type="button"
                                            onClick={() => setPriority(item.value)}
                                            className={`rounded-lg border px-3 py-2 text-sm transition ${priority === item.value
                                                ? "border-slate-800 bg-slate-800 text-white"
                                                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                                                }`}
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Status filters */}
                            <div className="mb-5">
                                <p className="mb-3 text-sm font-semibold text-slate-700">
                                    Filter by Status
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {[
                                        { label: "All", value: "all" },
                                        { label: "Pending", value: "pending" },
                                        { label: "In Progress", value: "in-progress" },
                                        { label: "Completed", value: "completed" },
                                    ].map((item) => (
                                        <button
                                            key={item.value}
                                            type="button"
                                            onClick={() => setStatus(item.value)}
                                            className={`rounded-lg border px-3 py-2 text-sm transition ${status === item.value
                                                ? "border-blue-600 bg-blue-600 text-white"
                                                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                                                }`}
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Filter actions */}
                            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setPriority("all");
                                        setStatus("all");
                                    }}
                                    className="text-sm font-medium text-slate-500 hover:text-slate-800"
                                >
                                    Clear filters
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setShowFilters(false)}
                                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                                >
                                    Done
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Results count */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-slate-800">
                        Your tasks
                    </h3>

                    <p className="text-sm text-slate-500">
                        {filteredTasks.length}{" "}
                        {filteredTasks.length === 1 ? "task" : "tasks"} found
                    </p>
                </div>

                {/* Task cards */}
                {filteredTasks.length > 0 ? (
                    <div className="grid min-w-0 grid-cols-1 justify-items-stretch gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
                        {filteredTasks.map((task) => (
                            <div key={task.id} className="min-w-0 w-full">
                                <TaskCard task={task} />
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Empty state */
                    <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-10 text-center sm:py-14">
                        <h3 className="text-lg font-semibold text-slate-800">
                            No tasks found
                        </h3>

                        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                            Try another search or clear your filters to see your tasks.
                        </p>

                        <button
                            type="button"
                            onClick={clearFilters}
                            className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                        >
                            Clear search and filters
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
}

export default TaskBoard;
