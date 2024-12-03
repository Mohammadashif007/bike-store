import { NextFunction, Request, Response } from "express";
import { BikeServices } from "./bike.service";
import { bikeValidation } from "./bike.validation";

// ! save data into mongodb database
const createBike = async (req: Request, res: Response, next: NextFunction) => {
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
        next(error);
    }
};

// ! Retrieve all data from mongodb database
const getAllBikes = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await BikeServices.getAllBikesFromDB();
        if (result.length === 0) {
            res.status(404).json({
                success: false,
                message: "No bikes found",
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Bikes retrieved successfully",
                data: result,
            });
        }
    } catch (error: any) {
        next(error);
    }
};

// ! Retrieve single data from mongodb database
const getSingleBike = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { productId } = req.params;
        const result = await BikeServices.getSingleBikeFromDB(productId);
        if (!result) {
            res.status(404).json({
                success: false,
                message: `Bike with ${productId} is not found`,
            });
        }
        res.status(200).json({
            success: true,
            message: "Bike retrieved successfully",
            data: result,
        });
    } catch (error: any) {
        next(error);
    }
};

// ! Update bike data into database
const updateData = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { productId } = req.params;
        const { bike } = req.body;
        const validatedData =
            bikeValidation.bikeUpdateValidationSchema.parse(bike);
        const result = await BikeServices.updateDataIntoDB(
            productId,
            validatedData
        );
        if (!result) {
            res.status(404).json({
                success: false,
                message: `Bike with this ${productId} not found`,
            });
        }
        res.status(200).json({
            success: true,
            message: "Bike updated successfully",
            data: result,
        });
    } catch (error: any) {
        next(error);
    }
};

// ! delete bike data
const deleteData = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { productId } = req.params;
        const result = await BikeServices.deleteDataFromDB(productId);
        if (!result) {
            res.status(404).json({
                success: false,
                message: `Bike with this ${productId} not found`,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Bike deleted successfully",
                data: {},
            });
        }
    } catch (error: any) {
        next(error);
    }
};

export const BikeControllers = {
    createBike,
    getAllBikes,
    getSingleBike,
    updateData,
    deleteData,
};
