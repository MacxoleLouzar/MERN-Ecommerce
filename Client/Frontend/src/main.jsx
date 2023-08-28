import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Home from './Pages/Home.jsx';
import ProductPG from './Pages/ProductPG.jsx';
import Login from './Pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <ProductPG/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
