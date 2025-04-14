import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="flex items-center justify-center ">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-11/12 object-cover z-0"
      >
        <source
          src="https://ngents.com.pk/wp-content/uploads/2018/12/website-final.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 h-11/12 bg-black opacity-60" />

      {/* Form Content */}
      <div className="z-20 w-full max-w-4xl p-8 ">
        <h2 className="text-5xl great-vibes text-center mb-6 text-[#D4AF37]">
          Welcome Back!
        </h2>
        <form className="space-y-6">
          {/* Email Field  */}

          <div className="mx-auto w-9/12 flex flex-col space-x-4">
            <div className="flex flex-col w-full">
              <label className="mb-2 text-gray-200 font-light">Email</label>
              <input
                id="email"
                name="email"
                type="emial"
                placeholder="Email"
                required
                className="border border-[#D4AF37]  text-gray-300/80 font-light px-4 py-2  outline-none"
              />
            </div>
            <div className="flex flex-col w-full mt-4">
              <label className="mb-2 text-gray-200 font-light">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
                className="border border-[#D4AF37]  text-gray-300/80 font-light px-4 py-2  outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mx-auto block w-1/4 border border-[#D4AF37] text-gray-200/80 font-light py-3 transition duration-300 hover:bg-[#D4AF37] hover:text-black"
          >
            Sign In
          </button>

          {/* Redirect Text */}
          <p className="text-sm font-light text-center text-gray-300">
            Don't have a account?
            <Link to="/signup" className="text-[#D4AF37] ml-1">
              Sign Up Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
