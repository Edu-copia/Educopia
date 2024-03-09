import React from "react";
import { ItemType } from "./ItemType";
import { ItemListDelete } from "./ItemListDelete";
import { ItemListEdit } from "./ItemListEdit";

interface ItemProps {
  itemData: ItemType;
}

export const Item: React.FC<ItemProps> = ({ itemData }) => {
  return (
    <div>
      <div>{itemData.item_name}</div>
      <div>{itemData.current_quantity}</div>
      <div>{itemData.monthly_quantity_usage}</div>
      <a href={itemData.item_link} target="_blank">Link</a>
      <div>{itemData.teacher_comment}</div>
      <ItemListEdit itemId={itemData.item_id}/>
      <ItemListDelete itemId={itemData.item_id}/>
    </div>
  );
};
