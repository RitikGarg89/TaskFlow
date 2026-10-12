import { configureStore } from "@reduxjs/toolkit";
import taskReducer, {
    addTask,
    updateTask,
    deleteTask,
    setTasks,
} from "../Features/TaskSlice";
import { saveTasks } from "../Utils/TaskStorage";

const taskPersistenceMiddleware = (store) => (next) => (action) => {
    const result = next(action);

    if ([
        addTask.type,
        updateTask.type,
        deleteTask.type,
        setTasks.type,
    ].includes(action.type)) {
        saveTasks(store.getState().tasks.tasks);
    }

    return result;
};

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(taskPersistenceMiddleware),
});