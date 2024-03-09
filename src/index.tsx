import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "tailwindcss/tailwind.css";

import LandingPage from "./client/pages/landingpage/landingpage";
import Dashboard from "./client/pages/dashboard/dashboard";
import Inventory from "./client/pages/inventory/inventory";
import Wishlist from "./client/pages/wishlist/wishlist";
import Profile from "./client/pages/profile/profile";
import WishlistDetails from './client/pages/wishlist/wishlist-details';
import LoginPage from "./client/pages/auth/login";
import SignupPage from "./client/pages/auth/signup";
import SuccessPage from "./client/pages/auth/success";

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
		path: "/inventory",
		element: <Inventory />,
	},
	{
		path: "/wishlist",
		element: <Wishlist />,
	},
	{
		path: "/profile",
		element: <Profile />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/signup",
		element: <SignupPage />,
	},
	{
		path: "/success",
		element: <SuccessPage />,
	},
	{
		path: "/",
		element: <LandingPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
