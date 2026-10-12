
import { useNavigate } from "react-router-dom";
import TaskForm from "./TaskForm";

function AddTask() {
    const navigate = useNavigate();

    const addTask = (formData) => {
        const taskObj = {
            id: crypto.randomUUID(),
            ...formData,
            userId: 1,
            status: "pending",
            createdAt: new Date().toISOString(),
        };

        console.log(taskObj);

        // Later, dispatch the Redux action here.
        navigate("/");
    };

    return (
        <div className="flex flex-col justify-center items-center w-full h-screen">
            <div className="flex justify-center w-[440px] px-4 py-8">
                <TaskForm
                    submitLabel="Create Task"
                    onSubmit={addTask}
                />
            </div>
        </div>
    );
}

export default AddTask;
