import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../services/authContext";
import Swal from "sweetalert2";

export default function Login() {
  const { login, loginWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      Swal.fire("Success!", "Logged in successfully", "success");
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

  document.title = "ToyTopia | Login";

  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg p-6 rounded-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input type="email" placeholder="Email" className="input input-bordered w-full mb-2" value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" className="input input-bordered w-full mb-2" value={password} onChange={e => setPassword(e.target.value)}/>
        <button type="submit" className="btn btn-primary w-full">Login</button>
        <button type="button" onClick={handleGoogle} className="btn btn-outline w-full mt-2">Login with Google</button>
        <p className="mt-2 text-sm">Don't have an account? <Link to="/register" className="text-blue-500">Register</Link></p>
      </form>
    </div>
  );
}
