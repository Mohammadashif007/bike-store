import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { BikeRoutes } from "./app/bike/bike.route";
import { OrderRoutes } from "./app/orders/order.router";

const app = express();

//! data parser
app.use(cors());
app.use(express.json());

// ! application API (product)
app.use("/api/products", BikeRoutes);

// ! application API (Order)
app.use("/api/orders", OrderRoutes);

// ! Root or home route
app.get("/", (req, res) => {
    res.send("Welcome to the Bike-Shop ");
});


// ! 404 Not Found middleware
app.use((req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: "Page Not Found"
    })
})


// ! Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({
        success: false,
        message: err.message || "An unexpected error occurred",
        error: err,
        stack: err.stack,
    });
});



export default app;
