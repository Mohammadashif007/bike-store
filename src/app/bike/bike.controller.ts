import { Request, Response } from "express";
import { BikeServices } from "./bike.service";
import { bikeValidation } from "./bike.validation";

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


export const BikeControllers = {
    createBike
}