import React from "react";
import { FulfillmentsType } from "../FulfillmentsType";

interface FulfillmentsProps {
  fulfillmentsData: FulfillmentsType;
}

export const FulfillmentsListDetails: React.FC<FulfillmentsProps> = ({ fulfillmentsData }) => {
  return (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{fulfillmentsData.item_id}</th>
        <td className="px-6 py-4">{fulfillmentsData.quantity_purchased}</td>
        <td className="px-6 py-4">{fulfillmentsData.parent_email}</td>
        <td className="px-6 py-4">{fulfillmentsData.date_purchased}</td>
      </tr>
  );
};