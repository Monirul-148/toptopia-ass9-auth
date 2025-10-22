import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import toysData from "../data/toys.json";
import Swal from "sweetalert2";

export default function ToyDetails() {
  const { toyId } = useParams();
  const [toy, setToy] = useState(null);

  useEffect(() => {
    const found = toysData.find(t => t.toyId === parseInt(toyId));
    setToy(found);
    document.title = found ? `ToyTopia | ${found.toyName}` : "ToyTopia | Toy Details";
  }, [toyId]);

  const handleTry = (e) => {
    e.preventDefault();
    Swal.fire("Success!", "Form submitted successfully!", "success");
    e.target.reset();
  };

  if (!toy) return <div className="text-center mt-10">Toy not found</div>;

  return (
    <div className="container mx-auto mt-6 grid md:grid-cols-2 gap-6">
      <img src={toy.pictureURL} alt={toy.toyName} className="w-full rounded-lg"/>
      <div>
        <h2 className="text-3xl font-bold">{toy.toyName}</h2>
        <p className="my-2">{toy.description}</p>
        <p>Seller: {toy.sellerName} ({toy.sellerEmail})</p>
        <p>Rating: {toy.rating} ⭐</p>
        <p>Available Quantity: {toy.availableQuantity}</p>
        <p>Price: ${toy.price}</p>

        <form className="mt-4" onSubmit={handleTry}>
          <h3 className="text-xl font-semibold mb-2">Try Now</h3>
          <input type="text" name="name" placeholder="Name" className="input input-bordered w-full mb-2"/>
          <input type="email" name="email" placeholder="Email" className="input input-bordered w-full mb-2"/>
          <button type="submit" className="btn btn-primary mt-2">Try Now</button>
        </form>
      </div>
    </div>
  );
}
