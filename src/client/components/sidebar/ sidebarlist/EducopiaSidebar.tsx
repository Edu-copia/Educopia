import React from "react";
import { NavLink } from "react-router-dom";
import "tailwindcss/tailwind.css";

export default function EducopiaLogo() {
  return (
    <div className="py-5">
      <a href="/dashboard" className="flex items-center ps-10 mb-5">
        <img
          src="/landingpage/Educopia.svg"
          className="h-10 me-5 sm:h-10"
          alt="Educopia Logo"
          width={40}
          height={40}
        />
        <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">
          Educopia
        </span>
      </a>
    </div>
  );
}
