import { useState } from 'react'
import TaskCard from '../Components/TaskCard';

function TaskBoard() {
    const today = new Date();

    const [showFilters, setShowFilters] = useState(false);
    const [priority, setPriority] = useState("all");
    const [status, setStatus] = useState("all");

    const dummyTasks = [
        {
            id: "task-001",
            userId: "user-001",
            title: "Complete React Dashboard",
            description: "Finish the dashboard UI and connect Redux state.",
            priority: "high",
            status: "in-progress",
            createdAt: "2026-10-12T09:00:00.000Z",
        },
        {
            id: "task-002",
            userId: "user-001",
            title: "Revise JavaScript Concepts",
            description: "Review array methods, closures, and promises.",
            priority: "high",
            status: "pending",
            createdAt: "2026-10-11T10:30:00.000Z",
        },
        {
            id: "task-003",
            userId: "user-001",
            title: "Set Up React Router",
            description: "Configure application routes and the shared layout.",
            priority: "medium",
            status: "completed",
            createdAt: "2026-10-10T08:15:00.000Z",
        },
        {
            id: "task-004",
            userId: "user-001",
            title: "Build Task Creation Form",
            description: "Add title, description, priority, and status fields.",
            priority: "high",
            status: "pending",
            createdAt: "2026-10-09T12:00:00.000Z",
        },
        {
            id: "task-005",
            userId: "user-001",
            title: "Improve Dashboard Styling",
            description: "Make task cards responsive using Tailwind CSS.",
            priority: "medium",
            status: "in-progress",
            createdAt: "2026-10-08T14:20:00.000Z",
        },
        {
            id: "task-006",
            userId: "user-001",
            title: "Practice Redux Toolkit",
            description: "Review reducers, actions, and useSelector.",
            priority: "medium",
            status: "completed",
            createdAt: "2026-10-07T07:45:00.000Z",
        },
        {
            id: "task-007",
            userId: "user-001",
            title: "Test Search Functionality",
            description: "Verify searching by task title and description.",
            priority: "low",
            status: "pending",
            createdAt: "2026-10-06T11:10:00.000Z",
        },
        {
            id: "task-008",
            userId: "user-001",
            title: "Add Priority Filters",
            description: "Filter tasks by high, medium, and low priority.",
            priority: "high",
            status: "completed",
            createdAt: "2026-10-05T09:30:00.000Z",
        },
        {
            id: "task-009",
            userId: "user-001",
            title: "Implement Status Sorting",
            description: "Organize tasks by pending and completed status.",
            priority: "low",
            status: "in-progress",
            createdAt: "2026-10-04T15:00:00.000Z",
        },
        {
            id: "task-010",
            userId: "user-001",
            title: "Update Project README",
            description: "Document project features and installation steps.",
            priority: "low",
            status: "completed",
            createdAt: "2026-10-03T13:25:00.000Z",
        },
    ];

    const statCards = [
        {
            id: 1,
            title: "Total Task",
            count: 10,
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
            title: "To Do",
            count: 3,
            borderColor: "border-yellow-500",
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
            count: 2,
            borderColor: "border-orange-500",
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
            count: 5,
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
    ]


    const formattedDate = today.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });

    const getGreeting = () => {
        const hour = new Date().getHours()
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
    }

    const greeting = getGreeting()

    return (
        <div className='w-[1440px] px-6 flex flex-col gap-10 mx-auto my-10'>
            <div className='space-y-2'>
                <p className='font-semibold text-xl text-slate-600 tracking-wide'>{formattedDate}</p>
                <h1 className='font-semibold text-5xl'>{greeting}</h1>
                <p className='font-light text-slate-500 text-2xl'>Ready to make today productive. Here's your task overview.</p>
            </div>

            <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3'>
                {
                    statCards.map((card) => (
                        <div key={card.id} className={`flex items-center rounded-2xl bg-blue-50 gap-2 p-2 border-l-8 ${card.borderColor}`}>
                            {card.icon}
                            <div>
                                <p className="">{card.title}</p>
                                <p className="font-bold">{card.count}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='flex flex-col gap-5'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl font-semibold'>All Tasks</h1>
                    <button className='px-3 py-2 bg-blue-600 text-xl text-white rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2'>+ Add Task</button>
                </div>
                <div className='bg-white shadow-card rounded-2xl p-4 space-y-4'>
                    {/* Search bar and Filter */}
                    <div className="relative flex items-center gap-3">
                        {/* Search bar */}
                        <div className="relative flex-1">
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
                                placeholder="Search tasks..."
                                className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        {/* Filter button */}
                        <button
                            type="button"
                            onClick={() => setShowFilters(!showFilters)}
                            className={`flex shrink-0 items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition ${showFilters
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

                        {/* Filter dropdown */}
                        {showFilters && (
                            <div className="absolute right-0 top-full z-50 mt-2 w-80 max-w-[calc(100vw-2rem)] rounded-xl border border-slate-200 bg-white p-5 shadow-xl">

                                {/* Header */}
                                <div className="mb-5 flex items-center justify-between">
                                    <p className="text-lg font-semibold text-slate-800">
                                        Filter Tasks
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() => setShowFilters(false)}
                                        className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
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

                                {/* Priority */}
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

                                {/* Status */}
                                <div className="mb-5">
                                    <p className="mb-3 text-sm font-semibold text-slate-700">
                                        Filter by Status
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            { label: "All", value: "all" },
                                            { label: "To Do", value: "todo" },
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

                                {/* Actions */}
                                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
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
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-5 gap-4'>
                    {
                        dummyTasks.map((task) => (
                            <TaskCard key={task.id} task={task} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TaskBoard