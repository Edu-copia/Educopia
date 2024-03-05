import { NextFunction, Request, Response } from "express";
import supabase from "../db";
export const wishlistController = {
	getItems: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { data: itemsNeeded, error } = await supabase.from("items").select(
				`item_name,
              wishlist( id, quantity_needed)
           `
			);

			if (error) {
				throw new Error("Error fetching items needed: " + error.message);
			}
			res.locals = itemsNeeded;
			next();
		} catch (error) {
			console.error("An error occurred while fetching items needed:", error);
			next(error);
		}
	},
};
