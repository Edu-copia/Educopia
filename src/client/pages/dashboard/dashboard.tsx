import React from "react";
import "tailwindcss/tailwind.css";

import Sidebar from "../../components/Sidebar";

export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <div>This is the dashboard</div>
    </>
  );
}