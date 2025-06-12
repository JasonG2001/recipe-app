import { DescriptionInputWithLabel } from "higher-order-components/DescriptionInputWithLabel";
import { InputWithLabel } from "higher-order-components/InputWithLabel";
import { useFormContext } from "react-hook-form";
import { IngredientsSection } from "./IngredientsSection";

export const MyRecipesFormContent = () => {
  const { control } = useFormContext();
  return (
    <>
      <InputWithLabel
        name="name"
        label="Name of food"
        className="w-1/2"
        placeholder="eg. Spaghetti Carbonara"
        control={control}
      />
      <DescriptionInputWithLabel
        name="description"
        label="Description"
        placeholder="A few sentences describing the food, its origin, and any other interesting facts."
        control={control}
      />
      <IngredientsSection />
    </>
  );
};
