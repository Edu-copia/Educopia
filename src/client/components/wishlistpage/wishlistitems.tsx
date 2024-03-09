import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface WISHLISTITEMS {
	item_id: number;
	item_name: string;
}

const WishlistItems = () => {
	const navigate = useNavigate();
	const [wishlistItems, setWishlistItems] = useState<WISHLISTITEMS[]>([]);
	const onClick = (item_id: Number) => {
		console.log("this is the item id", item_id);
		navigate("/wishlist-details", { state: { item_id } });
	};
	useEffect(() => {
		const fetchWishlistItems = async () => {
			try {
				const response = await axios.get("/api/wishlist");
				setWishlistItems(response.data);
			} catch (error) {
				console.error("Error fetching wishlist items:", error);
			}
		};
		fetchWishlistItems();
	}, []);

	return (
		<div className="flex flex-wrap justify-center">
			{wishlistItems.map((item) => (
				<div
					key={item.item_id}
					className="w-64 h-64 m-4 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-blue-400 cursor-pointer"
					onClick={() => onClick(item.item_id)}
				>
					<span className="text-center">{item.item_name}</span>
				</div>
			))}
		</div>
	);
};

export default WishlistItems;
