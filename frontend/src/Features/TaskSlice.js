import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../Utils/api";

// Async thunk to fetch all tasks from backend
export const fetchTasks = createAsyncThunk(
    "tasks/fetchTasks",
    async (_, { rejectWithValue }) => {
        try {
            const data = await api.get("/tasks");
            return data.tasks || [];
        } catch (error) {
            return rejectWithValue(error.message || "Failed to fetch tasks");
        }
    }
);

// Async thunk to create a task on backend
export const createTaskAsync = createAsyncThunk(
    "tasks/createTaskAsync",
    async (taskData, { rejectWithValue }) => {
        try {
            const data = await api.post("/tasks", taskData);
            return data.task;
        } catch (error) {
            return rejectWithValue(error.message || "Failed to create task");
        }
    }
);

// Async thunk to update a task on backend
export const updateTaskAsync = createAsyncThunk(
    "tasks/updateTaskAsync",
    async ({ id, updates }, { rejectWithValue }) => {
        try {
            const data = await api.patch(`/tasks/${id}`, updates);
            return data.task;
        } catch (error) {
            return rejectWithValue(error.message || "Failed to update task");
        }
    }
);

// Async thunk to delete a task on backend
export const deleteTaskAsync = createAsyncThunk(
    "tasks/deleteTaskAsync",
    async (id, { rejectWithValue }) => {
        try {
            await api.delete(`/tasks/${id}`);
            return id;
        } catch (error) {
            return rejectWithValue(error.message || "Failed to delete task");
        }
    }
);

const initialState = {
    tasks: [],
    loading: false,
    error: null,
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,

    reducers: {
        addTask: (state, action) => {
            state.tasks.unshift(action.payload);
        },

        updateTask: (state, action) => {
            const { id, updates } = action.payload;
            const task = state.tasks.find(
                (task) =>
                    String(task.id) === String(id) ||
                    String(task._id) === String(id)
            );

            if (task) {
                Object.assign(task, updates);
            }
        },

        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(
                (task) =>
                    String(task.id) !== String(action.payload) &&
                    String(task._id) !== String(action.payload)
            );
        },

        setTasks: (state, action) => {
            state.tasks = action.payload;
        },

        clearTasks: (state) => {
            state.tasks = [];
            state.loading = false;
            state.error = null;
        },
    },

    extraReducers: (builder) => {
        builder
            // fetchTasks
            .addCase(fetchTasks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // createTaskAsync
            .addCase(createTaskAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createTaskAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks.unshift(action.payload);
            })
            .addCase(createTaskAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // updateTaskAsync
            .addCase(updateTaskAsync.fulfilled, (state, action) => {
                const updated = action.payload;
                const index = state.tasks.findIndex(
                    (t) =>
                        String(t.id) === String(updated.id) ||
                        String(t._id) === String(updated.id) ||
                        String(t.id) === String(updated._id) ||
                        String(t._id) === String(updated._id)
                );
                if (index !== -1) {
                    state.tasks[index] = updated;
                }
            })

            // deleteTaskAsync
            .addCase(deleteTaskAsync.fulfilled, (state, action) => {
                const deletedId = action.payload;
                state.tasks = state.tasks.filter(
                    (t) =>
                        String(t.id) !== String(deletedId) &&
                        String(t._id) !== String(deletedId)
                );
            });
    },
});

export const {
    addTask,
    updateTask,
    deleteTask,
    setTasks,
    clearTasks,
} = taskSlice.actions;

export default taskSlice.reducer;
