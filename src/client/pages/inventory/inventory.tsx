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
      <div className="w-full text-center">
        <div className="text-4xl font-bold my-16">Inventory</div>
        <div className="w-full text-center align-center"><ItemList/></div>
      </div>
    </div>
  );
}
