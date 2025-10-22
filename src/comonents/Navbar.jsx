import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../services/authContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div className="navbar bg-white shadow-lg mx-auto">
      {/* Navbar Start */}
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/my-profile">My Profile</NavLink>
            </li>
          </ul>
        </div>
        <h1
          className="text-3xl font-bold cursor-pointer"
          onClick={() => navigate("/")}>
          ToyTopia
        </h1>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "underline" : "")}>
            Home
          </NavLink>
          <NavLink
            to="/my-profile"
            className={({ isActive }) => (isActive ? "underline" : "")}>
            My Profile
          </NavLink>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end ">
        {user ? (
          <div className="flex items-center gap-2">
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt="User"
                className="w-8 h-8 rounded-full"
                title={user.displayName}
              />
            )}
            <button onClick={handleLogout} className="btn btn-sm btn-outline">
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="w-32 h-10 bg-blue-500 hover:bg-blue-700 text-white rounded-lg">
            Login
          </button>
        )}
      </div>
    </div>
  );
}
