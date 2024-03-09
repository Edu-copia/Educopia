import React, { useEffect, useState } from "react";
import { ItemType } from "../ItemType";

interface ItemListEditProps {
  itemId: number;
}

export const ItemListEdit: React.FC<ItemListEditProps> = ({ itemId }) => {
  const [itemForm, setItemForm] = useState<Partial<ItemType>>({});
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setItemForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    fetch(`http://localhost:3000/item/${itemId}`, {
      method: 'PATCH',
      body: JSON.stringify(itemForm),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(data => {
        setItemForm({});
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    // Fetch existing item data and set it in the itemForm state
    const fetchItemData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/item/${itemId}`);
        const data = await response.json();
        setItemForm(data);
      } catch (error) {
        console.error('Error fetching item data:', error);
      }
    };

    fetchItemData();
  }, [itemId]);

  return (
    <div>
      <button onClick={() => setIsFormVisible(true)}>Update</button>
      {isFormVisible && (
      <form onSubmit={handleSubmit}>
        <label>User ID:<input type="number" name="user_id" value={itemForm.user_id || ''} onChange={handleChange} /></label>
        <label>Item Name:<input type="text" name="item_name" value={itemForm.item_name || ''} onChange={handleChange} /></label>
        <label>Current Quantity:<input type="number" name="current_quantity" value={itemForm.current_quantity || ''} onChange={handleChange} /></label>
        <label>Monthly Quantity Usage:<input type="number" name="monthly_quantity_usage" value={itemForm.monthly_quantity_usage || ''} onChange={handleChange} /></label>
        <label>Item Link:<input type="text" name="item_link" value={itemForm.item_link || ''} onChange={handleChange} /></label>
        <label>Teacher Comment:<input type="text" name="teacher_comment" value={itemForm.teacher_comment || ''} onChange={handleChange} /></label>
        <button type="submit">Update</button>
      </form>
      )}
    </div>
  );
};
