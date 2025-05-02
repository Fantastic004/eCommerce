import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./components/Router.tsx";
import { Provider } from "react-redux";
import { Store } from "./components/store/Store.ts";
import { ToastContainer } from "react-toastify";

let isDataExist = localStorage.getItem("cart");

if (!isDataExist) {
  localStorage.setItem("cart", JSON.stringify([]));
}

createRoot(document.getElementById("root")!).render(
  <Provider store={Store}>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </Provider>
);
