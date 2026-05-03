import { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setMsg("Please fill all fields");
      return;
    }

    // Dummy signup
    setMsg("✅ Account Created Successfully");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900">
      <div className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-96">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Create Account 🚀
        </h2>
        <p className="text-gray-500 text-center mb-6 text-sm">
          Sign up to get started
        </p>

        {/* Form */}
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          {/* Name */}
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Message */}
        {msg && (
          <p className="text-green-600 text-center mt-4 text-sm font-medium">
            {msg}
          </p>
        )}

        {/* Divider */}
        <div className="flex items-center gap-2 my-5">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {/* Back to Login */}
        <button className="w-full border border-indigo-500 text-indigo-600 p-3 rounded-lg font-semibold hover:bg-indigo-50 transition">
          Already have an account? Login
        </button>

        {/* Footer */}
        <p className="text-center text-gray-500 text-xs mt-6">
          © 2026 Your App
        </p>
      </div>
    </div>
  );
}

export default Signup;
