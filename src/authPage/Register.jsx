import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const RegisterPage = () => {


  const { createUserWithemailPass, setUser, updateUserProfile,signInWithGoogle } = useContext(AuthContext);
const [showPassword, setShowPassword] = useState(false);
const [errorMessage, setErrorMessage] = useState("");
const hadleGoogleLogin = () => {
  signInWithGoogle()
    .then((result) => {
      navigate(location?.state ? location?.state : "/");
      toast.success('Successfully Registerd!');
    })
    .catch((error) => {
      setErrorMessage(err.message);
      toast.error(err.message);
    });
};
const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

const navigate = useNavigate();
const handleRegisterSubmit = (e) => {
  e.preventDefault();
  const form = new FormData(e.target);
  const name = form.get("name");
  const email = form.get("email");
  const photoUrl = form.get("photo-url");
  const password = form.get("password");
  setErrorMessage("");
  if (!regex.test(password)) {
    setErrorMessage(
      "Must have an Uppercase and a Lowercase also length must be at least 6 character in the password "
    );
    toast.error("chose strong password")
    return;
  }
  createUserWithemailPass(email, password)
    .then((res) => {
      setUser(res.user);
      updateUserProfile({ displayName: name, photoURL: photoUrl })
        .then((res) =>
          setUser((prevUser) => {
            return { ...prevUser, displayName: name, photoURL: photoUrl };
          })
        )
        .catch((err) => toast.error(err.message));
      navigate("/");
    })
    .catch((error) => {
      setErrorMessage(error.message);
      toast.error(error.message);
    });
};



  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">Create Your Account</h2>
        <form className="space-y-6">
          {/* Full Name Field */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Create a password"
            />
          </div>

          <div>
          {errorMessage && (
        <p className="text-red-500 font-semibold text-sm text-center">
          {errorMessage}
        </p>
      )}
          </div>

          {/* Register Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Register
            </button>

            <button 
            type="submit"
            className="mt-5 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
            <FcGoogle className='mr-2' size={20} />
             Sign up with Google
             </button>
          </div>
        </form>

        {/* Link to Login Page */}
        <div className="mt-6 text-center">
          <span className="text-sm text-gray-400">Already have an account? </span>
          <Link to={'/login'} className="text-sm text-white hover:text-blue-400">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;