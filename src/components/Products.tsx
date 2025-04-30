import axios from "axios";
import { useEffect, useState } from "react";
import { CartItem, CategoryType, Product } from "../types/Types";
import { motion } from "framer-motion";
import Category from "./Category";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store/cartSlice";
import { AppDispatch, RootState } from "./store/Store";
import Navbar from "./Navbar";

// Skeleton Loader Component
const SkeletonLoader = () => (
  <div className="bg-gray-200 p-4 rounded-lg shadow animate-pulse flex flex-col items-center w-full max-w-[220px] h-[320px] justify-between">
    <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-[length:200%_100%] animate-shimmer" />
    <div className="h-[15px] w-[80%] bg-gray-300 my-2 rounded" />
    <div className="h-[15px] w-[50%] bg-gray-300 rounded" />
  </div>
);

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<String>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [skeletonCount, setSkeletonCount] = useState<number>(20);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("all");
  const [price, setPrice] = useState<number>(999.99);
  const [searchQuery, setSearchQuery] = useState<any>("");
  const [filteredData, setFilteredData] = useState<Product[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=194"
      );
      setProducts(response.data.products);
      setSkeletonCount(response.data.products.length);
    } catch (error) {
      setError("Failed to load products. Please try again.");
    } finally {
      setTimeout(() => setIsLoading(false), 1000);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== "all") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    filtered = filtered.filter((item) => item.price <= price);

    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredData(filtered);
  }, [products, selectedCategory, price, searchQuery]);
  const dispatch = useDispatch<AppDispatch>();

  const addItemToCart = (item: CartItem) => {
    console.log("Adding to cart:", item); // 👈 log the item
    dispatch(addToCart(item));
  };
  const cartItem = useSelector<RootState>((state) => state);
  console.log(cartItem);

  return (
    <>
      <Navbar />
      <div className="flex justify-between mt-[70px] p-5">
        {error}
        <div>
          <Category
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            price={price}
            setPrice={setPrice}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        {error == "" ? (
          <div className=" grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] gap-5  w-[80%]">
            {isLoading ? (
              Array(skeletonCount)
                .fill(0)
                .map((_, index) => <SkeletonLoader key={index} />)
            ) : filteredData.length > 0 ? (
              filteredData.map((item) => (
                <motion.div
                  key={item.id}
                  className="bg-white px-5 py-6 rounded-md shadow-xl text-center transition-transform duration-300 ease-in-out hover:scale-105 w-full max-w-[220px] h-[320px] flex flex-col justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div>
                    <img
                      className="w-[150px] h-[150px] mx-auto mb-1 object-contain"
                      src={item.images[0]}
                      alt={item.title}
                    />
                    <h3 className="text-sm font-semibold mb-2 h-[48px] overflow-hidden">
                      {item.title}
                    </h3>
                  </div>

                  <div>
                    <p className="text-lg text-blue-700 font-bold mb-3">
                      ₹{Math.round(item.price * 85)}
                    </p>
                    <button
                      onClick={() =>
                        addItemToCart({
                          id: item.id,
                          name: item.title,
                          price: item.price,
                          quantity: 1,
                          images: [item.images[0]],
                          discountPercentage: item.discountPercentage,
                          warrantyInformation: item.warrantyInformation,
                        })
                      }
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 w-sm"
                    >
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">
                No products found matching your filters.
              </p>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Products;
