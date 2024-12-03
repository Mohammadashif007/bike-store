import express from "express";
import { BikeControllers } from "./bike.controller";

const router = express.Router();

router.post("/", BikeControllers.createBike);
router.get("/", BikeControllers.getAllBikes);
router.get("/:productId", BikeControllers.getSingleBike);
router.put("/:productId", BikeControllers.updateData);
router.delete("/:productId", BikeControllers.deleteData);

export const BikeRoutes = router;
