import { useEffect } from "react";

export default function SellerDashboard() {
  useEffect(() => {
    document.title = "ToyTopia | Seller Dashboard";
  }, []);

  return (
    <div className="bg-red-500 container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Seller Dashboard</h2>
      <p>Here sellers can manage their toys and view orders (dummy page for assignment).</p>
    </div>
  );
}
