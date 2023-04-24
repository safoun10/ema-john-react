import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/shop/Shop";
import Home from "./components/home/Home";
import Orders from "./components/orders/Orders";
import Inventory from "./components/inventory/Inventory";
import Login from "./components/login/Login";
import CartProductsLoader from "./components/loader/CartProductLoader";
import Checkout from "./components/checkout/Checkout";
import SignUp from "./components/signUp/SignUp";

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
        element : <Orders></Orders>,
        loader : CartProductsLoader
      },
      {
        path : "inventory",
        element : <Inventory></Inventory>
      },
      {
        path : "login",
        element : <Login></Login>
      },
      {
        path : "sign-up",
        element : <SignUp></SignUp>
      },
      {
        path : "checkout",
        element : <Checkout></Checkout>
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
