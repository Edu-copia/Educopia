import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
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
import WishlistDetails from './client/pages/wishlist/wishlist-details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/dashboard/inventory",
    element: <Inventory />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/wishlist-details",
    element: <WishlistDetails />,
  },
  {
    path: "/dashboard/profile",
    element: <Profile />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
