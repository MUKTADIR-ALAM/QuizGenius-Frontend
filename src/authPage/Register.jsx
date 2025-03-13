const Register = () => {
  return (
    <div className="hero bg-main min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-second/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-second/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-second/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="hero-content flex-col lg:flex-row-reverse relative z-10 px-4 py-8 lg:py-16">
        {/* Left Content */}
        <div className="text-center lg:text-left text-white lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-in">
              Join <span className="text-second relative inline-block">
                QuizGenius
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-second/30 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>!
            </h1>
            <p className="py-6 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 text-white/90">
              Create your account and start your learning journey. Access our extensive quiz library,
              track your progress, and compete with other learners. Join our community today!
            </p>
          </div>

          <div className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-second/10 hover:bg-second/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-second/20">
              <div className="p-2 rounded-full bg-second/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-second" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <span className="text-lg font-medium">Access to all quiz categories</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-second/10 hover:bg-second/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-second/20">
              <div className="p-2 rounded-full bg-second/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-second" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-lg font-medium">Track your progress</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-second/10 hover:bg-second/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-second/20">
              <div className="p-2 rounded-full bg-second/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-second" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="text-lg font-medium">Join the community</span>
            </div>
          </div>
        </div>

        {/* Right Content - Register Form */}
        <div className="card bg-white/95 backdrop-blur-sm w-full max-w-sm shadow-2xl border border-white/20">
          <div className="card-body p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-main relative">
              Create Account
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-second rounded-full"></span>
            </h2>
            <fieldset className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-main">Full Name</span>
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    className="input input-bordered focus:border-second h-12 text-lg pl-10 transition-all duration-300 focus:shadow-lg focus:shadow-second/20" 
                    placeholder="Enter your full name" 
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-main absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-main">Email</span>
                </label>
                <div className="relative">
                  <input 
                    type="email" 
                    className="input input-bordered focus:border-second h-12 text-lg pl-10 transition-all duration-300 focus:shadow-lg focus:shadow-second/20" 
                    placeholder="Enter your email" 
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-main absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-main">Password</span>
                </label>
                <div className="relative">
                  <input 
                    type="password" 
                    className="input input-bordered focus:border-second h-12 text-lg pl-10 transition-all duration-300 focus:shadow-lg focus:shadow-second/20" 
                    placeholder="Create a password" 
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-main absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-main">Confirm Password</span>
                </label>
                <div className="relative">
                  <input 
                    type="password" 
                    className="input input-bordered focus:border-second h-12 text-lg pl-10 transition-all duration-300 focus:shadow-lg focus:shadow-second/20" 
                    placeholder="Confirm your password" 
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-main absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="checkbox checkbox-main" />
                <span className="text-main">I agree to the Terms and Conditions</span>
              </div>
              <button className="btn bg-second hover:bg-second/90 text-white w-full h-12 text-lg font-semibold mt-4 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-second/20">
                Create Account
              </button>
              <div className="text-center mt-6">
                <span className="text-lg text-main">Already have an account? </span>
                <a className="link link-main hover:text-second transition-colors duration-300">Login</a>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;