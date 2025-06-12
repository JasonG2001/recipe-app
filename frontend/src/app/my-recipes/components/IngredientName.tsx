import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  useFormField,
} from "components/form/Form";
import { Input } from "components/input/Input";
import {
  Control,
  ControllerRenderProps,
  FieldValues,
  Path,
} from "react-hook-form";

type IngredientNameProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
};

export const IngredientName = <T extends FieldValues>({
  name,
  control,
}: IngredientNameProps<T>) => (
  <FormField
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormControl>
          <IngredientNameSubComponent field={field} />
        </FormControl>
      </FormItem>
    )}
  />
);

type IngredientNameSubComponentProps<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>
> = {
  field: ControllerRenderProps<TFieldValues, TName>;
};

const IngredientNameSubComponent = <
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>
>({
  field,
}: IngredientNameSubComponentProps<TFieldValues, TName>) => {
  const { formItemId } = useFormField();
  return (
    <>
      <FormLabel htmlFor={formItemId} className="text-sm">
        Ingredient name
      </FormLabel>
      <Input id={formItemId} placeholder="eg. Flour" {...field} />
    </>
  );
};
