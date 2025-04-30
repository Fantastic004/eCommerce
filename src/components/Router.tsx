import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "./Login";
import HomePage from "./HomePage";
import Products from "./Products";
import { CartItems } from "./CartItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/cartItems",
    element: <CartItems />,
  },
]);

export default router;
