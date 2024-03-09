import express, { Express, Request, Response, NextFunction } from "express";
import supabase from "../db";
const router = express.Router();

async function fetchItemData(userId: String) {
	try {
		const { data: items, error } = await supabase.from("items").select("*").eq("user_id", userId)
		if (error) {
			throw new Error("Error fetching items: " + error.message);
		}
		console.log(items);
		return items;
	} catch (error) {
		console.error("An error occurred while fetching items:", error);
		return null;
	}
}

async function addItemData(itemData: any) {
	try {
		const { data, error } = await supabase.from("items").insert([itemData]);
  
	  if (error) {
		throw new Error("Error inserting item: " + error.message);
	  }

	  console.log("Item added successfully:", data);
	  return data;
	} catch (error) {
	  console.error("There was an error inserting into the DB", error);
	  throw error;
	}
  }

  async function updateItemData(itemData: any, itemId: any) {
	try {
		const { data, error } = await supabase.from("items").update([itemData]).eq("item_id", itemId)
	  if (error) {
		throw new Error("Error updating item: " + error.message);
	  }
	  console.log("Item updated successfully:", data);
	  return data;
	} catch (error) {
	  console.error("There was an error updating in the DB", error);
	  throw error;
	}
  }

  async function deleteItemData(itemId: String) {
	try {
		const { data: items, error } = await supabase.from("items").delete().eq("item_id", itemId)
		if (error) {
			throw new Error("Error deleting item: " + error.message);
		}
		console.log(items);
		return items;
	} catch (error) {
		console.error("An error occurred while deleting item:", error);
		return null;
	}
}

router.
get("/:userId", async (req: Request, res: Response) => {
	const items = await fetchItemData(req.params.userId);
	res.json(items);
});

router.post("/", async (req: Request, res: Response) => {
	try {
		const { user_id, item_name, current_quantity, monthly_quantity_usage, item_link, teacher_comment } = req.body;
		if ( !user_id || !item_name || !current_quantity || !monthly_quantity_usage) {
			throw new Error("Missing required fields");
		}
		await addItemData({ user_id, item_name, current_quantity, monthly_quantity_usage, item_link, teacher_comment });
		res.status(201).send("Item added successfully");
	} catch (error) {
		console.error("An error occurred while adding item:", error);
		res.status(500).send("Failed to add item");
	}
});

router.patch("/:itemId", async (req: Request, res: Response) => {
	try {
		const { user_id, item_name, current_quantity, monthly_quantity_usage, item_link, teacher_comment } = req.body;
		await updateItemData({ user_id, item_name, current_quantity, monthly_quantity_usage, item_link, teacher_comment }, req.params.itemId);
		res.status(201).send("Item updated successfully");
	} catch (error) {
		console.error("An error occurred while updating item:", error);
		res.status(500).send("Failed to update item");
	}
});

router.delete("/:itemId", async (req: Request, res: Response) => {
	const items = await deleteItemData(req.params.itemId);
	res.json(items);
});

export default router;