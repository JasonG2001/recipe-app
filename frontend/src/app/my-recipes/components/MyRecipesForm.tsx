"use client";

import { DescriptionInputWithLabel } from "higher-order-components/DescriptionInputWithLabel";
import { InputWithLabel } from "higher-order-components/InputWithLabel";
import { UserRecipeValidationType } from "my-recipes/validation";
import { useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";

export const MyRecipesForm = () => {
  const form = useForm<UserRecipeValidationType>({
    mode: "onChange",
    defaultValues: {
      name: "",
      description: "",
      ingredients: [],
    },
  });

  const onSubmit = useCallback((userRecipe: UserRecipeValidationType) => {
    console.log({ userRecipe });
  }, []);

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 my-6"
      >
        <InputWithLabel
          name="name"
          label="Name of food"
          className="w-1/2"
          placeholder="eg. Spaghetti Carbonara"
          control={form.control}
        />
        <DescriptionInputWithLabel
          name="description"
          label="Description"
          placeholder="A few sentences describing the food, its origin, and any other interesting facts."
          control={form.control}
        />
      </form>
    </FormProvider>
  );
};
