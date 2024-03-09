import express, { Express, Request, Response, NextFunction } from "express";
import { supabase } from "../db";
const router = express.Router();

async function fetchFulfillmentData(itemId: String) {
	try {
		const { data: items, error } = await supabase.from("fulfillments").select("*").eq("item_id", itemId)
		if (error) {
			throw new Error("Error fetching fulfillments: " + error.message);
		}
		console.log(items);
		return items;
	} catch (error) {
		console.error("An error occurred while fetching fulfillments:", error);
		return null;
	}
}

async function addFulfillmentData(itemData: any) {
	try {
		const { data, error } = await supabase.from("fulfillments").insert([itemData]);
  
	  if (error) {
		throw new Error("Error inserting item: " + error.message);
	  }

	  console.log("Fulfillment added successfully:", data);
	  return data;
	} catch (error) {
	  console.error("There was an error inserting into the DB", error);
	  throw error;
	}
  }

router.
get("/:itemId", async (req: Request, res: Response) => {
	const items = await fetchFulfillmentData(req.params.itemId);
	res.json(items);
});

router.post("/", async (req: Request, res: Response) => {
	try {
		const { item_id, parent_name, parent_email, quantity_purchased, date_purchased } = req.body;
		if ( !item_id || !parent_name || !parent_email || !quantity_purchased || !date_purchased) {
			throw new Error("Missing required fields");
		}
		await addFulfillmentData({ item_id, parent_name, parent_email, quantity_purchased, date_purchased });
		res.status(201).send("Fulfillment added successfully");
	} catch (error) {
		console.error("An error occurred while adding item:", error);
		res.status(500).send("Failed to add fulfillment");
	}
});

export default router;