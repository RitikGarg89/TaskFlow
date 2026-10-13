
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TaskForm from "./TaskForm";
import { updateTask } from "../Features/TaskSlice";

function EditTask() {
    const navigate = useNavigate();
    const { taskId } = useParams();
    const dispatch = useDispatch();

    const tasks = useSelector((state) => state.tasks.tasks);
    const { user } = useSelector((state) => state.auth);

    const task = tasks.find(
        (item) =>
            String(item.id) === taskId &&
            String(item.userId) === String(user?.id)
    );

    const handleUpdateTask = (formData) => {
        const updates = {
            ...formData,
        };

        dispatch(
            updateTask({
                id: task.id,
                updates,
            })
        );

        navigate(`/tasks/${task.id}`);
    };

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
            <div className="flex w-full min-w-0 max-w-[440px] justify-center">
                <TaskForm
                    key={task.id}
                    initialValues={{
                        title: task.title,
                        description: task.description,
                        priority: task.priority,
                    }}
                    submitLabel="Save Changes"
                    onSubmit={handleUpdateTask}
                />
            </div>
        </div>
    );
}

export default EditTask;
