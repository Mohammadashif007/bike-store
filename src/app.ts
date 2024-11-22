import express from "express";
import cors from "cors";
import { BikeRoutes } from "./app/bike/bike.route";
const app = express();

//! data parser
app.use(cors());
app.use(express.json());

// ! application API

app.use("/api/products", BikeRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

export default app;
