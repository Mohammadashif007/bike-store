import { TBike } from "./bike.interface";
import { Bike } from "./bike.model";

// ! create data
const createBikeIntoDB = async (bike: TBike) => {
    const result = await Bike.create(bike);
    return result;
};

// ! retrieve all data
const getAllBikesFromDB = async () => {
    const result = await Bike.find();
    return result;
};

// ! retrieve single data
const getSingleBikeFromDB = async (id: string) => {
    const result = await Bike.findById(id);
    return result;
};

// ! update data
const updateDataIntoDB = async (id: string, data: Partial<TBike>) => {
    const result = await Bike.findByIdAndUpdate(id, data, { new: true });
    return result;
};

// ! delete data from db
const deleteDataFromDB = async(id: string) => {
    const result = await Bike.findByIdAndDelete(id);
    return result;
}

export const BikeServices = {
    createBikeIntoDB,
    getAllBikesFromDB,
    getSingleBikeFromDB,
    updateDataIntoDB,
    deleteDataFromDB
};
