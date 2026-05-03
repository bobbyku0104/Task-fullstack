// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [msg, setMsg] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setMsg("⚠️ Please fill all fields");
//       return;
//     }

//     if (email === "admin@gmail.com" && password === "1234") {
//       setMsg("✅ Login Successful");

//       setTimeout(() => {
//         alert("Redirecting to Dashboard...");
//       }, 1000);
//     } else {
//       setMsg("❌ Invalid Credentials");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900">
//       <div className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-96">
//         <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
//           Welcome Back 👋
//         </h2>
//         <p className="text-gray-500 text-center mb-6 text-sm">
//           Login to your account
//         </p>

//         <form onSubmit={handleLogin} className="flex flex-col gap-4">
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
//           />

//           <input
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
//           />

//           <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-lg font-semibold">
//             Login
//           </button>
//         </form>

//         {msg && <p className="text-center mt-4 text-sm font-medium">{msg}</p>}

//         <div className="flex items-center gap-2 my-5">
//           <div className="flex-1 h-[1px] bg-gray-300"></div>
//           <span className="text-gray-400 text-sm">OR</span>
//           <div className="flex-1 h-[1px] bg-gray-300"></div>
//         </div>

//         <button
//           onClick={() => navigate("/signup")}
//           className="w-full border border-indigo-500 text-indigo-600 p-3 rounded-lg font-semibold"
//         >
//           Create New Account
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // validation
    if (!email || !password) {
      setMsg("⚠️ Please fill all fields");
      return;
    }

    // dummy login check
    if (email === "admin@gmail.com" && password === "1234") {
      setMsg("✅ Login Successful");

      // optional token save (future use)
      localStorage.setItem("token", "dummy-token");

      // redirect to home
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } else {
      setMsg("❌ Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900">
      <div className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-96">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Welcome Back 👋
        </h2>

        <p className="text-gray-500 text-center mb-6 text-sm">
          Login to your account
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
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

          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-lg font-semibold hover:scale-105 transition">
            Login
          </button>
        </form>

        {/* Message */}
        {msg && (
          <p
            className={`text-center mt-4 text-sm font-medium ${
              msg.includes("Successful") ? "text-green-600" : "text-red-500"
            }`}
          >
            {msg}
          </p>
        )}

        {/* Divider */}
        <div className="flex items-center gap-2 my-5">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {/* Signup Button */}
        <button
          onClick={() => navigate("/signup")}
          className="w-full border border-indigo-500 text-indigo-600 p-3 rounded-lg font-semibold hover:bg-indigo-50 transition"
        >
          Create New Account
        </button>

        {/* Footer */}
        <p className="text-center text-gray-500 text-xs mt-6">
          © 2026 Your App
        </p>
      </div>
    </div>
  );
}

export default Login;