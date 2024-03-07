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
			next(err.message);
		}
	},
	itemfulfillment: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const {
				item_id,
				parent_name,
				parent_email,
				quantity_purchased,
				date_purchased,
			} = req.body;
			if (!quantity_purchased) {
				throw new Error("missing fields required");
			}

			await sql`
			INSERT INTO fulfillments (item_id, parent_name, parent_email, quantity_purchased, date_purchased)
			VALUES (${item_id}, ${parent_name}, ${parent_email}, ${quantity_purchased}, ${date_purchased})
	`;
			console.log("added into fulfillments table");

			await sql`
			UPDATE wishlist
			SET quantity_needed = quantity_needed - ${quantity_purchased}
			WHERE item_id = ${item_id}`;
			console.log("updated wishlist");

			await sql`
			DELETE FROM wishlist
			WHERE item_id = ${item_id} AND quantity_needed <= 0`;
			console.log("Deleted item from wishlist");
			next();
		} catch (err) {
			if (err.message.includes("INSERT INTO fulfillments")) {
				throw new Error("Error inserting into fulfillments table");
			}
			next(err.message);
		}
	},
};
