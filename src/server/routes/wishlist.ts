import express, { Express, Request, Response, NextFunction } from "express";
import { sql } from "../db";
import { wishlistController } from "../controllers/wishlistController";
const wishlistRouter = express.Router();

//route to show all the items in the wishlist DB
wishlistRouter.get(
	"/",
	wishlistController.getItems,
	async (req: Request, res: Response) => {
		res.status(200).json(res.locals.items);
	}
);

//route to get specific item when clicked on component
wishlistRouter.get(
	`/:id`,
	wishlistController.getOneItem,
	async (req: Request, res: Response) => {
		res.status(200).json(res.locals.item);
	}
);

wishlistRouter.post(
	"/",
	wishlistController.itemfulfillment,
	async (req: Request, res: Response) => {
		res.status(200).json("good to go");
	}
);

wishlistRouter.delete("/", async (req: Request, res: Response) => {
	//delete from wishlist if item is deleted from inventory
	//item_id
});

export default wishlistRouter;
