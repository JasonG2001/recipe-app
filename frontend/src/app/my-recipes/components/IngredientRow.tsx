"use client";

import { UserRecipeValidationType } from "my-recipes/validation";
import { MetricWrapper } from "./MetricWrapper";
import { IngredientName } from "./IngredientName";
import { useFormContext } from "react-hook-form";
import { IngredientQuantity } from "./IngredientQuanitity";
import { IngredientUnit } from "./IngredientUnit";

type IngredientRowProps = {
  rowNumber: number;
};

export const IngredientRow = ({ rowNumber }: IngredientRowProps) => {
  const { control } = useFormContext<UserRecipeValidationType>();
  return (
    <div className="flex gap-3">
      <MetricWrapper className="w-2/3">
        <IngredientName
          name={`ingredients.${rowNumber}.name`}
          control={control}
        />
      </MetricWrapper>
      <MetricWrapper>
        <IngredientQuantity
          name={`ingredients.${rowNumber}.quantity`}
          control={control}
        />
      </MetricWrapper>
      <MetricWrapper>
        <IngredientUnit
          name={`ingredients.${rowNumber}.unit`}
          control={control}
        />
      </MetricWrapper>
    </div>
  );
};
