import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../services/authContext";
import Swal from "sweetalert2";
import { Eye, EyeOff } from "lucide-react";

export default function Register() {
  const { register, loginWithGoogle } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || password.length < 6) {
      return Swal.fire(
        "Error",
        "Password must have uppercase, lowercase letters and at least 6 characters",
        "error"
      );
    }
    try {
      await register(email, password, name, photoURL);
      Swal.fire("Success!", "Registered successfully", "success");
      navigate("/");
    } catch (err) {
      Swal.fire("Error!", err.message, "error");
    }
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      Swal.fire("Success!", "Logged in with Google", "success");
      navigate("/");
    } catch (err) {
      Swal.fire("Error!", err.message, "error");
    }
  };

  document.title = "ToyTopia | Register";

  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="bg-white p-8  w-96">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 text-sm mb-1 font-medium">Name</label>
            <input
              type="text"
              className="input input-bordered w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 text-sm mb-1 font-medium">Email</label>
            <input
              type="email"
              className="input input-bordered w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-gray-700 text-sm mb-1 font-medium">Photo URL</label>
            <input
              type="text"
              className="input input-bordered w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter photo URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>

          {/* Password with Eye Icon */}
          <div className="relative">
            <label className="block text-gray-700 text-sm mb-1 font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="input input-bordered w-full border border-gray-300 rounded px-3 py-2 pr-10"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/*  Toggle Icon */}
            <span
              className="absolute right-3 top-9 cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          {/* 🟦 Register Button */}
          <button
            type="submit"
            className="w-full h-[45px] bg-blue-500 text-white rounded hover:bg-blue-600 transition font-medium"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="divider my-4">OR</div>

        {/*  Google Register Button */}
        <button
          onClick={handleGoogle}
          className="w-full h-[45px] bg-white hover:bg-gray-100 border border-gray-300 rounded flex justify-center items-center gap-2 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google Logo"
            className="w-5 h-5"
          />
          <span className="text-gray-700 font-medium">Register with Google</span>
        </button>

        {/* Login link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

