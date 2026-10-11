
import { useNavigate } from "react-router-dom";
import TaskForm from "./TaskForm";

function EditTask({ task }) {
    const navigate = useNavigate();

    const updateTask = (formData) => {
        const updatedTask = {
            ...task,
            ...formData,
            // Preserve the original ID, status and createdAt.
        };

        console.log(updatedTask);

        // Later, dispatch the Redux update action here.
        navigate(`/tasks/${task.id}`);
    };

    if (!task) {
        return <p className="p-6">Task not found.</p>;
    }

    return (
        <div className="flex justify-center w-[440px] px-4 py-8">
            <TaskForm
                initialValues={{
                    title: task.title,
                    description: task.description,
                    priority: task.priority,
                }}
                submitLabel="Save Changes"
                onSubmit={updateTask}
            />
        </div>
    );
}

export default EditTask;
