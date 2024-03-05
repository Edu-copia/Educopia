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

async function addUserData(userData: any) {
	try {
		const { data, error } = await supabase.from("users").insert([userData]);
	} catch (error) {
		console.log("there is an error inputting into DB", error);
	}
}
router.get("/", async (req: Request, res: Response) => {
	const users = await fetchUserData();
	res.json(users);
});

router.post("/add", async (req: Request, res: Response) => {
	try {
		const { first_name, last_name, email, password } = req.body;
		if (!first_name || !last_name || !email || !password) {
			throw new Error("Missing required fields");
		}
		await addUserData({ first_name, last_name, email, password });
		res.status(201).send("User added successfully");
	} catch (error) {
		console.error("An error occurred while adding user:", error);
		res.status(500).send("Failed to add user");
	}
});

export default router;
