import React from "react";
import { useNavigate } from "react-router";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  function handleCartClick() {
    navigate("/cartItems");
  }

  function handleHomeClick() {
    navigate("/home");
  }

  function handleProductsClick() {
    navigate("/products");
  }

  return (
    <div className="bg-blue-400">
      <div className="flex justify-between text-lg text-black font-semibold  p-5 shadow-2xl">
        <div className="heading ml-9 text-2xl">
          <h1 className="cursor-pointer" onClick={handleHomeClick}>
            FAB4
          </h1>
        </div>
        <div>
          <ul className="flex gap-10">
            <li
              onClick={handleHomeClick}
              className="cursor-pointer hover:text-blue-600"
            >
              Home
            </li>
            <li
              onClick={handleProductsClick}
              className="cursor-pointer hover:text-blue-600"
            >
              Products
            </li>
            <li className="cursor-pointer hover:text-blue-600">About</li>
            <li className="cursor-pointer hover:text-blue-600">Contact</li>
          </ul>
        </div>
        <div className="mr-10 cursor-pointer hover:text-blue-600">
          <ul className="flex">
            {/* <li>Login</li> */}
            <li onClick={handleCartClick} className="cursor-pointer">
              🛒
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
