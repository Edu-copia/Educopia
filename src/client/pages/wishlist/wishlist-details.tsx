import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

export default function WishlistDetails() {
  const location = useLocation();
  //change this to: const itemId = location.state.item;
  const itemId = 7;
  const [item, setItem] = useState(null)

 function handleSubmit(e: React.FormEvent){
    e.preventDefault()

    const itemFullfilled = {

    }
    fetch('', {
      method: "POST",
      body: JSON.stringify(''),
      headers: {"Content-Type": "application/json"},
    })
    .then(res => res.json())
    .then(res => {
      
    })
    .catch(e => console.log('Error submitting fulfillment: ', e))
  }

  useEffect(() => {
    fetch(`/api/wishlist/${itemId}`)
      .then(res => res.json())
      .then(res => {
        console.log(res[0])
        setItem(res[0]);
      })
      .catch(e => console.log('error retrieving item: ', e))
  },[])

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <Sidebar />
      </div>
      <h1 className='text-left pl-8 pt-8 text-3xl font-extrabold'>Wishlist Details</h1>
      <section className='flex justify-center'>

      </section>
    </div>
  )
}
