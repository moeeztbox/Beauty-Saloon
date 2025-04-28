import { Link } from "react-router-dom";

function SignUp() {
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
          Create an Account
        </h2>
        <form className="space-y-6">
          {/* Name & City Fields */}
          <div className="flex space-x-4">
            <div className="flex flex-col w-1/2">
              <label className="mb-1 text-gray-200 font-light">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="border border-[#D4AF37]  text-gray-300/80 font-light px-4 py-2  outline-none"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="mb-1 text-gray-200 font-light">City</label>
              <input
                id="city"
                name="city"
                type="text"
                placeholder="Your City"
                required
                className="border border-[#D4AF37]  text-gray-300/80 font-light px-4 py-2  outline-none"
              />
            </div>
          </div>

          {/* Email Field  */}

          <div className="flex space-x-4">
            <div className="flex flex-col w-1/2">
              <label className="mb-1 text-gray-200 font-light">Email</label>
              <input
                id="email"
                name="email"
                type="emial"
                placeholder="Email"
                required
                className="border border-[#D4AF37]  text-gray-300/80 font-light px-4 py-2  outline-none"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="mb-1 text-gray-200 font-light">Password</label>
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
            Sign Up
          </button>

          {/* Redirect Text */}
          <p className="text-sm font-light text-center text-gray-300">
            Already have an account?
            <Link to="/signin" className="text-[#D4AF37] ml-1">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
