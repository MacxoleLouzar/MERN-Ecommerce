import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "./Components/Layout";
import OrderDetails from "./Components/OrderDetails";
import AppState from "./context/AppState.jsx";
import "./index.css";
import Checkout from "./Pages/Checkout";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import OrderPages from "./Pages/OrderPages";
import ProductPG from "./Pages/ProductPG.jsx";
import Register from "./Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductPG />,
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
        path: "/Checkout",
        element: <Checkout />,
      },
      {
        path: "/orders",
        element: <OrderPages />,
      },
      {
        path: "/orders/:id",
        element: <OrderDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppState>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </AppState>
  </React.StrictMode>
);
