import React from "react";
import { FulfillmentsType } from "../FulfillmentsType";

interface FulfillmentsProps {
  fulfillmentsData: FulfillmentsType;
}

export const FulfillmentsListDetails: React.FC<FulfillmentsProps> = ({ fulfillmentsData }) => {
  return (
    <div>
      <div>{fulfillmentsData.item_id}</div>
      <div>{fulfillmentsData.quantity_purchased}</div>
      <div>{fulfillmentsData.parent_email}</div>
      <div>{fulfillmentsData.data_purchased}</div>
    </div>
  );
};