import { NextFunction, Request, Response } from "express";
import { sql } from "../db";

export const wishlistController = {
	getItems: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const items = await sql`
			SELECT 
			items.item_id,
			items.item_name,
			items.current_quantity,
			items.monthly_quantity_usage,
			items.item_link,
			items.teacher_comment,
			wishlist.quantity_needed,
			wishlist.wishlist_id
			FROM
				wishlist 
			INNER JOIN
				items ON wishlist.item_id = items.item_id`;
			res.locals.items = items;
			console.log(items);

			next();
		} catch (err) {
			next({ err: "An error occurred while fetching items from wishlist" });
		}
	},
};
