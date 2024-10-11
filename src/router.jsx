import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages";
import GetStarted from "./Components/LandingPage/main/GetStarted";
import Login from "./Components/LandingPage/main/Login";
import SignUp from "./Components/LandingPage/main/SignUp";

const router = createBrowserRouter([
    {
        index: true,
        element: <Home />
    },
    {
        path: "/",
        element: <GetStarted />,
        children: [
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    }
])

export default router;