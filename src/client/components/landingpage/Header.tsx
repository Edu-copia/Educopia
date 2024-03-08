import React from "react";
import "tailwindcss/tailwind.css";

export default function Header() {
  return (
    <>
      {/* HEADER */}
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-6 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="" className="flex items-center">
              <img
                src="/landingpage/Educopia.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Educopia Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Educopia
              </span>
            </a>
            <div className="flex items-center lg:order-2">
              <a
                href="/login"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </a>
              <a
                href="/signup"
                className="text-white bg-primary-500 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-400 dark:hover:bg-primary-500 focus:outline-none dark:focus:ring-primary-600"
              >
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
