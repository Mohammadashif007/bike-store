import { z } from "zod";

const orderValidationSchema = z.object({
  email: z.string().email("Invalid email formate").min(1, "Email is required"),
  product: z.string().min(1, "Product is required"),
  quantity: z
    .number({ invalid_type_error: "Quantity must be a number" })
    .min(1, "Quantity can't be less than 0")
    .refine((value) => Number.isInteger(value), "Quantity must be an integer"),
  totalPrice: z.number().min(0, "Total price must be non-negative"),
});

export default orderValidationSchema;
