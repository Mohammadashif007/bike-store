import { Request, response, Response } from "express";
import { OrderServices } from "./order.service";
import { BikeServices } from "../bike/bike.service";

const createOrder = async (req: Request, res: Response) => {
    try {
        const { order } = req.body;
        const result = await OrderServices.createOrderIntoDB(order);
        await BikeServices.updateInventory(order.product, order.quantity);
        res.status(200).json({
            success: true,
            message: "Order created successfully",
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

const getAllOrders = async (req: Request, res: Response) => {
    try {
        const result = await OrderServices.getAllOrdersFromDB();
        res.status(200).json({
            success: true,
            message: "All order retrieve successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Product not found",
            error: error,
        });
    }
};

const getTotalRevenue = async (req: Request, res: Response) => {
    try {
        const result = await OrderServices.calculateTotalRevenue();
        res.status(200).json({
            success: true,
            message: "Revenue calculated successfully",
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

export const OrderControllers = {
    createOrder,
    getAllOrders,
    getTotalRevenue,
};
