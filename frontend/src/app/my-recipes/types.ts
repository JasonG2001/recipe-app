export type UserRecipe = {
  /**
   * Name of the food item
   * @example "Pasta Carbonara"
   */
  name: string;
  description: string;
  ingredients: Ingredient[];
};

export type Ingredient = {
  /**
   * Name of the ingredient
   * @example "sugar"
   */
  name: string;
  quantity: number;
  unit: Unit;
};

export type VolumeUnit = "ml" | "l";

export type WeightUnit = "mg" | "g" | "kg";

export type ObjectUnit = "cup" | "tbsp" | "tsp";

export type Unit = VolumeUnit | WeightUnit | ObjectUnit;
