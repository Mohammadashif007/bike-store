import express from "express";
import { BikeControllers } from "./bike.controller";

const router = express.Router();

router.use("/create-bike", BikeControllers.createBike);

export const BikeRoutes = router;
