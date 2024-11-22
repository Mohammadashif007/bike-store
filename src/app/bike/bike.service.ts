import { TBike } from "./bike.interface";
import { Bike } from "./bike.model";

const createBikeIntoDB = async (bike: TBike) => {
    const result = await Bike.create(bike);
    return result;
};


export const BikeServices = {
    createBikeIntoDB
}