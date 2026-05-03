import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setMsg("⚠️ Please fill all fields");
      return;
    }

    setMsg("✅ Account Created Successfully");

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900">
      <div className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-96">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Create Account 🚀
        </h2>
        <p className="text-gray-500 text-center mb-6 text-sm">
          Sign up to get started
        </p>

        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />

          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-lg font-semibold">
            Sign Up
          </button>
        </form>

        {msg && (
          <p className="text-center mt-4 text-green-600 text-sm font-medium">
            {msg}
          </p>
        )}

        <div className="flex items-center gap-2 my-5">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        <button
          onClick={() => navigate("/")}
          className="w-full border border-indigo-500 text-indigo-600 p-3 rounded-lg font-semibold"
        >
          Already have an account? Login
        </button>
      </div>
    </div>
  );
}

export default Signup;
