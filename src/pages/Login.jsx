import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../services/authContext";
import { EyeIcon, EyeOffIcon } from "lucide-react"; // 👁️ eye icons

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👁️ state for toggling password
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      alert("Login failed! Check email & password.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      alert("Google login failed!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="p-10 w-96">
        <h2 className="text-2xl font-bold text-center text-purple-600 mb-6">
          Welcome Back!
        </h2>

        {/* 🔹 Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-gray-700 text-sm mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              className="input input-bordered w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password with eye toggle */}
          <div className="relative">
            <label className="block text-gray-700 text-sm mb-1 font-medium">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="input input-bordered w-full border border-gray-300 rounded px-3 py-2 pr-10"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="absolute right-3 top-9 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
            </span>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full h-[45px] bg-blue-500 text-white rounded hover:bg-blue-600 transition font-medium"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="divider my-4">OR</div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full h-[45px] bg-white hover:bg-gray-100 border border-gray-300 rounded flex justify-center items-center gap-2"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-gray-700 font-medium">Login with Google</span>
        </button>

        {/* Register link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <span
            className="text-blue-600 font-medium cursor-pointer hover:underline"
            onClick={() => navigate("/register")}
          >
            Register Now
          </span>
        </p>
      </div>
    </div>
  );
}
