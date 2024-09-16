import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App';
import User from './components/User/user';
import Admin from './components/Admin/admin';
import HomePage from './components/Home/homepage';
import DashBoard from './components/Admin/Content/dashboard';
import ManageUser from './components/Admin/Content/manageuser';
import Login from './components/Auth/login';
import { ToastContainer, toast } from 'react-toastify';

const Layout = (props) => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
                {
                    path: "user",
                    element: <User />,
                },
            ],
        },
        {
            path: "admin",
            element: <Admin />,
            children: [
                {
                    index: true,
                    element: <DashBoard />,
                },
                {
                    path: "manage-user",
                    element: <ManageUser />,
                },
            ],
        },
        {
            path: "/login",
            element: <Login />,
        },
    ]);


    return (
        <>
            <RouterProvider router={router} />

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
        </>
    )
}

export default Layout