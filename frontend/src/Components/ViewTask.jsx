
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateTask, deleteTask } from "../Features/TaskSlice";

function ViewTask() {
    const { taskId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const tasks = useSelector((state) => state.tasks.tasks);
    const { user } = useSelector((state) => state.auth);

    const task = tasks.find(
        (item) =>
            String(item.id) === taskId &&
            String(item.userId) === String(user?.id)
    );

    // Store the current task status
    const [currentStatus, setCurrentStatus] = useState(
        task?.status ?? "pending"
    );

    // Handle invalid or missing task IDs
    if (!task) {
        return (
            <div className="flex min-h-[calc(100vh-5rem)] w-full min-w-0 items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
                <div className="w-full max-w-md rounded-2xl border border-border bg-white p-5 shadow-card sm:p-8">
                    <h2 className="mb-2 text-xl font-bold text-slate-800 sm:text-2xl">
                        Task not found
                    </h2>

                    <p className="mb-6 text-sm leading-6 text-gray-500">
                        This task doesn't exist or you don't have permission
                        to access it.
                    </p>

                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:w-auto"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    const priority = {
        high: {
            label: "High Priority",
            color: "text-red-600 bg-red-100",
            bg: "bg-red-600",
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

        medium: {
            label: "Medium Priority",
            color: "text-amber-700 bg-amber-100",
            bg: "bg-amber-700",
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

        low: {
            label: "Low Priority",
            color: "text-green-700 bg-green-100",
            bg: "bg-green-700",
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
    };

    const statuses = [
        {
            value: "pending",
            label: "Pending",
            description: "Not started yet",
            color: "text-slate-700 bg-slate-100",
            selected: "border-slate-400 bg-slate-50 ring-2 ring-slate-100",
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
                    <circle cx="12" cy="12" r="9" />
                </svg>
            ),
        },
        {
            value: "in-progress",
            label: "In Progress",
            description: "Currently working",
            color: "text-blue-600 bg-blue-100",
            selected: "border-blue-500 bg-blue-50 ring-2 ring-blue-100",
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
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                </svg>
            ),
        },
        {
            value: "completed",
            label: "Completed",
            description: "Task finished",
            color: "text-green-700 bg-green-100",
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
                    <circle cx="12" cy="12" r="9" />
                    <path d="m7 12 3 3 7-7" />
                </svg>
            ),
        },
    ];

    const date = task.createdAt ? new Date(task.createdAt) : null;

    const formattedDate =
        date && !Number.isNaN(date.getTime())
            ? date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
            })
            : "No date";

    const selectedStatus =
        statuses.find((status) => status.value === currentStatus) ??
        statuses[0];

    return (
        <div className="mx-auto my-6 flex w-full min-w-0 max-w-[1440px] flex-col gap-4 px-4 sm:my-8 sm:gap-6 sm:px-6 lg:my-10 lg:px-8">
            {/* Page actions */}
            <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="flex w-fit min-w-0 items-center gap-2 text-left text-primary transition-colors hover:text-primary-hover"
                >
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
                        <path d="m12 19-7-7 7-7" />
                        <path d="M19 12H5" />
                    </svg>
                    <span className="text-sm font-semibold sm:text-base">
                        Back to home
                    </span>
                </button>

                <div className="grid w-full grid-cols-2 gap-2 sm:w-auto sm:gap-3">
                    <button
                        type="button"
                        onClick={() => navigate(`/task/${task.id}/edit`)}
                        className="flex min-w-0 items-center justify-center gap-2 rounded-lg border-2 border-border bg-white px-3 py-2 text-sm transition-colors hover:bg-slate-50 sm:px-4 sm:text-base"
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
                            aria-hidden="true"
                        >
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L8 18l-4 1 1-4Z" />
                        </svg>
                        <span>Edit</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            dispatch(deleteTask(task.id));
                            navigate("/");
                        }}
                        className="flex min-w-0 items-center justify-center gap-2 rounded-lg border-2 border-red-400 bg-white px-3 py-2 text-sm text-red-500 transition-colors hover:bg-red-50 sm:px-4 sm:text-base"
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
                            aria-hidden="true"
                        >
                            <path d="M3 6h18" />
                            <path d="M8 6V4h8v2" />
                            <path d="m19 6-1 14H6L5 6" />
                            <path d="M10 11v5" />
                            <path d="M14 11v5" />
                        </svg>
                        <span>Delete</span>
                    </button>
                </div>
            </div>

            {/* Task details */}
            <div className="flex w-full min-w-0 flex-col gap-5 rounded-xl border-2 border-border bg-white p-4 shadow-card sm:gap-6 sm:p-6 lg:p-8">
                <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0 flex-1">
                        <h1 className="break-words text-xl font-bold text-slate-700 sm:text-2xl lg:text-3xl">
                            {task.title}
                        </h1>

                        <p className="mt-2 text-sm font-semibold text-gray-500">
                            Created on {formattedDate}
                        </p>
                    </div>

                    <div className="flex min-w-0 flex-wrap items-center gap-2 sm:flex-col sm:items-end">
                        <div
                            className={`flex max-w-full items-center gap-2 rounded-xl px-3 py-1 ${priority[task.priority]?.color ?? priority.medium.color}`}
                        >
                            {priority[task.priority]?.icon ?? priority.medium.icon}
                            <span className="break-words text-sm font-medium">
                                {priority[task.priority]?.label ?? priority.medium.label}
                            </span>
                        </div>

                        <div
                            className={`flex max-w-full items-center gap-2 rounded-xl px-3 py-1 ${selectedStatus.color}`}
                        >
                            {selectedStatus.icon}
                            <span className="text-sm font-medium">
                                {selectedStatus.label}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="border-t-2 border-border" />

                {/* Description */}
                <div className="flex min-w-0 flex-col gap-2">
                    <h2 className="text-lg font-semibold sm:text-xl">
                        Task Detail
                    </h2>

                    <p className="min-w-0 whitespace-pre-wrap break-words text-sm leading-6 text-gray-500 sm:text-base">
                        {task.description}
                    </p>
                </div>

                <div className="border-t-2 border-border" />

                {/* Task status */}
                <div className="flex min-w-0 flex-col gap-2">
                    <h2 className="text-lg font-semibold sm:text-xl">
                        Task Status
                    </h2>

                    <p className="text-sm leading-6 text-gray-500 sm:text-base">
                        Update the current status of this task.
                    </p>

                    <div
                        role="group"
                        aria-label="Task status"
                        className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3"
                    >
                        {statuses.map((status) => {
                            const isSelected =
                                status.value === currentStatus;

                            return (
                                <button
                                    key={status.value}
                                    type="button"
                                    aria-pressed={isSelected}
                                    onClick={() => {
                                        setCurrentStatus(status.value);

                                        dispatch(
                                            updateTask({
                                                id: task.id,
                                                updates: {
                                                    status: status.value,
                                                },
                                            })
                                        );
                                    }}
                                    className={`flex min-w-0 items-center gap-3 rounded-xl border p-3 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:p-4 ${isSelected
                                        ? status.selected
                                        : "border-slate-200 bg-white hover:border-slate-300"
                                        }`}
                                >
                                    <span
                                        className={`flex shrink-0 items-center justify-center rounded-full p-1 ${status.color}`}
                                    >
                                        {status.icon}
                                    </span>

                                    <span className="min-w-0">
                                        <span className="block break-words font-medium">
                                            {status.label}
                                        </span>
                                        <span className="mt-1 block text-sm text-slate-500">
                                            {status.description}
                                        </span>
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Information message */}
                <div className="flex min-w-0 items-start gap-2 rounded-xl border-2 border-blue-300 bg-blue-50 p-3 text-sm leading-6 sm:p-4 sm:text-base">
                    <span className="shrink-0 text-blue-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 16v-4" />
                            <path d="M12 8h.01" />
                        </svg>
                    </span>

                    <p className="min-w-0 break-words">
                        Click the 'Edit' button to modify this task. You can
                        also update the status or delete this task using the
                        buttons above.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ViewTask;
