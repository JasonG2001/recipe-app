"use client";

import { UserRecipeValidationType } from "my-recipes/validation";
import { useFormContext } from "react-hook-form";
import { IngredientRow } from "./IngredientRow";
import { Button } from "components/button/Button";
import { Plus } from "lucide-react";

export const IngredientsSection = () => {
  const { watch } = useFormContext<UserRecipeValidationType>();
  const ingredients = watch("ingredients");

  return (
    <div className="flex flex-col gap-4">
      <div className="text-xl">Ingredients</div>
      {ingredients.map((_, i) => (
        <IngredientRow key={`ingredient-${i}`} rowNumber={i} />
      ))}
      <div className="text-end">
        <Button variant="outline">
          <Plus /> Add
        </Button>
      </div>
    </div>
  );
};
