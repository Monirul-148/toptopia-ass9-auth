import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "ToyTopia | 404 Not Found";
  }, []);

  return (
    <div className="text-center mt-20">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-4">Page not found!</p>
      <Link to="/" className="btn btn-primary">Go Home</Link>
    </div>
  );
}
