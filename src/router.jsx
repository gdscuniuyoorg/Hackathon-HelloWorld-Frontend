import { createBrowserRouter, Outlet, ScrollRestoration } from "react-router-dom";
import Admin from "./Components/AdminDashBoard/Admin";
import AddNewStudent from "./Components/AdminDashBoard/Main/AddNewStudent";
import AllStudents from "./Components/AdminDashBoard/Main/AllStudent";
import Attendance from "./Components/AdminDashBoard/Main/Attendance";
import DashBorad from "./Components/AdminDashBoard/Main/DashBoard";
import GenerateReport from "./Components/AdminDashBoard/Main/GenerateReport";
import Lecturers from "./Components/AdminDashBoard/Main/Lecturers";
import Table from "./Components/AdminDashBoard/Main/Table";
import LandingPage from "./Components/LandingPage/LandingPage";
import GetStarted from "./Components/LandingPage/main/GetStarted";
import Login from "./Components/LandingPage/main/Login";
import SignUp from "./Components/LandingPage/main/SignUp";
import StudentDashBoard from "./Components/StudentDashBoard/Main/StudentDashBoard";
import StudentLectures from "./Components/StudentDashBoard/Main/StudentLectures";
import Student from "./Components/StudentDashBoard/Student";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <ScrollRestoration />
                <Outlet />
            </>
        ),
        children: [

            {
                index: true,
                element: <LandingPage/>
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
            },
            {
                path: "/admin",
                element: <Admin />,
                children: [
                    {
                        index: true,
                        element: <DashBorad />
                    },
                    {
                        path: "/admin/lectures",
                        element: <Lecturers />
                    },
                    {
                        path: "/admin/students",
                        element: <AllStudents />,
                        children: [
                            {
                                index: true,
                                element: <Table />
                            },
                            {
                                path: "/admin/students/new",
                                element: <AddNewStudent />
                            }
                        ]
                    },
                    {
                        path: "/admin/attendance",
                        element: <Attendance />
                    },
                    {
                        path: "/admin/report",
                        element: <GenerateReport />
                    }
                ]
            },
            {
                path: "/student",
                element: <Student/>,
                children: [
                    {
                        index: true,
                        element: <StudentDashBoard/>
                    },
                    {
                        path: "/student/lectures",
                        element: <StudentLectures/>
                    },
                ]
            }
        ]
    }
])

export default router;