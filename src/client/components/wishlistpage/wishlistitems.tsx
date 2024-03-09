import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface WishlistItem {
	item_id: number;
	item_name: string;
	current_quantity: number;
	monthly_quantity_usage: number;
}

const WishlistItems: React.FC = () => {
	const navigate = useNavigate();
	const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

	const onClick = (item_id: number) => {
		console.log("this is the item id", item_id);
		navigate("/wishlist-details", { state: { item_id } });
	};

	useEffect(() => {
		const fetchWishlistItems = async () => {
			try {
				const response = await axios.get<WishlistItem[]>("/api/wishlist");
				setWishlistItems(response.data);
			} catch (error) {
				console.error("Error fetching wishlist items:", error);
			}
		};
		fetchWishlistItems();
	}, []);

	const sortedItems = wishlistItems
		.slice()
		.sort(
			(a, b) =>
				a.current_quantity / a.monthly_quantity_usage -
				b.current_quantity / b.monthly_quantity_usage
		);
	console.log(sortedItems);

	return (
		<div className="flex flex-wrap justify-center">
			{sortedItems.map((item) => (
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
