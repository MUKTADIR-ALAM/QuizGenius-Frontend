import React from 'react'

export default function Pricing() {
    return (
        <div className="bg-white text-black min-h-screen p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Pricing</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Free Plan Card */}
              <div className="bg-gray-200 text-black p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <h2 className="text-2xl font-bold mb-4">Free</h2>
                <p className="text-gray-600 mb-6">Perfect for getting started</p>
                <p className="text-4xl font-bold mb-6">$0<span className="text-lg">/mo</span></p>
                <ul className="mb-8">
                  <li className="mb-2">✓ Basic quizzes</li>
                  <li className="mb-2">✓ Limited analytics</li>
                  <li className="mb-2">✓ Community support</li>
                </ul>
                <button className="bg-black text-white px-6 py-3 rounded-lg w-full hover:bg-gray-800 transition duration-300">
                  Get Started
                </button>
              </div>
    
              {/* Starter Plan Card */}
              <div className="bg-gray-200 text-black p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <h2 className="text-2xl font-bold mb-4">Starter</h2>
                <p className="text-gray-600 mb-6">Great for regular users</p>
                <p className="text-4xl font-bold mb-6">$9<span className="text-lg">/mo</span></p>
                <ul className="mb-8">
                  <li className="mb-2">✓ Advanced quizzes</li>
                  <li className="mb-2">✓ Enhanced analytics</li>
                  <li className="mb-2">✓ Email support</li>
                </ul>
                <button className="bg-black text-white px-6 py-3 rounded-lg w-full hover:bg-gray-800 transition duration-300">
                  Get Started
                </button>
              </div>
    
              {/* Premium Plan Card */}
              <div className="bg-gray-200 text-black p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <h2 className="text-2xl font-bold mb-4">Premium</h2>
                <p className="text-gray-600 mb-6">Best for power users</p>
                <p className="text-4xl font-bold mb-6">$19<span className="text-lg">/mo</span></p>
                <ul className="mb-8">
                  <li className="mb-2">✓ Unlimited quizzes</li>
                  <li className="mb-2">✓ Full analytics</li>
                  <li className="mb-2">✓ Priority support</li>
                </ul>
                <button className="bg-black text-white px-6 py-3 rounded-lg w-full hover:bg-gray-800 transition duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      );
}
