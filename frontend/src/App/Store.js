import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../Features/TaskSlice";
import authReducer from "../Features/AuthSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        tasks: taskReducer,
    },
});
