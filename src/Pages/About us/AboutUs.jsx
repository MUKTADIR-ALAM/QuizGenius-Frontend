import React from 'react'
import { Link } from 'react-router';

export default function AboutUs() {
    return (
        <div className="bg-white text-black min-h-screen p-8">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <section className="text-center py-12">
              <h1 className="text-5xl font-bold mb-6">About Quiz Genius</h1>
              <p className="text-xl max-w-2xl mx-auto opacity-90">
                Revolutionizing learning with AI-powered quizzes, tailored for the modern mind.
              </p>
            </section>
    
            {/* Mission Section */}
            <section className="py-12 border-b border-gray-800">
              <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg mb-6 opacity-90">
                    At Quiz Genius, we believe learning should be <span className="font-semibold">adaptive, engaging, and borderless</span>. 
                    Our AI-driven platform crafts personalized quizzes that evolve with you.
                  </p>
                  <p className="text-lg opacity-90">
                    We embrace the future of payments—accepting <span className="font-semibold">crypto</span> for seamless, global access to premium features.
                  </p>
                </div>
                <div className="bg-black text-white bg-opacity-10 p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Why Crypto?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">⚡</span>
                      <span>Instant, low-fee transactions for global users.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">🔒</span>
                      <span>Decentralized security and transparency.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">🌍</span>
                      <span>No borders—learn and pay from anywhere.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
    
            {/* Team Section */}
            <section className="py-12 border-b border-gray-800">
              <h2 className="text-3xl font-bold mb-12">The Minds Behind the Magic</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: "Alex Turing", role: "AI Architect", bio: "Built the algorithms that make quizzes smarter." },
                  { name: "Sam Block", role: "Crypto Lead", bio: "Pioneering seamless crypto integrations." },
                  { name: "Jordan Luxe", role: "Designer", bio: "Crafted the minimalist, luxe aesthetic." },
                ].map((member, index) => (
                  <div key={index} className="bg-black text-white bg-opacity-5 p-6 rounded-lg hover:bg-opacity-10 transition">
                    <div className="w-20 h-20 rounded-full mb-4"><img className='rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" /></div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-gray-400 mb-3">{member.role}</p>
                    <p className="opacity-90">{member.bio}</p>
                  </div>
                ))}
              </div>
            </section>
    
            {/* CTA */}
            <section className="py-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Learning?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Join Quiz Genius today—unlock premium features with crypto or traditional payments.
              </p>
              <Link to={'/pricing'} className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition">
                Explore Premium
              </Link>
            </section>
          </div>
        </div>
      );
}
