import React from "react";
import "tailwindcss/tailwind.css";

import EducopiaLogo from "./sidebar/ sidebarlist/EducopiaSidebar";
import DashboardSideBar from "./sidebar/ sidebarlist/DashboardSidebar";
import WishlistSideBar from "./sidebar/ sidebarlist/WishlistSidebar";
import InventorySideBar from "./sidebar/ sidebarlist/InventorySidebar";

import ProfileSidebar from "./sidebar/ sidebarlist/ProfileSidebar";
import SignoutSideBar from "./sidebar/ sidebarlist/SignoutSidebar";

export default function Sidebar() {
  return (
    <>
      {/* Main HTML tag where Sidebar component is */}
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        {/* Top Section of Sidebar component */}
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <EducopiaLogo />

          <ul className="space-y-2">
            <li>
              <DashboardSideBar />
            </li>

            <li>
              <WishlistSideBar />
            </li>

            <li>
              <InventorySideBar />
            </li>
          </ul>

          {/* Grey Line Separator */}
          <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700"></ul>

          {/* Profile Section */}
          <ProfileSidebar />

          {/* Signout Button */}
          <div className="hidden absolute bottom-0 left-0 right-1 justify-center p-4 space-x-2 w-full lg:flex bg-white dark:bg-gray-800 z-20 border-r dark:border-gray-700">
            <SignoutSideBar />
          </div>
        </div>
      </aside>
    </>
  );
}
