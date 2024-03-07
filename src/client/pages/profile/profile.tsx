import React from "react";
import "tailwindcss/tailwind.css";

import Sidebar from "../../components/Sidebar";

export default function Profile() {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <Sidebar />
      </div>
      {/* PUT YOUR CONTENT IN THIS DIV TO LOAD CORRECTLY WITH THE SIDEBAR */}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">This is the profile page</div>
    </div>
  );
}
