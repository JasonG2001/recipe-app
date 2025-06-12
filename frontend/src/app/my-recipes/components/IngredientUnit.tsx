import {
  FormField,
  FormItem,
  FormLabel,
  useFormField,
} from "components/form/Form";
import { BuiltSelect } from "components/select/Select";
import { units } from "my-recipes/constants";
import {
  Control,
  ControllerRenderProps,
  FieldValues,
  Path,
} from "react-hook-form";

type IngredientUnitProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
};

export const IngredientUnit = <T extends FieldValues>({
  name,
  control,
}: IngredientUnitProps<T>) => (
  <FormField
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem>
        <IngredientUnitSubComponent field={field} />
      </FormItem>
    )}
  />
);

type IngredientUnitSubComponentProps<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>
> = {
  field: ControllerRenderProps<TFieldValues, TName>;
};

const IngredientUnitSubComponent = <
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>
>({
  field,
}: IngredientUnitSubComponentProps<TFieldValues, TName>) => {
  const { formItemId } = useFormField();
  return (
    <>
      <FormLabel htmlFor={formItemId} className="text-sm">
        Unit
      </FormLabel>
      <BuiltSelect options={units} onValueChange={field.onChange} {...field} />
    </>
  );
};
