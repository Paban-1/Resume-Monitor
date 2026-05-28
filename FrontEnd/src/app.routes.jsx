import { createBrowserRouter } from "react-router"
import Login from "./auth/pages/Login"
import Register from "./auth/pages/Register"
import ProtactedRoute from "./auth/components/ProtactedRoute"

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
        element: <ProtactedRoute><h1>Home page</h1></ProtactedRoute>
    }
])