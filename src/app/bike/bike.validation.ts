import { z } from "zod";

// ! data validation with zod
const bikeValidationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  brand: z.string().min(1, "Brand is required"),
  price: z
    .number({ invalid_type_error: "Price must be a Number" })
    .min(1, "Price is required"),
  category: z.string().min(1, "Category is required"),
  description: z.string().min(1, "Description is required"),
  quantity: z
    .number({ invalid_type_error: "Quantity must be a Number" })
    .min(1, "Quantity can not be negative number"),
  inStock: z.boolean(),
});

// ! updated data validation with zod
const bikeUpdateValidationSchema = z.object({
  name: z.string().min(1, "Name is required").optional(),
  brand: z.string().min(1, "Brand is required").optional(),
  price: z
    .number({
      invalid_type_error: "Price must be a positive number",
    })
    .min(1)
    .optional(),
  category: z.string().min(1, "Category is required").optional(),
  description: z.string().min(1, "Description is required").optional(),
  quantity: z
    .number({
      invalid_type_error: "Quantity must be a number",
    })
    .min(1, "Quantity can not be negative number")
    .optional(),
  inStock: z.boolean().optional(),
});

export const bikeValidation = {
  bikeUpdateValidationSchema,
  bikeValidationSchema,
};
