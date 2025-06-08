import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  useFormField,
} from "components/form/Form";
import { Input } from "components/input/Input";
import { cn } from "components/utils";
import { ComponentProps } from "react";
import {
  Control,
  ControllerRenderProps,
  FieldValues,
  Path,
} from "react-hook-form";

type InputWithLabelProps<T extends FieldValues> = {
  label: string;
  control: Control<T>;
  name: Path<T>;
} & ComponentProps<"input">;

export const InputWithLabel = <T extends FieldValues>({
  label,
  className,
  control,
  name,
  ...props
}: InputWithLabelProps<T>) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className={cn("flex flex-col gap-3", className)}>
          <InputWithLabelSubComponent field={field} label={label} {...props} />
        </FormItem>
      )}
    />
  );
};

type InputWithLabelSubComponentProps<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>
> = {
  label: string;
  field: ControllerRenderProps<TFieldValues, TName>;
} & ComponentProps<"input">;

const InputWithLabelSubComponent = <
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>
>({
  label,
  field,
  ...props
}: InputWithLabelSubComponentProps<TFieldValues, TName>) => {
  const { formItemId } = useFormField();
  return (
    <>
      <FormLabel htmlFor={formItemId}>{label}</FormLabel>
      <FormControl>
        <Input id={formItemId} {...field} {...props} />
      </FormControl>
    </>
  );
};
