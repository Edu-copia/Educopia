import express, { Express, Request, Response, NextFunction } from "express";
import { sql } from "../db";
const router = express.Router();

//set up a quick function to check if the database is connected -JK
async function fetchUserData() {
	try {
		const users = await sql`SELECT * FROM users`;
		console.log(users);
		return users;
	} catch (error) {
		console.error("An error occurred while fetching users:", error);
		return null;
	}
}

router.get("/", async (req: Request, res: Response) => {
	const users = await fetchUserData();
	res.json(users);
});

router.post("/add", async (req: Request, res: Response) => {});

export default router;
