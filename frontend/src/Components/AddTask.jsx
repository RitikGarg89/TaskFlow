import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskForm from "./TaskForm";
import { useDispatch } from "react-redux";
import { createTaskAsync } from "../Features/TaskSlice";

function AddTask() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleAddTask = async (formData) => {
        setSubmitting(true);
        setError("");
        try {
            await dispatch(createTaskAsync(formData)).unwrap();
            navigate("/");
        } catch (err) {
            setError(err || "Failed to create task");
            setSubmitting(false);
        }
    };

    return (
        <div className="flex min-h-[calc(100vh-5rem)] w-full min-w-0 items-start justify-center px-4 py-8 sm:items-center sm:px-6 sm:py-10 lg:px-8">
            <div className="flex w-full min-w-0 max-w-[440px] flex-col items-center justify-center">
                {error && (
                    <div className="mb-4 w-full rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-600">
                        {error}
                    </div>
                )}
                <TaskForm
                    submitLabel={submitting ? "Creating..." : "Create Task"}
                    onSubmit={handleAddTask}
                />
            </div>
        </div>
    );
}

export default AddTask;
