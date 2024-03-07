import React from "react";
import "tailwindcss/tailwind.css";

export default function SecondInfoSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 lg:text-left">
        <div className="grid gap-4 mt-8">
          <img
            className="w-full rounded-lg shadow-xl"
            src="/landingPage/Wishlist Details.png"
            alt="incidents"
          />
        </div>
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 mt-10 text-4xl font-extrabold text-gray-900 dark:text-white">
            Let Parents Fullfill Your Wishlists
          </h2>
          <p className="mb-4">
            Parents can view wishlists and details before making a donation
          </p>
          <p>
            Our application enables parents to assist with teachers' school supply needs. Track the most needed items and thank parents that donate!
          </p>
        </div>
      </div>
    </section>
  );
}
