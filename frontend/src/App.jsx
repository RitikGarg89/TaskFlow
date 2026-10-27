import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import ViewTask from "./Components/ViewTask";
import AddTask from "./Components/AddTask";
import EditTask from "./Components/EditTask";
import About from "./Components/About";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess, logout } from "./Features/AuthSlice";
import { fetchTasks, clearTasks } from "./Features/TaskSlice";
import api, { clearToken } from "./Utils/api";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/task/add",
                element: <AddTask />,
            },
            {
                path: "/tasks/:taskId",
                element: <ViewTask />,
            },
            {
                path: "/task/:taskId/edit",
                element: <EditTask />,
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
]);

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const data = await api.get("/auth/me");
                if (data.success && data.user) {
                    dispatch(loginSuccess(data.user));
                    dispatch(fetchTasks());
                } else {
                    dispatch(logout());
                    dispatch(clearTasks());
                    clearToken();
                }
            } catch {
                dispatch(logout());
                dispatch(clearTasks());
                clearToken();
            }
        };

        verifyUser();
    }, [dispatch]);

    return <RouterProvider router={router} />;
}

export default App;