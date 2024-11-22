import { z } from "zod";

// ! data validation with zod
const bikeValidationSchema = z.object({
    name: z.string().min(1, "Name is required"),
    brand: z.string().min(1, "Brand is required"),
    price: z.number().min(1, "Price is required"),
    category: z.string().min(1, "Category is required"),
    description: z.string().min(1, "Description is required"),
    quantity: z.number().min(1, "Quantity is required"),
    inStock: z.boolean(),
});

// ! updated data validation with zod
const bikeUpdateValidationSchema = z.object({
    name: z.string().min(1, "Name is required"),
    brand: z.string().min(1, "Brand is required"),
    price: z.number().min(1, "Price is required"),
    category: z.string().min(1, "Category is required"),
    description: z.string().min(1, "Description is required"),
    quantity: z.number().min(1, "Quantity is required"),
    inStock: z.boolean(),
});

export const bikeValidation = {
    bikeUpdateValidationSchema,
    bikeValidationSchema,
};
