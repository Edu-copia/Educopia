import React from "react";
import "tailwindcss/tailwind.css";
import { FulfillmentsList } from "./fulfilments/FulfillmentsList";
import { PriorityItemList } from "./items/PriorityItemList";
import Sidebar from "../../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <Sidebar />
      </div>
      <FulfillmentsList/>
      <PriorityItemList/>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">This is the dashboard </div>
    </div>
  );
}
