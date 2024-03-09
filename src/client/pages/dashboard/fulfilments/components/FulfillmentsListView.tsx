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
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Item Name
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity Purchased
            </th>
            <th scope="col" className="px-6 py-3">
              Email Address
            </th>
            <th scope="col" className="px-6 py-3">
              Date Puchased
            </th>
          </tr>
        </thead>
        <tbody>
          {items
            .slice()
            .sort((a, b) => b.fulfillment_id - a.fulfillment_id)
            .map((fulfillment) => (
              <FulfillmentsListDetails
                key={fulfillment.fulfillment_id}
                fulfillmentsData={fulfillment}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};
