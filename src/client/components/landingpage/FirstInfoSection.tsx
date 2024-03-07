import React from "react";
import "tailwindcss/tailwind.css";

export default function FirstInfoSection() {
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6 lg:text-left">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
                Add School Supplies Inventory
              </h2>
              <p className="mb-4">
                See all your school supplies in a table view on the dashboard
              </p>
              <p>
                Check your inventory directly from the dashboard ensuring availability of your supplies
              </p>
            </div>
            <div className="grid gap-4 mt-8">
              <img
                className="w-full rounded-lg shadow-xl"
                src='/landingPage/Inventory.png'
                alt="dashboard"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
