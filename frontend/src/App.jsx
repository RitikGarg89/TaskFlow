import React from 'react'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from "./Layouts/AppLayout";
import ViewTask from './Components/ViewTask'
import AddTask from './Components/AddTask'
import EditTask from './Components/EditTask'
import About from './Components/About'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess, logout } from "./Features/AuthSlice";
import { getCurrentUser, isSessionValid, endSession } from "./Utils/UserStorage";

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
        element: <AddTask />
      },
      {
        path: "/tasks/:taskId",
        element: <ViewTask />
      },
      {
        path: "/task/:taskId/edit",
        element: <EditTask />,
      },
      {
        path: "/about",
        element: <About />,
      }
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
  }
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = getCurrentUser();
    const valid = isSessionValid();
    if (user && valid) {
      dispatch(loginSuccess(user));
    } else {
      endSession();
      dispatch(logout());
    }
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App