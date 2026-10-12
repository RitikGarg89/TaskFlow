import React from 'react'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from "./Layouts/AppLayout";
import ViewTask from './Components/ViewTask'
import AddTask from './Components/AddTask'
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
  },
  {
    path: "/tasks/:taskId",
    element: <ViewTask />
  }
]);

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const user = getCurrentUser();

  //   if (user && isSessionValid()) {
  //     dispatch(loginSuccess(user));
  //   } else {
  //     endSession();
  //     dispatch(logout());
  //   }
  // }, [dispatch]);

  useEffect(() => {
    const user = getCurrentUser();

    console.log("User before validation:", user);
    console.log(
      "Expiry before validation:",
      localStorage.getItem("sessionExpiry")
    );

    const valid = isSessionValid();
    console.log("Session valid:", valid);

    if (user && valid) {
      dispatch(loginSuccess(user));
    } else {
      console.log("Clearing session");
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