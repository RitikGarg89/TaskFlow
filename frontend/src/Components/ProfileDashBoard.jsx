import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../Features/TaskSlice";

function ProfileDashBoard() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.tasks);
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const userTasks = tasks.filter(
        (task) =>
            !user ||
            String(task.userId) === String(user?.id) ||
            String(task.userId) === String(user?._id)
    );

    const totalTasks = userTasks.length;
    const completedTasks = userTasks.filter(
        (task) => task.status === "completed"
    ).length;
    const inProgressTasks = userTasks.filter(
        (task) => task.status === "in-progress"
    ).length;
    const pendingTasks = userTasks.filter(
        (task) => task.status === "pending"
    ).length;

    return (
        <div className="shadow-card flex w-[640px] min-w-[440px] flex-col gap-3 rounded-2xl bg-white p-5">
            <div className="flex items-center gap-4">
                <div className="rounded-full bg-blue-100 p-2 text-blue-600">
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
                        <rect x="7" y="12" width="3" height="6" rx="1" />
                        <rect x="12" y="8" width="3" height="10" rx="1" />
                        <rect x="17" y="4" width="3" height="14" rx="1" />
                    </svg>
                </div>
                <div>
                    <p className="font-bold">Task Overview</p>
                    <p className="text-sm text-muted">
                        Here's a summary of your tasks
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 rounded-2xl bg-blue-50 p-2">
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
                    <div>
                        <p className="text-sm text-slate-600">Total Tasks</p>
                        <p className="text-xl font-bold text-slate-900">
                            {totalTasks}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-green-100 p-2">
                    <div className="rounded-xl bg-green-300 p-2 text-green-700">
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
                    <div>
                        <p className="text-sm text-slate-600">Completed Tasks</p>
                        <p className="text-xl font-bold text-slate-900">
                            {completedTasks}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-amber-50 p-2">
                    <div className="rounded-xl bg-amber-100 p-2 text-amber-600">
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
                    <div>
                        <p className="text-sm text-slate-600">
                            In Progress Tasks
                        </p>
                        <p className="text-xl font-bold text-slate-900">
                            {inProgressTasks}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-red-50 p-2">
                    <div className="rounded-xl bg-red-100 p-2 text-red-500">
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
                    <div>
                        <p className="text-sm text-slate-600">Pending Tasks</p>
                        <p className="text-xl font-bold text-slate-900">
                            {pendingTasks}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileDashBoard;
