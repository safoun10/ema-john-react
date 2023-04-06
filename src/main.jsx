import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/shop/Shop";
import Home from "./components/home/Home";
import Orders from "./components/orders/Orders";
import Inventory from "./components/inventory/Inventory";
import Login from "./components/login/Login";

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home></Home>,
    children : [
      {
        path : "/",
        element : <Shop></Shop>
      },
      {
        path : "review",
        element : <Orders></Orders>
      },
      {
        path : "inventory",
        element : <Inventory></Inventory>
      },
      {
        path : "login",
        element : <Login></Login>
      }
    ]
  },
  {
    path : "*",
    element : <div>404</div>
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
