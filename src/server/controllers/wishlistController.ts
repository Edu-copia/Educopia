import { NextFunction, Request, Response } from "express";
import { sql } from "../db";

export const wishlistController = {
	getItems: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const items = await sql`
			SELECT 
			item_id,
			item_name,
			item_link,
			teacher_comment
			FROM
			items
			WHERE
			current_quantity/monthly_quantity_usage <= 2`;
			res.locals.items = items;
			console.log(items);

			next();
		} catch (err) {
			next(err.message);
		}
	},
	getOneItem: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { id } = req.params;
			console.log("this is the id", id);
			const item = await sql`
			SELECT 
			item_name,
			item_link,
			teacher_comment
			FROM
			items
			WHERE
			item_id = ${id}`;
			// console.log(item);
			res.locals.item = item;
			next();
		} catch (err) {
			next(err);
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
			UPDATE items
			SET current_quantity = current_quantity + ${quantity_purchased}
			WHERE item_id = ${item_id}`;
			console.log("inventory updated");
			next();
		} catch (err) {
			next(err);
		}
	},
};
