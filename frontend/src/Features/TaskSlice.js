
import { createSlice } from "@reduxjs/toolkit";
import { getTasks } from "../Utils/TaskStorage";

const initialState = {
    tasks: getTasks() ?? [
        {
            id: "task-001",
            userId: "user-001",
            title: "Complete React Dashboard",
            description: "Finish the dashboard UI and connect Redux state.",
            priority: "high",
            status: "in-progress",
            createdAt: "2026-10-12T09:00:00.000Z",
        },
        {
            id: "task-002",
            userId: "user-001",
            title: "Revise JavaScript Concepts",
            description: "Review array methods, closures, and promises.",
            priority: "high",
            status: "pending",
            createdAt: "2026-10-11T10:30:00.000Z",
        },
        {
            id: "task-003",
            userId: "user-001",
            title: "Set Up React Router",
            description: "Configure application routes and the shared layout.",
            priority: "medium",
            status: "completed",
            createdAt: "2026-10-10T08:15:00.000Z",
        },
        {
            id: "task-004",
            userId: "user-001",
            title: "Build Task Creation Form",
            description: "Add title, description, priority, and status fields.",
            priority: "high",
            status: "pending",
            createdAt: "2026-10-09T12:00:00.000Z",
        },
        {
            id: "task-005",
            userId: "user-001",
            title: "Improve Dashboard Styling",
            description: "Make task cards responsive using Tailwind CSS.",
            priority: "medium",
            status: "in-progress",
            createdAt: "2026-10-08T14:20:00.000Z",
        },
        {
            id: "task-006",
            userId: "user-001",
            title: "Practice Redux Toolkit",
            description: "Review reducers, actions, and useSelector.",
            priority: "medium",
            status: "completed",
            createdAt: "2026-10-07T07:45:00.000Z",
        },
        {
            id: "task-007",
            userId: "user-001",
            title: "Test Search Functionality",
            description: "Verify searching by task title and description.",
            priority: "low",
            status: "pending",
            createdAt: "2026-10-06T11:10:00.000Z",
        },
        {
            id: "task-008",
            userId: "user-001",
            title: "Add Priority Filters",
            description: "Filter tasks by high, medium, and low priority.",
            priority: "high",
            status: "completed",
            createdAt: "2026-10-05T09:30:00.000Z",
        },
        {
            id: "task-009",
            userId: "user-001",
            title: "Implement Status Sorting",
            description: "Organize tasks by pending and completed status.",
            priority: "low",
            status: "in-progress",
            createdAt: "2026-10-04T15:00:00.000Z",
        },
        {
            id: "task-010",
            userId: "user-001",
            title: "Update Project README",
            description: "Document project features and installation steps.",
            priority: "low",
            status: "completed",
            createdAt: "2026-10-03T13:25:00.000Z",
        },
    ]
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,

    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },

        updateTask: (state, action) => {
            const { id, updates } = action.payload;

            const task = state.tasks.find(
                (task) => String(task.id) === String(id)
            );

            if (task) {
                Object.assign(task, updates);
            }
        },

        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(
                (task) => String(task.id) !== String(action.payload)
            );
        },

        setTasks: (state, action) => {
            state.tasks = action.payload;
        },
    },
});

export const {
    addTask,
    updateTask,
    deleteTask,
    setTasks,
} = taskSlice.actions;

export default taskSlice.reducer;
