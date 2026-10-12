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
            <div className="flex flex-col items-center gap-4 p-8">
                <h2 className="text-xl font-semibold">
                    Task not found
                </h2>

                <button
                    onClick={() => navigate("/")}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white"
                >
                    Back to Home
                </button>
            </div>
        );
    }

    // Keep your existing priority and statuses arrays below

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
        <div className='min-w-[440px] w-[640px] h-fit flex flex-col items-center justify-center gap-2'>
            <div className='flex flex-row items-center justify-between w-full'>
                <div onClick={() => navigate("/")} className='flex flex-row text-primary hover:text-primary-hover cursor-pointer items-center justify-center gap-2'>
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
                        <path d="m12 19-7-7 7-7" />
                        <path d="M19 12H5" />
                    </svg>
                    <p className='font-semibold text-md'>Back to home</p>
                </div>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <div className='flex flex-row justify-center items-center gap-2 border-2 px-4 py-2 rounded-lg bg-white border-border '>
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
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L8 18l-4 1 1-4Z" />
                        </svg>
                        <p>Edit</p>
                    </div>
                    <div className='flex flex-row justify-center text-red-500 items-center gap-2 border-2 px-4 py-2 rounded-lg bg-white border-red-400 '>
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
                            <path d="M3 6h18" />
                            <path d="M8 6V4h8v2" />
                            <path d="m19 6-1 14H6L5 6" />
                            <path d="M10 11v5" />
                            <path d="M14 11v5" />
                        </svg>
                        <p>Delete</p>
                    </div>
                </div>

            </div>
            <div className='w-full flex flex-col bg-white shadow-card border-2 border-border p-4 rounded-lg gap-4'>
                <div className='flex flex-row justify-between items-start gap-2'>
                    <div>
                        <p className='text-2xl font-bold text-slate-700'>{task.title}</p>
                        <p className='text-sm font-semibold text-gray-500'>Created on {formattedDate}</p>
                    </div>
                    <div className='flex flex-col justify-center items-end gap-2'>
                        <div className={`px-3 py-1 rounded-xl ${priority[task.priority]?.color} flex justify-center items-center`}>
                            {priority[task.priority]?.icon}
                            <span
                                className={`ml-2 font-medium text-sm ${priority[task.priority]?.color}
                        }`}
                            >
                                {priority[task.priority]?.label}
                            </span>
                        </div>
                        <div className={`px-3 py-1 rounded-xl ${selectedStatus?.color} flex justify-center items-center`}>
                            {selectedStatus?.icon}
                            <span
                                className={`ml-2 font-medium text-sm ${selectedStatus?.color}
                            }`}
                            >
                                {selectedStatus?.label}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold text-lg'>Task Detail</p>
                    <p className='text-sm text-gray-500'>{task.description}</p>
                </div>
                <div className='h-divider border-t-2 border-border'></div>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold text-lg'>Task Status</p>
                    <p className='text-sm text-gray-500'>Update the current status of this task</p>
                    <div
                        role="group"
                        aria-labelledby="priority-label"
                        className="grid grid-cols-3 gap-3"
                    >
                        {statuses.map((status) => {
                            const isSelected = status.value === currentStatus;

                            return (
                                <button
                                    key={status.value}
                                    type="button"
                                    onClick={() => setCurrentStatus(status.value)}
                                    className={`flex items-center gap-3 rounded-xl border p-4 ${isSelected
                                        ? status.selected
                                        : "border-slate-200 bg-white"
                                        }`}
                                >
                                    <span className={`rounded-full p-1 ${status.color}`}>
                                        {status.icon}
                                    </span>

                                    <div className="text-left">
                                        <p className="font-medium">{status.label}</p>
                                        <p className="text-sm text-slate-500">
                                            {status.description}
                                        </p>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className='flex p-2 gap-2 bg-blue-50 border-2 border-blue-300 rounded-xl'>
                    <div className='text-blue-500'>
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
                    </div>
                    <p>Click the 'Edit' Button to modify this task. You can also update the status or delete this task using the button above.  </p>
                </div>
            </div>
        </div >
    )
}

export default ViewTask