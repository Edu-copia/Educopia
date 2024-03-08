import React from "react";
import { NavLink } from "react-router-dom";
import "tailwindcss/tailwind.css";

export default function WishlistSideBar() {
  const pathname = window.location.pathname;
  const isWishlistPage = pathname === "/dashboard/wishlist";

  return (
    <>
      <NavLink
        to="/dashboard/wishlist"
        className={`${
          isWishlistPage
            ? "flex items-center p-2 text-base font-semibold text-Educopia bg-gray-100 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        }`}
      >
        <svg
          aria-hidden="true"
          className={`${isWishlistPage ? "text-Educopia" : ""}`}
          fill="currentColor"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity={isWishlistPage ? "1" : "0.4"}>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 4.5C17 3.12033 18.1203 2 19.5 2C20.8797 2 22 3.12033 22 4.5C22 5.87967 20.8797 7 19.5 7C18.1203 7 17 5.87967 17 4.5ZM13.33 14.7593L16.22 11.0303L16.18 11.0503C16.34 10.8303 16.37 10.5503 16.26 10.3003C16.151 10.0503 15.91 9.8803 15.651 9.8603C15.38 9.8303 15.111 9.9503 14.95 10.1703L12.531 13.3003L9.76 11.1203C9.59 10.9903 9.39 10.9393 9.19 10.9603C8.991 10.9903 8.811 11.0993 8.69 11.2593L5.731 15.1103L5.67 15.2003C5.5 15.5193 5.58 15.9293 5.88 16.1503C6.02 16.2403 6.17 16.3003 6.34 16.3003C6.571 16.3103 6.79 16.1893 6.93 16.0003L9.44 12.7693L12.29 14.9103L12.38 14.9693C12.7 15.1393 13.1 15.0603 13.33 14.7593ZM15.45 3.7803C15.41 4.0303 15.39 4.2803 15.39 4.5303C15.39 6.7803 17.21 8.5993 19.45 8.5993C19.7 8.5993 19.94 8.5703 20.19 8.5303V16.5993C20.19 19.9903 18.19 22.0003 14.79 22.0003H7.401C4 22.0003 2 19.9903 2 16.5993V9.2003C2 5.8003 4 3.7803 7.401 3.7803H15.45Z"
              fill={isWishlistPage ? "#605bff" : "#000000"}
            />
          </g>
        </svg>
        <span className="ml-3">Wishlist</span>
      </NavLink>
    </>
  );
}
