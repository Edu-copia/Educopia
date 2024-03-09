import React from "react";
import { ItemType } from "../ItemType";

interface ItemProps {
  itemData: ItemType;
}

export const PriorityItemListDetails: React.FC<ItemProps> = ({ itemData }) => {
  return (
    <div>
      <div>{itemData.item_name}</div>
      <div>{itemData.current_quantity}</div>
      <div>{itemData.monthly_quantity_usage}</div>
    </div>
  );
};