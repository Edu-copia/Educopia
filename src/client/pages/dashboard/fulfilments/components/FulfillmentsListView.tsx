import React, { useEffect, useState } from "react";
import { FulfillmentsListDetails } from "./FulfillmentsListDetails";
import { FulfillmentsType } from "../FulfillmentsType";

export const FulfillmentsListView: React.FC = () => {
  const [items, setItems] = useState<FulfillmentsType[]>([]);
  useEffect(() => {
    console.log("Fetching data from the database...");
    fetch("http://localhost:3000/fulfillments/1")
      .then((response) => response.json())
      .then((data: FulfillmentsType[]) => {
        console.log("Data fetched successfully:", data);
        setItems(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  
  return (
    <div>
      {items.slice()
      .sort((a, b) => b.fulfillment_id - a.fulfillment_id)
      .map((fulfillment) => (
      <FulfillmentsListDetails key={fulfillment.fulfillment_id} fulfillmentsData={fulfillment} />
      ))}
    </div>
  );
};