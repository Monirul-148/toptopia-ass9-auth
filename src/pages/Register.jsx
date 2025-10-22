import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../services/authContext";
import Swal from "sweetalert2";

export default function Register() {
  const { register, loginWithGoogle } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      password.length < 6
    ) {
      return Swal.fire(
        "Error",
        "Password must have uppercase, lowercase letters and min 6 chars",
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
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-6 rounded-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Photo URL"
          className="input input-bordered w-full mb-2"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary w-full">
          Register
        </button>
        <button
          type="button"
          onClick={handleGoogle}
          className="btn btn-outline w-full mt-2"
        >
          Register with Google
        </button>
        <p className="mt-2 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
