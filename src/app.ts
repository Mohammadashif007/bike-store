import express from "express";
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

app.get("/", (req, res) => {
    res.send("Hello World!");
});

export default app;
