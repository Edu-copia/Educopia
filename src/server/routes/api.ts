import express, { Express, Request, Response, NextFunction } from "express";
import supabase from "../db";
const router = express.Router();

//set up a quick function to check if the database is connected -JK
async function fetchUserData() {
	try {
		const { data: users, error } = await supabase.from("users").select("*");
		if (error) {
			throw new Error("Error fetching users: " + error.message);
		}
		console.log(users);
		return users;
	} catch (error) {
		console.error("An error occurred while fetching users:", error);
		return null;
	}
}
router.get("/", (req: Request, res: Response) => {
	res.json(fetchUserData());
});

router.post("", (req: Request, res: Response) => {});

export default router;
