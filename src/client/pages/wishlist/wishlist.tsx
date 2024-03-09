import React from "react";
import "tailwindcss/tailwind.css";

import Sidebar from "../../components/Sidebar";
import WishlistItems from "../../components/wishlistpage/wishlistitems";

export default function Wishlist() {
	return (
		<div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
			<div className="w-full flex-none md:w-64">
				<Sidebar />
			</div>
			<WishlistItems />
			<div className="flex-grow p-6 md:overflow-y-auto md:p-12"></div>
		</div>
	);
}
