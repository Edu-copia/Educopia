import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

export default function wishlistDetails() {

  const location = useLocation();
  const itemId = location.state.item;

  useEffect(() => {
    fetch('localhost:3000/api/IN')
  }, )

  return (
    <div>
      <section id='details'>
        <h1>Details</h1>
      </section>
      <section id='form'>
        <h1>Form</h1>
      </section>
    </div>
  )
}
