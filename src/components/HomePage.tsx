import React from "react";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/products");
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="text-center align-middle  bg-[url('./assets/homepagebg.jpeg')] bg-cover  h-[89vh] w-full">
        <h1>
          <span className="text-6xl font-bold mt-4">
            Discover everything you need{" "}
          </span>{" "}
        </h1>
        <p className="m-20 text-[60px]  font-bold text-blue-400 w-[190px]">
          Shopping Fastdelivery Greatprices
        </p>
        <button
          onClick={handleClick}
          className="bg-blue-400 text-white p-5 rounded-full relative bottom-24 right-40 hover:bg-blue-500"
        >
          Shop now
        </button>
      </div>
    </div>
  );
};

export default HomePage;
