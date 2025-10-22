import React from 'react'
import { Link } from 'react-router-dom'

export default function ToyCard({ toy }){
  return (
    <div className="card">
      <img src={toy.pictureURL} alt={toy.toyName} style={{width:'100%', height:160, objectFit:'cover', borderRadius:8}}/>
      <h4 style={{marginTop:8}}>{toy.toyName}</h4>
      <p className="small">Rating: {toy.rating} · Qty: {toy.availableQuantity}</p>
      <p className="small">Price: ${toy.price}</p>
      <Link to={`/toy/${toy.toyId}`} className="btn" style={{marginTop:8}}>View More</Link>
    </div>
  )
}
