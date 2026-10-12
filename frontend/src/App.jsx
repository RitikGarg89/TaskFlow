import React from 'react'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from "./Layouts/AppLayout";
import ViewTask from './Components/ViewTask'
import AddTask from './Components/AddTask'

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
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App