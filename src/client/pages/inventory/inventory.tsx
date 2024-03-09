import React from "react";
import "tailwindcss/tailwind.css";
import { ItemList } from "./itemList/ItemList";

import Sidebar from "../../components/Sidebar";

export default function Inventory() {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <Sidebar />
      </div>
      <ItemList/>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">This is the Inventory Page </div>
    </div>
  );
}
