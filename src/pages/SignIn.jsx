import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className=" mt-8 flex items-center justify-center min-h-screen bg-gray-900 py-6 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://ngents.com.pk/wp-content/uploads/2018/12/website-final.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Form Content */}
      <div className=" w-full max-w-2xl p-10 rounded-2xl border border-gray-500 backdrop-blur-md z-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-pink-400">
          Welcome Back!
        </h2>
        <form>
          <div className="flex flex-col space-y-6">
            {/* Email Field */}
            <div className="flex flex-col w-full">
              <label htmlFor="email" className="mb-2 font-medium text-gray-200">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
                className="border border-gray-500 bg-transparent text-white rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col w-full">
              <label
                htmlFor="password"
                className="mb-2 font-medium text-gray-200"
              >
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  className="border border-gray-500 bg-transparent text-white rounded-lg px-5 py-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 text-gray-400 hover:text-pink-400 transition"
                >
                  {showPassword ? <FiEyeOff size={22} /> : <FiEye size={22} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 text-lg"
            >
              Sign In
            </button>

            {/* Redirect Text */}
            <p className="text-sm text-gray-300 text-center">
              Don't have a account?{" "}
              <Link to="/signup" className="text-pink-400 hover:underline ml-1">
                Sign Up Now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
