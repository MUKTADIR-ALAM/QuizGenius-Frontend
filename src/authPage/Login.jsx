const Login = () => {
  return (
    <div className="hero bg-main min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse relative z-10 px-4 py-8 lg:py-16">
        {/* Left Content */}
        <div className="text-center lg:text-left text-white lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Welcome to <span className="text-second">QuizGenius</span>!
            </h1>
            <p className="py-6 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0">
              Challenge yourself with our diverse collection of quizzes. Test your knowledge,
              learn new things, and compete with others. Join our community of quiz enthusiasts today!
            </p>
          </div>

          <div className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-second/10 hover:bg-second/20 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-second" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-lg">Multiple quiz categories</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-second/10 hover:bg-second/20 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-second" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-lg">Real-time scoring</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-second/10 hover:bg-second/20 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-second" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-lg">Compete with friends</span>
            </div>
          </div>
        </div>

        {/* Right Content - Login Form */}
        <div className="card bg-white w-full max-w-sm shadow-xl">
          <div className="card-body p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-main">Login to QuizGenius</h2>
            <fieldset className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-main">Email</span>
                </label>
                <input 
                  type="email" 
                  className="input input-bordered focus:border-second h-12 text-lg" 
                  placeholder="Enter your email" 
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-main">Password</span>
                </label>
                <input 
                  type="password" 
                  className="input input-bordered focus:border-second h-12 text-lg" 
                  placeholder="Enter your password" 
                />
              </div>
              <div className="flex justify-between items-center">
                <label className="label cursor-pointer">
                  <span className="label-text text-main">Remember me</span>
                  <input type="checkbox" className="checkbox checkbox-main" />
                </label>
                <a className="link link-main">Forgot password?</a>
              </div>
              <button className="btn bg-second hover:bg-second/90 text-white w-full h-12 text-lg font-semibold mt-4">
                Login
              </button>
              <div className="text-center mt-6">
                <span className="text-lg text-main">Don't have an account? </span>
                <a className="link link-main">Sign up</a>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
