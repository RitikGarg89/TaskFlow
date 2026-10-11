
import { useEffect, useState } from "react";

// Keep your existing priorities array here.

function TaskForm({
    initialValues = {},
    submitLabel = "Create Task",
    onSubmit,
}) {
    const [title, setTitle] = useState(initialValues.title ?? "");
    const [description, setDescription] = useState(
        initialValues.description ?? ""
    );
    const [priority, setPriority] = useState(
        initialValues.priority ?? "medium"
    );

    const priorities = [
        {
            value: "high",
            label: "High",
            description: "Urgent",
            color: "text-red-600",
            selected: "border-red-500 bg-red-50 ring-2 ring-red-100",
            icon: (
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
                    aria-hidden="true"
                >
                    <path d="M12 22c4.4 0 8-3.6 8-8 0-3-1.5-5.2-4-7.5-.2 2-1.2 3.2-2.5 4C13.5 6.5 11 3.5 8 2c.5 4-1 6-3 8.5C3.8 12 4 13.3 4 14c0 4.4 3.6 8 8 8Z" />
                    <path d="M12 22c2 0 3.5-1.6 3.5-3.5 0-1.5-.8-2.5-2-3.5-.2 1.2-.8 1.8-1.5 2.2-.3-1.5-1.2-2.5-2.5-3.2.2 2-1 3-1 4.5C8.5 20.4 10 22 12 22Z" />
                </svg>
            ),
        },
        {
            value: "medium",
            label: "Medium",
            description: "Normal",
            color: "text-amber-700",
            selected: "border-amber-500 bg-amber-50 ring-2 ring-amber-100",
            icon: (
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
                    aria-hidden="true"
                >
                    <path d="M3 21h18" />
                    <rect x="5" y="12" width="3" height="7" rx="0.5" />
                    <rect x="10.5" y="7" width="3" height="12" rx="0.5" />
                    <rect x="16" y="3" width="3" height="16" rx="0.5" />
                </svg>
            ),
        },
        {
            value: "low",
            label: "Low",
            description: "Can wait",
            color: "text-green-700",
            selected: "border-green-500 bg-green-50 ring-2 ring-green-100",
            icon: (
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
                    aria-hidden="true"
                >
                    <path d="M20 4c-7 0-13 2-15 8-1.2 3.6 1.2 7 4.5 7C16 19 20 12 20 4Z" />
                    <path d="M4 21c3-5 6-8 11-11" />
                </svg>
            ),
        },
    ];

    // Update the form when the initial task data becomes available.
    useEffect(() => {
        setTitle(initialValues.title ?? "");
        setDescription(initialValues.description ?? "");
        setPriority(initialValues.priority ?? "medium");
    }, [
        initialValues.title,
        initialValues.description,
        initialValues.priority,
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmedTitle = title.trim();
        const trimmedDescription = description.trim();

        if (!trimmedTitle || !trimmedDescription) return;

        onSubmit({
            title: trimmedTitle,
            description: trimmedDescription,
            priority,
        });
    };

    return (
        <div className="flex w-full max-w-[440px] flex-col items-center gap-1">
            <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                {submitLabel === 'Create Task'
                    ? <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#2563EB"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6" />
                        <path d="M13 2v6h6" />
                        <path d="m13 2 6 6" />
                        <circle cx="18" cy="18" r="4" />
                        <path d="M18 16v4" />
                        <path d="M16 18h4" />
                    </svg>
                    : <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M12 22c4.4 0 8-3.6 8-8 0-3-1.5-5.2-4-7.5-.2 2-1.2 3.2-2.5 4C13.5 6.5 11 3.5 8 2c.5 4-1 6-3 8.5C3.8 12 4 13.3 4 14c0 4.4 3.6 8 8 8Z" />
                        <path d="M12 22c2 0 3.5-1.6 3.5-3.5 0-1.5-.8-2.5-2-3.5-.2 1.2-.8 1.8-1.5 2.2-.3-1.5-1.2-2.5-2.5-3.2.2 2-1 3-1 4.5C8.5 20.4 10 22 12 22Z" />
                    </svg>
                }
            </div>

            <h3 className="mt-2 text-2xl font-bold text-gray-800">
                {submitLabel === "Create Task"
                    ? "Create New Task"
                    : "Edit Task"}
            </h3>

            <p className="text-center text-sm font-semibold text-gray-500">
                {submitLabel === "Create Task"
                    ? "Add a new task to keep your work organized and stay productive."
                    : "Update your task details and save your changes."}
            </p>

            <form className="mt-2 w-full" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-5">
                    {/* Task title */}
                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="taskTitle"
                                className="mb-2 block text-md font-semibold text-slate-700"
                            >
                                Task Title
                            </label>

                            <p className={`text-sm font-semibold ${title.length >= 90
                                ? "text-red-600"
                                : "text-gray-500"
                                }`}>
                                {title.length}/100
                            </p>
                        </div>

                        <input
                            id="taskTitle"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter your task title"
                            maxLength={100}
                            required
                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        />
                    </div>

                    {/* Task description */}
                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="taskDescription"
                                className="mb-2 block text-md font-semibold text-slate-700"
                            >
                                Task Description
                            </label>

                            <p className={`text-sm font-semibold ${description.length >= 450
                                ? "text-red-600"
                                : "text-gray-500"
                                }`}>
                                {description.length}/500
                            </p>
                        </div>

                        <textarea
                            id="taskDescription"
                            value={description}
                            onChange={(e) =>
                                setDescription(e.target.value)
                            }
                            placeholder="Enter your task description"
                            rows={4}
                            maxLength={500}
                            required
                            className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        />
                    </div>

                    {/* Task priority */}
                    <div className="space-y-2">
                        <label
                            id="priority-label"
                            className="block text-sm font-semibold text-slate-700"
                        >
                            Task Priority
                        </label>

                        <div
                            role="group"
                            aria-labelledby="priority-label"
                            className="grid grid-cols-3 gap-3"
                        >
                            {priorities.map((item) => {
                                const isSelected =
                                    priority === item.value;

                                return (
                                    <button
                                        key={item.value}
                                        type="button"
                                        aria-pressed={isSelected}
                                        onClick={() =>
                                            setPriority(item.value)
                                        }
                                        className={`rounded-xl border p-3 text-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${isSelected
                                            ? item.selected
                                            : "border-slate-200 bg-white hover:border-slate-300"
                                            }`}
                                    >
                                        <div className={`mb-2 flex justify-center ${isSelected
                                            ? item.color
                                            : "text-slate-500"
                                            }`}>
                                            {item.icon}
                                        </div>

                                        <span className={`block font-semibold ${item.color}`}>
                                            {item.label}
                                        </span>

                                        <span className="mt-1 block text-xs text-slate-500">
                                            {item.description}
                                        </span>

                                        {isSelected && (
                                            <span className={`mt-2 block text-xs font-medium ${item.color}`}>
                                                ✓ Selected
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="mt-2 block w-full rounded-xl bg-blue-600 px-4 py-3 text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                        {submitLabel}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TaskForm;
