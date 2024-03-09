import React from "react";
import { ItemType } from "../ItemType";
import { ItemListDelete } from "./ItemListDelete";
import { ItemListEdit } from "./ItemListEdit";

interface ItemProps {
  itemData: ItemType;
}

export const ItemListDetails: React.FC<ItemProps> = ({ itemData }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {itemData.item_name}
      </th>
      <td className="px-6 py-4">{itemData.current_quantity}</td>
      <td className="px-6 py-4">{itemData.monthly_quantity_usage}</td>
      <td className="px-6 py-4">
        <a
          href={itemData.item_link}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Link
        </a>
      </td>
      <td className="px-6 py-4">{itemData.teacher_comment}</td>
      <td className="px-6 py-4">
        <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          <ItemListEdit itemId={itemData.item_id} />
        </a>
      </td>
      <td className="px-6 py-4">
        <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          <ItemListDelete itemId={itemData.item_id} />
        </a>
      </td>
    </tr>
  );
};
