const bcrypt = require("bcrypt");
import { NextFunction, Request, Response } from "express";
import { sql } from "../db";

export const userController = {
  // Middleware function to add user to database. Also checks if user already exists
  addUser: async (req: Request, res: Response, next: NextFunction) => {
    // Object destructuring to grab user inputs from request body
    const { firstname, lastname, email, password } = req.body;

    try {
      const hash = await bcrypt.hash(password, 10);
      let values = [firstname, lastname, email, hash];

      // SQL Command to insert into users table
      await sql`INSERT INTO users(first_name, last_name, email, password) VALUES (${firstname}, ${lastname}, ${email}, ${hash})`;

      return next();
    } catch (err) {
      return next({
        log: `userController.addUser: ERROR: ${err}`,
        message: {
          err: "Error occurred in userController.addUser. Check server logs for more details.",
        },
        status: 500,
      });
    }
  },

  // // Middleware function to check if user logging in exists in database
  getUser: async (req: Request, res: Response, next: NextFunction) => {
    // Object desctructuring to grab email and password from the FE Form
    const { email, password } = req.body;

    try {
      // SQL Query to check if a user with the provided email exists
      const queryResult = await sql`SELECT * FROM users WHERE email = ${email}`;
      
      // Extract the actual data from the query result
      const result = queryResult && queryResult.length > 0 ? queryResult[0] : null;

      if (!result) {
        // If no user with the provided email is found, return an error
        return res.status(401).json({ error: "User not found. Please signup" });
      }
  
      const user = result.password;
      // Check if the password matches
      const isMatch = await bcrypt.compare(password, user);
  
      if (isMatch) {
        // TO-DO: Create JWT TOKEN
  
        res.locals.id = result.userid;
        return next();
      } else {
        // Passwords do not match, return an error
        return res.status(401).json({ error: "Incorrect password." });
      }
    } catch (err) {
      return next({
        log: `userController.loginUser: ERROR: ${err}`,
        message: {
          err: "Error occurred in userController.loginUser. Check server logs for more details.",
        },
        status: 500,
      });
    }
  },
};
