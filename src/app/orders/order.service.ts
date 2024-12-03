import { TOrders } from "./orders.interface";
import { Order } from "./orders.model";

// ! order creation in database
const createOrderIntoDB = async (data: TOrders) => {
    const result = await Order.create(data);
    return result;
};

// ! get all orders from database
const getAllOrdersFromDB = async () => {
    const orders = await Order.find();
    return orders;
};

// ! calculate totalRevenue

const calculateTotalRevenue = async () => {
    const result = await Order.aggregate([
        {
            $addFields: {
                productObjId: { $toObjectId: "$product" },
            },
        },
        {
            $lookup: {
                from: "bikes",
                localField: "productObjId",
                foreignField: "_id",
                as: "bikeInfo",
            },
        },
        {
            $unwind: "$bikeInfo",
        },
        {
            $project: {
                _id: 0,
                revenue: { $multiply: ["$bikeInfo.price", "$quantity"] },
            },
        },
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: "$revenue" },
            },
        },
        {
            $project: {
                _id: 0,
                totalRevenue: 1,
            },
        },
    ]);
    return result[0] ;
};

export const OrderServices = {
    createOrderIntoDB,
    getAllOrdersFromDB,
    calculateTotalRevenue,
};
