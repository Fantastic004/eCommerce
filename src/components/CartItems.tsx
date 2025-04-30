import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/Store";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "./store/cartSlice";

export const CartItems = () => {
  const navigate = useNavigate();

  function handleShoppingClick() {
    navigate("/products");
  }
  const cartItems = useSelector((state: RootState) => state.cart);

  const cartItemsLen = cartItems.length;

  const cartTotal = cartItems.reduce(
    (acc, items) => acc + items.price * items.quantity,
    0
  );

  const dispatch = useDispatch();

  function handleDelete(item: any) {
    dispatch(removeItem(item));
  }

  const handleDecQuantity = (id: string) => {
    dispatch(decreaseQuantity(id));
  };

  const handleIncQuantity = (id: string) => {
    dispatch(increaseQuantity(id));
  };

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen pt-[70px] flex text-black">
        {/* Left Section */}
        <div className="w-[60%] px-[5%] py-10">
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <p className="text-3xl font-bold">Shopping Cart</p>
            <button
              onClick={handleShoppingClick}
              className="px-4 py-2 font-semibold bg-white border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-colors"
            >
              Continue Shopping
            </button>
          </div>

          <hr className="border-t border-blue-700 mb-8" />

          {/* Cart Items */}
          {cartItems.map((items) => (
            <div key={items.id} className="mb-8">
              <div className="flex gap-6">
                {/* Image */}
                <div className="w-[150px] h-[150px] border border-blue-300 flex items-center justify-center">
                  <img
                    src={items.images[0]}
                    alt={items.name}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>

                {/* Info & Controls */}
                <div className="flex flex-1 justify-between items-center">
                  {/* Info */}
                  <div className="flex flex-col gap-3">
                    <p className="font-semibold text-[25px]">{items.name}</p>
                    <p className="text-sm text-[21px] ">
                      {items.warrantyInformation}
                    </p>
                    <p className="text-sm">
                      Discount:{" "}
                      <span className="text-blue-600">
                        {items.discountPercentage}%
                      </span>
                    </p>
                  </div>

                  {/* Quantity & Price */}
                  <div className="flex flex-col items-end gap-3">
                    <div className="flex items-center gap-3">
                      <button
                        className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300 border"
                        onClick={() => handleDecQuantity(String(items.id))}
                      >
                        -
                      </button>
                      <span>{items.quantity}</span>
                      <button
                        className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300 border"
                        onClick={() => handleIncQuantity(String(items.id))}
                      >
                        +
                      </button>
                    </div>
                    <div className="justify-items-center  flex items-center gap-3">
                      <p>₹{Math.round(items.quantity * items.price * 85)}</p>
                      <FontAwesomeIcon
                        onClick={() => handleDelete(items.id)}
                        className="cursor-pointer"
                        icon={faTrash}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="w-[40%] flex items-start pt-20">
          <div className="w-[70%] mx-auto bg-white shadow-md border border-blue-300 rounded-md p-6">
            <div className="flex justify-between text-black font-medium mb-6">
              <p>Cart Subtotal ({cartItemsLen})</p>
              <p>₹{Math.round(cartTotal * 85)}</p>
            </div>
            <button className="w-full border border-blue-700 text-blue-700 py-2 bg-white font-semibold hover:bg-blue-700 hover:text-white transition-colors rounded">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
