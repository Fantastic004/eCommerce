import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "./store/AuthSlice";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      setError("");

      dispatch(login({ username })); // ✅ set login state
      navigate("/home");
    } else {
      setError("Incorrect username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-24 h-24 bg-blue-200 rotate-45 rounded-md opacity-40" />
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-gradient-to-tr from-blue-300 to-blue-500 rounded-full blur-3xl opacity-30" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-tr from-blue-300 to-blue-500 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-300 rotate-45 rounded-md opacity-30" />
      <div className="absolute bottom-16 left-1/2 w-8 h-8 bg-blue-400 rounded-full opacity-50" />

      <div className="relative bg-white shadow-lg rounded-2xl p-10 w-full max-w-sm z-10">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-1">
          FAB4
        </h1>
        <p className="text-sm text-gray-400 text-center mb-6">
          Start Shopping🛒
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="text-right text-xs text-blue-500 mt-1 cursor-pointer hover:underline">
              Forgot password?
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold"
          >
            SIGN IN
          </button>

          <div className="flex justify-center gap-6 mt-4 text-xl text-gray-600">
            <FontAwesomeIcon
              icon={["fab", "google"]}
              className="cursor-pointer hover:text-red-500"
            />
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              className="cursor-pointer hover:text-blue-700"
            />
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              className="cursor-pointer hover:text-pink-500"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
