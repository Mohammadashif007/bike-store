import express from "express";
import { BikeControllers } from "./bike.controller";

const router = express.Router();

router.post("/", BikeControllers.createBike);
router.get("/", BikeControllers.getAllBikes);
router.get("/:bikeId", BikeControllers.getSingleBike);
router.put("/:bikeId", BikeControllers.updateData);
router.delete("/:bikeId", BikeControllers.deleteData);

export const BikeRoutes = router;
