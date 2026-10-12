
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
        <div className="flex flex-col justify-center items-center w-full h-screen">
            <div className="flex justify-center w-[440px] px-4 py-8">
                <TaskForm
                    submitLabel="Create Task"
                    onSubmit={handleAddTask}
                />
            </div>
        </div>
    );
}

export default AddTask;
