import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import User from './components/User/user';
import Admin from './components/Admin/admin';
import HomePage from './components/Home/homepage';
import DashBoard from './components/Admin/Content/dashboard';
import ManageUser from './components/Admin/Content/manageuser';

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
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <RouterProvider router={router} />
    {/* </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
