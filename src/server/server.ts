import express, { Express, Request, Response, NextFunction } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import apiRouter from "./routes/api";
import wishlistRouter from "./routes/wishlist";
import "dotenv/config";

const app: Express = express();

// Enable parsing of URL-encoded form data
app.use(express.urlencoded({ extended: true }));
// Handle request bodies
app.use(express.json());
// Handle cookies
app.use(cookieParser());

// Serve static assets in production mode
if (process.env.NODE_ENV === "production") {
	// Serve the bundled JavaScript and other static assets from the "dist" folder
	app.use("/dist", express.static(path.join(__dirname, "../dist")));

	// Serve the main HTML file for all routes
	app.get("*", (req: Request, res: Response) => {
		return res.status(200).sendFile(path.join(__dirname, "../index.html"));
	});
}

// Routes
app.use("/api", apiRouter);
app.use("/api/wishlist", wishlistRouter);

// Page Not Found (404)
app.use("*", (req: Request, res: Response) => {
	res.status(404).send("Not Found");
});

// Global Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	const defaultErr = {
		log: "unknown error handler caught in middleware",
		status: 400,
		message: { err: "An error occurred" },
	};
	const errorObj = Object.assign({}, defaultErr, err);
	return res.status(errorObj.status).send(errorObj.message);
});

// Listening on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});

// Export the app
export default app;
