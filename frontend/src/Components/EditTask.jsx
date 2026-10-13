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
            <div className="p-6">
                <p className="mb-4">Task not found.</p>

                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white"
                >
                    Back to Tasks
                </button>
            </div>
        );
    }

    return (
        <div className="flex justify-center w-full px-4 py-8">
            <div className="w-full max-w-[440px]">
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