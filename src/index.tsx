import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import "tailwindcss/tailwind.css";

import LandingPage from "./client/pages/landingpage/landingpage";
import Dashboard from "./client/pages/dashboard/dashboard";
import Inventory from "./client/pages/inventory/inventory";
import Wishlist from "./client/pages/wishlist/wishlist";
import Profile from "./client/pages/profile/profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/inventory",
    element: <Inventory />,
  },
  {
    path: "/dashboard/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/dashboard/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterProvider router={router} />
    </BrowserRouter>
  </React.StrictMode>
);
