import { z } from "zod";

const ingredientSchema = z.object({
  name: z.string().min(1, { message: "Please enter an ingredient" }),
  quantity: z.number(),
  unit: z.enum(["ml", "l", "mg", "g", "kg", "cup", "tbsp", "tsp"]),
});

export const userRecipeSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string(),
  ingredients: z.array(ingredientSchema),
});

export type UserRecipeValidationType = z.infer<typeof userRecipeSchema>;
