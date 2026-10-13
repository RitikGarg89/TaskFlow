
import { useNavigate } from "react-router-dom";
import TaskForm from "./TaskForm";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../Features/TaskSlice";

function AddTask() {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleAddTask = (formData) => {
        const taskObj = {
            id: crypto.randomUUID(),
            ...formData,
            userId: user.id,
            status: "pending",
            createdAt: new Date().toISOString(),
        };

        dispatch(addTask(taskObj));
        navigate("/");
    };

    return (
        <div className="flex min-h-[calc(100vh-5rem)] w-full min-w-0 items-start justify-center px-4 py-8 sm:items-center sm:px-6 sm:py-10 lg:px-8">
            <div className="flex w-full min-w-0 max-w-[440px] justify-center">
                <TaskForm
                    submitLabel="Create Task"
                    onSubmit={handleAddTask}
                />
            </div>
        </div>
    );
}

export default AddTask;
