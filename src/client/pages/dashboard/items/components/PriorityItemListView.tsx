import React, { useEffect, useState } from "react";
import { PriorityItemListDetails } from "./PriorityItemListDetails";
import { ItemType } from "../ItemType";

export const PriorityItemListView: React.FC = () => {
  const [items, setItems] = useState<ItemType[]>([]);
  useEffect(() => {
    console.log("Fetching data from the database...");
    fetch("http://localhost:3000/item/1")
      .then((response) => response.json())
      .then((data: ItemType[]) => {
        console.log("Data fetched successfully:", data);
        setItems(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {items
      .slice() // Create a shallow copy to avoid mutating the original array
      .sort((a, b) => (a.current_quantity / a.monthly_quantity_usage) - (b.current_quantity / b.monthly_quantity_usage))
      .map((item) => (
        <PriorityItemListDetails key={item.item_id} itemData={item} />
      ))}
    </div>
  );
};