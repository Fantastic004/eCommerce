import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "./Login";
import HomePage from "./HomePage";
import Products from "./Products";
import { CartItems } from "./CartItems";
import About from "./About";
import ContactUs from "./ContactUs";
import OrderConfirmationModal from "./Ordersucessful";
import NotFound from "./NotFound";
import ProtectedRoute from "./ProtectedRoute";

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
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/products",
    element: (
      <ProtectedRoute>
        <Products />
      </ProtectedRoute>
    ),
  },
  {
    path: "/cartItems",
    element: (
      <ProtectedRoute>
        <CartItems />
      </ProtectedRoute>
    ),
  },
  {
    path: "/about",
    element: (
      <ProtectedRoute>
        <About />
      </ProtectedRoute>
    ),
  },
  {
    path: "/contact",
    element: (
      <ProtectedRoute>
        <ContactUs />
      </ProtectedRoute>
    ),
  },
  {
    path: "/checkout",
    element: (
      <ProtectedRoute>
        <OrderConfirmationModal />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
