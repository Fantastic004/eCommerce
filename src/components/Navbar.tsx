import React from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "./store/Store";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const cartItem = useSelector((state: RootState) => state.cart);

  const cartItemlen = cartItem.length;

  function handleCartClick() {
    navigate("/cartItems");
  }

  function handleHomeClick() {
    navigate("/home");
  }

  function handleProductsClick() {
    navigate("/products");
  }

  function handleAboutClick() {
    navigate("/about");
  }

  function handleContactClick() {
    navigate("/contact");
  }

  return (
    <div className="bg-blue-400 fixed w-full  top-0 z-10">
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
            <li
              onClick={handleAboutClick}
              className="cursor-pointer hover:text-blue-600"
            >
              About
            </li>
            <li
              onClick={handleContactClick}
              className="cursor-pointer hover:text-blue-600"
            >
              Contact
            </li>
          </ul>
        </div>
        <div className="mr-10 cursor-pointer hover:text-blue-600">
          <ul className="flex">
            {/* <li>Login</li> */}

            <li onClick={handleCartClick} className="cursor-pointer">
              <FontAwesomeIcon icon={faCartShopping} />
              {cartItemlen > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "8px",
                    right: "40px",
                    borderRadius: "50%",
                    padding: "0px 10px",
                    fontSize: "10px",
                  }}
                  className="bg-blue-600 text-white"
                >
                  {cartItemlen}
                </span>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
