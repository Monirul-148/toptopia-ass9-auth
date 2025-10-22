import { useAuth } from "../services/authContext";
import { useEffect } from "react";

export default function MyProfile() {
  const { user } = useAuth();

  useEffect(() => {
    document.title = "ToyTopia | My Profile";
  }, []);

  if (!user) return <div className="text-center mt-10">No user found</div>;

  return (
    <div className="container mx-auto mt-10 flex flex-col items-center">
      <img src={user.photoURL} alt={user.displayName} className="w-24 h-24 rounded-full mb-4"/>
      <h2 className="text-2xl font-bold">{user.displayName}</h2>
      <p>{user.email}</p>
    </div>
  );
}
