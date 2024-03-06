import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "tailwindcss/tailwind.css";

export default function ProfileSidebar() {

  // TO-DO: Subject to change depending on auth strategy
  const [userData, setUserData] = useState({ username: "", email: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getUser');
        if (response.ok) {
          const data = await response.json();
          setUserData({ username: data.username, email: data.email });
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  const { username, email } = userData;

  return (
    <>
      {/* Profile Section */}
      <NavLink
        to="/dashboard/profile"
        className="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white p-2"
      >
        <div className="rounded-full overflow-hidden mr-4 bg-gray-200 w-11 h-11 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 20 20"
            fill="none"
            className="rounded-full"
          >
            <g opacity="0.4">
              <path
                d="M5.30486 5.94565C5.30486 3.35232 7.40718 1.25 10.0005 1.25C12.5939 1.25 14.6962 3.35232 14.6962 5.94565C14.6962 7.56977 13.8716 9.00129 12.6183 9.84447C15.2566 10.8272 17.1921 13.2524 17.467 16.1618C17.4782 16.28 17.4866 16.399 17.4922 16.5186C17.5164 17.0358 17.1168 17.4747 16.5996 17.499C16.4871 17.499 16.0414 17.499 15.3774 17.499C12.1359 17.4993 3.69114 17.4998 3.40143 17.499C2.88423 17.4747 2.48461 17.0358 2.50886 16.5186C2.51447 16.399 2.52289 16.28 2.53405 16.1618C2.80892 13.2525 4.74448 10.8272 7.38271 9.84447C6.1294 9.0013 5.30486 7.56977 5.30486 5.94565Z"
                fill="#000000"
              />
            </g>
          </svg>
        </div>

        <div>
          <p className="text-sm font-semibold mb-1">{username}</p>
          <p className="text-xs text-gray-500">{email}</p>
        </div>
      </NavLink>
    </>
  );
}
