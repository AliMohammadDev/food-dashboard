import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Category from "../pages/Categories";
import Item from "../pages/Items";
import ErrorFallback from "../pages/ErrorFallback";
import Order from "../pages/Order";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Logout from "../pages/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorFallback />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "categories",
        element: <Category />,
      },
      {
        path: "items",
        element: <Item />,
      },

      {
        path: "orders",
        element: <Order />,
      },

    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
