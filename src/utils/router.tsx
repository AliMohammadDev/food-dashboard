import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Category from "../pages/Categories";
import Item from "../pages/Items";
import ErrorFallback from "../pages/ErrorFallback";
import Order from "../pages/Order";

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
]);

export default router;
