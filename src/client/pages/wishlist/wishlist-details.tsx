import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

export default function WishlistDetails() {
  const location = useLocation();
  //change this to: const itemId = location.state.item;
  const itemId = 7;
  const [item, setItem] = useState(null);
  const [itemFullfilled, setItemFullfilled] = useState({
      item_id: null,
      parent_name: '',
      parent_email: '',
      quantity_purchased: 0,
      date_purchased: new Date()
  })

 //Need to add 'decrement items quantity' route as well.
 function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    if(itemFullfilled.item_id !== null && itemFullfilled.parent_name !== null && itemFullfilled.quantity_purchased !== null){
      fetch('/api/wishlist/', {
        method: "POST",
        body: JSON.stringify(itemFullfilled),
        headers: {"Content-Type": "application/json"},
      })
      .then(res => res.json())
      .then(res => {
        
      })
      .catch(e => console.log('Error submitting fulfillment: ', e))
    }
    else{
      alert('Please fill out the entire form!')
    }
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
        {item.item_id}
      </section>
    </div>
  )
}
