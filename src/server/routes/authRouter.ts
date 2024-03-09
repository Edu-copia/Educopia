import express, { Express, Request, Response, NextFunction } from "express";
import { sql } from "../db";
import { userController } from "../controllers/userController";
const authRouter = express.Router();

// This is the router function to signup a user
authRouter.post(
  "/signup",
  userController.addUser,
  async (req: Request, res: Response) => {
    res.status(200).json("Signup Successful!");
  }
);

// This is the router function to login a user
authRouter.post(
  "/login",
  userController.getUser,
  async (req: Request, res: Response) => {
    res.status(200).json("Login Successful!");
  }
);

export default authRouter;
