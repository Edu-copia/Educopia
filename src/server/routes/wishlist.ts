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

wishlistRouter.post("/", async (req: Request, res: Response) => {});

wishlistRouter.patch("/", async (req: Request, res: Response) => {});

wishlistRouter.delete("/", async (req: Request, res: Response) => {});

export default wishlistRouter;
