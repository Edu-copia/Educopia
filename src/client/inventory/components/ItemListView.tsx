import React, { useEffect, useState } from "react";
import { Item } from "./ItemListDetails";
import { ItemType } from "./ItemType";

export const ItemListView: React.FC = () => {
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
      {items.map((item) => (
        <Item key={item.item_id} itemData={item} />
      ))}
    </div>
  );
};
