import React, { useState } from "react";
import { ItemType } from "../ItemType";

export const ItemListAdd: React.FC = () => {
  const [itemForm, setItemForm] = useState<Partial<ItemType>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setItemForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(itemForm);
  };
  

  const handleSubmit = (event: any) => {
    event.preventDefault();

    fetch('http://localhost:3000/item/', {
    method: 'POST',
    body: JSON.stringify(itemForm),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(data => {
        setItemForm({})
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  return (
    <div>
<form onSubmit={handleSubmit}>
      <label>User ID:<input type="number" name="user_id" value={itemForm.user_id} onChange={handleChange}/></label>
      <label>Item Name:<input type="text" name="item_name" value={itemForm.item_name} onChange={handleChange}/></label>
      <label>Current Quantity:<input type="number" name="current_quantity" value={itemForm.current_quantity} onChange={handleChange}/></label>
      <label>Monthly Quantity Usage:<input type="number" name="monthly_quantity_usage" value={itemForm.monthly_quantity_usage} onChange={handleChange}/></label>
      <label>Item Link:<input type="text" name="item_link" value={itemForm.item_link} onChange={handleChange}/></label>
      <label>Teacher Comment:<input type="text" name="teacher_comment" value={itemForm.teacher_comment} onChange={handleChange}/></label>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};
