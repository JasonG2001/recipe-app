"use client";

import {
  userRecipeSchema,
  UserRecipeValidationType,
} from "my-recipes/validation";
import { useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MyRecipesFormContent } from "./MyRecipesFormContent";

export const MyRecipesForm = () => {
  const form = useForm<UserRecipeValidationType>({
    mode: "onChange",
    defaultValues: {
      name: "",
      description: "",
      ingredients: [{ name: "", quantity: 0, unit: "g" }],
    },
    resolver: zodResolver(userRecipeSchema),
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
        <MyRecipesFormContent />
      </form>
    </FormProvider>
  );
};
