import { Request, Response } from "express";
import { BikeServices } from "./bike.service";
import { bikeValidation } from "./bike.validation";

// ! save data into mongodb database
const createBike = async (req: Request, res: Response) => {
    try {
        const { bike } = req.body;
        const validatedBikeData =
            bikeValidation.bikeValidationSchema.parse(bike);
        const result = await BikeServices.createBikeIntoDB(validatedBikeData);
        res.status(200).json({
            success: true,
            message: "Bike created successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong",
            error: error,
        });
    }
};

// ! Retrieve all data from mongodb database
const getAllBikes = async (req: Request, res: Response) => {
    try {
        const result = await BikeServices.getAllBikesFromDB();
        res.status(200).json({
            success: true,
            message: "Bikes retrieved successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong",
            error: error,
        });
    }
};

// ! Retrieve single data from mongodb database
const getSingleBike = async (req: Request, res: Response) => {
    try {
        const { bikeId } = req.params;
        const result = await BikeServices.getSingleBikeFromDB(bikeId);
        res.status(200).json({
            success: true,
            message: "Bike retrieved successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong",
            error: error,
        });
    }
};

export const BikeControllers = {
    createBike,
    getAllBikes,
    getSingleBike,
};
