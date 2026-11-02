import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import Contact from "./Pages/Contact";
import About from "./Components/About";
import ViewTask from "./Components/ViewTask";
import AddTask from "./Components/AddTask";
import EditTask from "./Components/EditTask";
import ProtectedRoute from "./Components/ProtectedRoute";
import PublicOnlyRoute from "./Components/PublicOnlyRoute";
import {
    loginSuccess,
    logout,
    setAuthInitialized,
} from "./Features/AuthSlice";
import { fetchTasks, clearTasks } from "./Features/TaskSlice";
import api, { clearToken, setUnauthorizedCallback } from "./Utils/api";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            // Public pages accessible to all visitors
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },

            // Protected dashboard routes
            {
                element: <ProtectedRoute />,
                children: [
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
                        path: "/profile",
                        element: <Profile />,
                    },
                ],
            },
        ],
    },

    // Guest-only authentication routes (redirect to / if logged in)
    {
        element: <PublicOnlyRoute />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },

    // Fallback route
    {
        path: "*",
        element: <Navigate to="/" replace />,
    },
]);

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        // Register callback for expired credentials on API requests
        setUnauthorizedCallback(() => {
            dispatch(logout());
            dispatch(clearTasks());
            clearToken();
        });

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
            } finally {
                dispatch(setAuthInitialized());
            }
        };

        verifyUser();
    }, [dispatch]);

    return <RouterProvider router={router} />;
}

export default App;
