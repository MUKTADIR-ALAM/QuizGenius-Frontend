import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">Login to Quiz Genious</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
        {/* <div className="mt-6 text-center">
          <a href="#" className="text-sm text-white hover:text-blue-400">
            Forgot your password?
          </a>
        </div> */}
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-400">Don't have an account? </span>
          <a href="#" className="text-sm text-white hover:text-blue-400">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;