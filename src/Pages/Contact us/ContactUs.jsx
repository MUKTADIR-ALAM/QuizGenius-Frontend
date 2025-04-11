import React from 'react'

export default function ContactUs() {
    return (
        <div className="bg-white text-black min-h-screen p-8">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <section className="text-center py-12">
              <h1 className="text-5xl font-bold mb-6">Contact Quiz Genius</h1>
              <p className="text-xl max-w-2xl mx-auto opacity-90">
                Got questions? We’re here to help. Reach out for support, feedback, or crypto payment inquiries.
              </p>
            </section>
    
            {/* Contact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-8">
              {/* Contact Form */}
              <div className="bg-black text-white bg-opacity-5 p-8 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 bg-white bg-opacity-10 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white"
                      placeholder="Alex Turing"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 bg-white bg-opacity-10 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white"
                      placeholder="alex@quizgenius.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                    <select
                      id="subject"
                      className="w-full p-3 bg-black text-white bg-opacity-10 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white"
                    >
                      <option value="support">Support</option>
                      <option value="crypto">Crypto Payments</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full p-3 bg-white bg-opacity-10 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
    
              {/* Support Options */}
              <div className="flex flex-col justify-around">
                {/* Crypto Support */}
                <div className="bg-black text-white bg-opacity-5 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="mr-3">💰</span>Crypto Payment Support
                  </h3>
                  <p className="opacity-90 mb-4">
                    Need help with crypto transactions for premium features? We accept:
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["BTC", "ETH", "SOL", "USDT"].map((coin) => (
                      <span key={coin} className="bg-white text-black bg-opacity-10 px-3 py-1 rounded-full text-sm">
                        {coin}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm opacity-80">
                    Contact us at <span className="font-mono">crypto@quizgenius.com</span> for wallet addresses.
                  </p>
                </div>
    
                {/* General Support */}
                <div className="bg-black text-white bg-opacity-5 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="mr-3">✉️</span>Email Support
                  </h3>
                  <p className="opacity-90 mb-2">
                    <span className="font-semibold">General inquiries:</span> support@quizgenius.com
                  </p>
                  <p className="opacity-90">
                    <span className="font-semibold">Response time:</span> Within 24 hours.
                  </p>
                </div>
    
                {/* Social Links */}
                <div className="bg-black text-white bg-opacity-5 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="mr-3">🌐</span>Connect With Us
                  </h3>
                  <div className="flex space-x-4">
                    {[
                      { name: "Twitter", icon: "🐦", url: "#" },
                      { name: "Discord", icon: "💬", url: "#" },
                      { name: "GitHub", icon: "👨‍💻", url: "#" },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className="flex items-center bg-white text-black bg-opacity-10 hover:bg-opacity-20 px-4 py-2 rounded-lg transition"
                      >
                        <span className="mr-2">{social.icon}</span>
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
    
            {/* FAQ Section */}
            <section className="py-12 border-t border-gray-800">
              <h2 className="text-3xl font-bold mb-8">FAQs</h2>
              <div className="space-y-4">
                {[
                  {
                    question: "How do I pay with crypto for premium features?",
                    answer: "Select ‘Crypto’ at checkout. We’ll provide a wallet address and real-time conversion rates.",
                  },
                  {
                    question: "Is my data secure with Quiz Genius?",
                    answer: "Absolutely. We use end-to-end encryption and never store payment details.",
                  },
                  {
                    question: "Can I switch plans later?",
                    answer: "Yes! Upgrade/downgrade anytime from your dashboard.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-white bg-opacity-5 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                    <p className="opacity-90">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      );
}
