
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
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
