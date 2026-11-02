import { useEffect } from "react";
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
        <div className="shadow-card flex w-full max-w-[640px] min-w-0 flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-100 p-2.5 text-blue-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
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
                    <p className="text-lg font-bold text-slate-900">Task Overview</p>
                    <p className="text-sm text-slate-500">
                        Summary of your personal tasks
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-2xl bg-blue-50 p-3 sm:p-4">
                    <div className="rounded-xl bg-blue-100 p-2.5 text-blue-600">
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
                        >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <path d="M14 2v6h6" />
                            <path d="M8 13h8" />
                            <path d="M8 17h8" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-600 sm:text-sm">Total Tasks</p>
                        <p className="text-xl font-bold text-slate-900 sm:text-2xl">
                            {totalTasks}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-emerald-50 p-3 sm:p-4">
                    <div className="rounded-xl bg-emerald-100 p-2.5 text-emerald-600">
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
                            <circle cx="12" cy="12" r="9" />
                            <path d="m7 12 3 3 7-7" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-600 sm:text-sm">Completed Tasks</p>
                        <p className="text-xl font-bold text-slate-900 sm:text-2xl">
                            {completedTasks}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-amber-50 p-3 sm:p-4">
                    <div className="rounded-xl bg-amber-100 p-2.5 text-amber-600">
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
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 7v5l3 2" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-600 sm:text-sm">
                            In Progress Tasks
                        </p>
                        <p className="text-xl font-bold text-slate-900 sm:text-2xl">
                            {inProgressTasks}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-red-50 p-3 sm:p-4">
                    <div className="rounded-xl bg-red-100 p-2.5 text-red-500">
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
                            <circle cx="12" cy="12" r="9" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-600 sm:text-sm">Pending Tasks</p>
                        <p className="text-xl font-bold text-slate-900 sm:text-2xl">
                            {pendingTasks}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileDashBoard;
