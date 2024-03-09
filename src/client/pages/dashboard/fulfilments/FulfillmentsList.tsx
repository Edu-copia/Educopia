import React from "react";
import { FulfillmentsListView } from "./components/FulfillmentsListView";
import { FulfillmentsListAdd } from "./components/FulfillmentsListAdd";

export const FulfillmentsList: React.FC = () => {
  return (
    <div>
      <FulfillmentsListView/>
      {/* <FulfillmentsListAdd/> */}
    </div>
  );
};