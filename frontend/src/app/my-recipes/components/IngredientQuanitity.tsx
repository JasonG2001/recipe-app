import {
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

type IngredientQuantityProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
};

export const IngredientQuantity = <T extends FieldValues>({
  name,
  control,
}: IngredientQuantityProps<T>) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <IngredientQuantitySubComponent field={field} />
        </FormItem>
      )}
    />
  );
};

type IngredientQuantitySubComponentProps<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>
> = { field: ControllerRenderProps<TFieldValues, TName> };

const IngredientQuantitySubComponent = <
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>
>({
  field,
}: IngredientQuantitySubComponentProps<TFieldValues, TName>) => {
  const { formItemId } = useFormField();
  return (
    <>
      <FormLabel htmlFor={formItemId} className="text-sm">
        Quantity
      </FormLabel>
      <Input id={formItemId} type="number" className="w-20" {...field} />
    </>
  );
};
