import React from "react";
import "tailwindcss/tailwind.css";

export default function Footer() {
  return (
    <>
      <footer className="p-4 sm:p-6 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-between">
            <div className="md:mb-0 mb-8">
              <a href="/" className="flex items-center">
                <img
                  src="/landingpage/Educopia.svg"
                  className="h-10 mr-6 sm:h-10"
                  alt="Educopia Logo"
                />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  Educopia
                </span>
              </a>
            </div>
            <div className="grid gap-8 sm:gap-6 sm:grid-cols-3 md:grid-cols-2">
              <div className="md:col-span-2">
                {" "}
                {/* Adjust column span for wider desktop view */}
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/Edu-copia/Educopia"
                      className="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="/" className="hover:underline">
                Educopia™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:mt-0">
              {/* Github Logo */}
              <a
                href="https://github.com/Edu-copia/Educopia"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <img
                  src="/landingpage/github.svg"
                  alt="GitHub Logo"
                  height={25}
                  width={25}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
