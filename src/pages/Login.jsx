import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../services/authContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500">
      <div className="bg-white shadow-lg rounded-lg p-5 w-116 h-90 overflow-hidden gap-10">
        <h2 className="text-2xl font-bold text-center text-purple-600 mb-4">
          Welcome Back!
        </h2>

        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            <label className="block text-gray-700 text-sm mb-1 font-medium">Email</label>
            <input
              type="email"
              className="input input-bordered input-2xl w-full border border-gray-300 rounded overflow-hidden"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-mb py-10 mb-2 font-large">Password</label>
            <input
              type="password"
              className="input input-bordered input-2xl w-full border border-gray-300 rounded overflow-hidden"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn-4xl text-lg text-white bg-blue-500 hover:bg-blue-600 w-full h-[45px] rounded overflow-hidden"
          >
            Login
          </button>
        </form>

        <div className="divider my-2">OR</div>

        <button
          onClick={handleGoogleLogin}
          className=" btn-4xl w-full h-[45px] bg-white hover:bg-gray-100 flex justify-center items-center gap-1 border border-gray-300 rounded overflow-hidden"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-4 h-4"
          />
          Login with Google
        </button>

        <p className="text-center text-xs text-gray-600 mt-3">
          Don't have an account?{" "}
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
