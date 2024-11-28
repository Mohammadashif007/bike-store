import { model, Schema } from "mongoose";
import { TOrders } from "./orders.interface";

const orderModelSchema = new Schema(
    {
        email: { type: String, require: true },
        product: { type: String, require: true },
        quantity: { type: Number, require: true },
        totalPrice: { type: Number, require: true },
    },
    { timestamps: true }
);

export const Order = model<TOrders>("order", orderModelSchema);
