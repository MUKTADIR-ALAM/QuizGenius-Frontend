import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';




const LoginPage = () => {
  const { logInUser, signInWithGoogle } = useContext(AuthContext);

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginSubmit = async(e) => {
    e.preventDefault();
    setErrorMessage("");
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    try {
      const result = await logInUser(email, password);
      toast.success("Successfully login");
    } catch (error) {

      if (error.message.includes("locked")) {
        toast.error(error.message);
        console.error(error.message);
      } else {
        
        toast.error("Login failed. Please check your credentials.");
        console.error("Login failed. Please check your credentials.");
      }
    }
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        navigate(location?.state ? location?.state : "/");
        toast.success("Successfully login");
      })
      .catch((err) => {
        setErrorMessage(err.message);
        toast.error(err.message);
      });
  };

  return (
    <div className="min-h-screen flex py-12 flex-col justify-center items-center">
      <Toaster></Toaster>
      <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">
          Login to Quiz Genious
        </h2>
        <form onSubmit={handleLoginSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            {errorMessage && (
              <p className="text-red-500 font-semibold text-sm text-center">
                {errorMessage}
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </div>
        </form>
        <div
          onClick={handleGoogleLogin}
          className="mt-5 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <FcGoogle className="mr-2" size={20} />
          Sign In with Google
        </div>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-400">Don't have an account? </span>
          <Link
            to={"/register"}
            className="text-sm text-white hover:text-blue-400"
          >
            Sign Up
          </Link>
        </div>
      </div>
    
    </div>
  );
};

export default LoginPage;
