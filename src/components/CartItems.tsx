import { useNavigate } from "react-router";
import Navbar from "./Navbar";

export const CartItems = () => {
  const navigate = useNavigate();

  function handleShoppingClick() {
    navigate("/products");
  }

  return (
    <>
      <Navbar />
      <div className="bg-blue-100 h-[100vh] flex text-blue-900">
        {/* Left Section */}
        <div className="w-[60%]">
          {/* Header */}
          <div className="flex justify-between pl-[10%] pt-[5%] items-center">
            <p className="text-3xl font-bold">Shopping Cart</p>
            <button
              onClick={handleShoppingClick}
              className="p-[10px] font-semibold bg-white border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-colors"
            >
              Continue Shopping
            </button>
          </div>

          <hr className="ms-[10%] border-t border-blue-700 my-[40px]" />

          {/* Cart Item */}
          <div className="ml-[10%] h-[150px]">
            <div className="flex">
              {/* Cart Left */}
              <div className="flex pl-[20px] w-[80%]">
                {/* Image Placeholder */}
                <div className="w-[150px] h-[150px] bg-white flex items-center justify-center text-sm text-blue-700 border border-blue-300">
                  Image
                </div>
                {/* Info */}
                <div className="ms-[15px] my-[20px] flex flex-col justify-between text-blue-900">
                  <p className="font-semibold text-[20px]">Product Title</p>
                  <p>Product Description aasdfasdvsasdcacvzcd</p>
                  <p>
                    Discount: <span className="text-blue-600">10%</span>
                  </p>
                </div>
              </div>
              {/* Price & Delete */}
              <div className="ms-5 flex items-center gap-3 text-blue-700 font-medium">
                <p>$30.00</p>
                <button className="hover:underline">Delete</button>
              </div>
            </div>
          </div>

          <hr className="ms-[13%] border-t border-blue-400 my-[40px]" />
        </div>

        {/* Right Section */}
        <div className="w-[40%]">
          <div className="h-[20%] mt-[45px]">
            <div className="ms-[100px] bg-white h-[100%] w-[50%] shadow-md border border-blue-300 rounded-md">
              {/* Summary */}
              <div className="mx-[30px] flex justify-between text-blue-900 font-medium pt-[30px]">
                <p>Cart Subtotal (1 Item)</p>
                <p>$30</p>
              </div>

              {/* Checkout Button */}
              <div className="">
                <button className="mx-auto mt-6 block border border-blue-700 text-blue-700 px-[55px] py-2 bg-white font-semibold hover:bg-blue-700 hover:text-white transition-colors rounded">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
