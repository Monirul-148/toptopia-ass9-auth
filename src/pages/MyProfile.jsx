import React, { useEffect } from "react";
import { useAuth } from "../services/authContext";

export default function MyProfile() {
  const { user } = useAuth();

  useEffect(() => {
    document.title = "ToyTopia | My Profile";
  }, []);

  if (!user) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-10 max-w-md bg-white shadow-md rounded-lg p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">My Profile</h2>

      <div className="flex flex-col items-center gap-4">
        {user.photoURL && (
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="w-24 h-24 rounded-full"
          />
        )}
        <p className="text-lg font-semibold">{user.displayName}</p>
        <p className="text-gray-600">{user.email}</p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Account Info</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Email Verified: {user.emailVerified ? "Yes" : "No"}</li>
          <li>UID: {user.uid}</li>
        </ul>
      </div>
    </div>
  );
}
