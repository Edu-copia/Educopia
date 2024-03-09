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
      <div className="w-full text-center">
        <div className="text-4xl font-bold my-16">Dashboard</div>
      <div className="mb-24">
        <FulfillmentsList/>
      </div>
      <div className="">
        <PriorityItemList/>
      </div>
     </div>
    </div>
  );
}
