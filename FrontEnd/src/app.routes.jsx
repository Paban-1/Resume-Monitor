import { createBrowserRouter } from "react-router"
import Login from "./features/auth/pages/Login"
import Register from "./features/auth/pages/Register"
import ProtactedRoute from "./features/auth/components/ProtactedRoute"
import Home from "./features/interview/pages/Home"
import Interview from "./features/interview/pages/Interview"

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/",
        element: <ProtactedRoute><Home /></ProtactedRoute>
    },
{
    // path:"/interview/:interviewId",
    path:"/interview",
    element:<ProtactedRoute><Interview /></ProtactedRoute>
}
])