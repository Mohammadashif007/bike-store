import { NextFunction, Request, response, Response } from "express";
import { OrderServices } from "./order.service";
import { BikeServices } from "../bike/bike.service";
import orderValidationSchema from "./order.validation";

// ! create an orders
const createOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { order } = req.body;
        const validatedOrderData = orderValidationSchema.parse(order);
        await BikeServices.updateInventory(order.product, order.quantity);
        const result = await OrderServices.createOrderIntoDB(
            validatedOrderData
        );
        res.status(200).json({
            success: true,
            message: "Order created successfully",
            data: result,
        });
    } catch (error: any) {
        next(error);
    }
};

// ! retrieve all orders
const getAllOrders = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const result = await OrderServices.getAllOrdersFromDB();
        if (result.length === 0) {
            res.status(404).json({
                success: false,
                message: "Order not found",
            });
        } else {
            res.status(200).json({
                success: true,
                message: "All order retrieve successfully",
                data: result,
            });
        }
    } catch (error) {
        next(error);
    }
};

// ! calculate total revenue
const getTotalRevenue = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const result = await OrderServices.calculateTotalRevenue();
        res.status(200).json({
            success: true,
            message: "Revenue calculated successfully",
            data: result,
        });
    } catch (error: any) {
        next(error);
    }
};

export const OrderControllers = {
    createOrder,
    getAllOrders,
    getTotalRevenue,
};
