import React from "react";
import { FaSearch } from "react-icons/fa";
import { CategoryType } from "../types/Types";

type CategoryProps = {
  setSelectedCategory: (category: CategoryType) => void;
  price: number;
  setPrice: (price: number) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: CategoryType; 
};

const Category: React.FC<CategoryProps> = ({
  setSelectedCategory,
  price,
  setPrice,
  searchQuery,
  setSearchQuery,
  selectedCategory,
}) => {
  const categories = [
    "all",
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    "vehicle",
    "womens-jewellery",
    "womens-shoes",
  ];

  return (
    <div className="fixed h-screen w-[17%] p-4 border-r border-gray-700 overflow-y-auto">
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg shadow-sm bg-gray-100 text-gray-600"
        />
        <FaSearch className="absolute top-3 right-3 text-gray-400" />
      </div>

      <h2 className="text-lg font-semibold text-blue-900 mb-2">Categories</h2>
      <ul className="space-y-2 text-black">
        {categories.map((category) => (
          <li
            key={category}
            className={`cursor-pointer ${
              selectedCategory === category
                ? "text-blue-500 font-semibold underline underline-offset-2 decoration-[px]"
                : "hover:text-blue-700"
            }`}
            onClick={() => setSelectedCategory(category as CategoryType)} 
          >
            {category
              .replace(/-/g, " ")
              .replace(/\b\w/g, (char) => char.toUpperCase())}
          </li>
        ))}
      </ul>

      <h2 className="text-lg font-semibold text-black mt-6">Price</h2>
      <p className="text-red-500 text-xl">Rs {(price * 85).toFixed(2)}</p>
      <input
        type="range"
        min="0"
        max="1000"
        step="1"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
        className="w-full accent-blue-500"
      />
      <button
        className="w-full mt-4 border font-bold border-red-500 text-black py-2 rounded-lg hover:bg-red-500"
        onClick={() => {
          setSelectedCategory("all");
          setPrice(999.99);
          setSearchQuery("");
        }}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default Category;
