import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "./Login";
import HomePage from "./HomePage";
import Products from "./Products";
import { CartItems } from "./CartItems";
import About from "./About";
import ContactUs from "./ContactUs";
import OrderConfirmationModal from "./Ordersucessful";

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
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/checkout",
    element: <OrderConfirmationModal />,
  },
]);

export default router;
