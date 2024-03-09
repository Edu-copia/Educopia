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
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Item Name
            </th>
            <th scope="col" className="px-6 py-3">
              Current Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Monthly Quantity Usage
            </th>
          </tr>
        </thead>
        <tbody>
          {items
            .slice()
            .sort((a, b) => a.current_quantity / a.monthly_quantity_usage -
            b.current_quantity / b.monthly_quantity_usage,)
            .map((item) => (
              <PriorityItemListDetails
                key={item.item_id}
                itemData={item}
              />
            ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div>
      {items
        .slice()
        .sort(
          (a, b) =>
            a.current_quantity / a.monthly_quantity_usage -
            b.current_quantity / b.monthly_quantity_usage,
        )
        .map((item) => (
          <PriorityItemListDetails key={item.item_id} itemData={item} />
        ))}
    </div>
  );
};
