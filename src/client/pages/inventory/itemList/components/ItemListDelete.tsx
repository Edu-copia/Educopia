import React from "react";

interface ItemListDeleteProps {
    itemId: number;
  }

export const ItemListDelete: React.FC<ItemListDeleteProps> = ({ itemId }) => {    
    const deleteExistingItem = async () => {
        const res = await fetch(`http://localhost:3000/item/${itemId}`, {
          method: 'DELETE',
        })
        const data = await res.json();
      }

  return (
    <div>
        <button onClick={deleteExistingItem}>Delete</button>
    </div>
  );
};
