import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TaskForm from "./TaskForm";
import { updateTaskAsync } from "../Features/TaskSlice";
import api from "../Utils/api";

function EditTask() {
    const navigate = useNavigate();
    const { taskId } = useParams();
    const dispatch = useDispatch();

    const tasks = useSelector((state) => state.tasks.tasks);
    const { user } = useSelector((state) => state.auth);

    const [fetchedTask, setFetchedTask] = useState(null);
    const [loadingTask, setLoadingTask] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");

    const task =
        tasks.find(
            (item) =>
                (String(item.id) === String(taskId) ||
                    String(item._id) === String(taskId)) &&
                (String(item.userId) === String(user?.id) ||
                    String(item.userId) === String(user?._id))
        ) || fetchedTask;

    useEffect(() => {
        let isMounted = true;
        if (!task && taskId) {
            api.get(`/tasks/${taskId}`)
                .then((data) => {
                    if (isMounted && data.task) {
                        setFetchedTask(data.task);
                    }
                })
                .catch(() => {})
                .finally(() => {
                    if (isMounted) setLoadingTask(false);
                });
        }
        return () => {
            isMounted = false;
        };
    }, [task, taskId]);

    const handleUpdateTask = async (formData) => {
        setSubmitting(true);
        setError("");
        const targetId = task.id || task._id || taskId;

        try {
            await dispatch(
                updateTaskAsync({
                    id: targetId,
                    updates: formData,
                })
            ).unwrap();

            navigate(`/tasks/${targetId}`);
        } catch (err) {
            setError(err || "Failed to update task");
            setSubmitting(false);
        }
    };

    if (loadingTask) {
        return (
            <div className="flex min-h-[calc(100vh-5rem)] w-full items-center justify-center">
                <div className="text-slate-500">Loading task details...</div>
            </div>
        );
    }

    if (!task) {
        return (
            <div className="flex min-h-[calc(100vh-5rem)] w-full min-w-0 items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
                <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-8">
                    <h2 className="mb-2 text-xl font-bold text-slate-800 sm:text-2xl">
                        Task Not Found
                    </h2>

                    <p className="mb-6 text-sm leading-6 text-slate-500 sm:text-base">
                        This task doesn't exist or you don't have permission
                        to access it.
                    </p>

                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:w-auto"
                    >
                        Back to Tasks
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-[calc(100vh-5rem)] w-full min-w-0 items-start justify-center px-4 py-8 sm:items-center sm:px-6 sm:py-10 lg:px-8">
            <div className="flex w-full min-w-0 max-w-[440px] flex-col items-center justify-center">
                {error && (
                    <div className="mb-4 w-full rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-600">
                        {error}
                    </div>
                )}
                <TaskForm
                    key={task.id || task._id}
                    initialValues={{
                        title: task.title,
                        description: task.description,
                        priority: task.priority,
                    }}
                    submitLabel={submitting ? "Saving..." : "Save Changes"}
                    onSubmit={handleUpdateTask}
                />
            </div>
        </div>
    );
}

export default EditTask;
