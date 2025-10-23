import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function ToyDetails(){
  const { id } = useParams()
  const [toy, setToy] = useState(null)

  useEffect(()=> {
    fetch('/src/data/toys.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(t => String(t.toyId) === id)
        setToy(found)
      })
      .catch(err => console.error(err))
  }, [id])

  useEffect(()=> { document.title = toy ? `ToyTopia - ${toy.toyName}` : 'ToyTopia - Toy' }, [toy])

  const handleTryNow = (e) => {
    e.preventDefault()
    Swal.fire('Success', 'Try request received. We will contact you soon.', 'success')
    e.target.reset()
  }

  if(!toy) return <div className="center">Loading toy...</div>

  return (
    <div className="container">
      <div style={{display:'flex', gap:20, alignItems:'flex-start', marginTop:20}}>
        <img src={toy.pictureURL} alt={toy.toyName} style={{width:320, height:320, objectFit:'cover', borderRadius:12}} />
        <div>
          <h2>{toy.toyName}</h2>
          <p>{toy.description}</p>
          <p className="small">Seller: {toy.sellerName} · Email: {toy.sellerEmail}</p>
          <p className="small">Rating: {toy.rating} · Available: {toy.availableQuantity}</p>
          <p className="small">Price: ${toy.price}</p>

          <form onSubmit={handleTryNow} style={{marginTop:12}}>
            <input name="name" placeholder="Your name" required style={{padding:8, width:'100%', marginBottom:8}} />
            <input name="email" type="email" placeholder="Your email" required style={{padding:8, width:'100%', marginBottom:8}} />
            <button type="submit" className="btn">Try Now</button>
          </form>
        </div>
      </div>
    </div>
  )
}
