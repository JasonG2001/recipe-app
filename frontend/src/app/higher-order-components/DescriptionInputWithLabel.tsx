import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  useFormField,
} from "components/form/Form";
import { Textarea } from "components/textarea/TextArea";
import { cn } from "components/utils";
import { ComponentProps } from "react";
import {
  Control,
  ControllerRenderProps,
  FieldValues,
  Path,
} from "react-hook-form";

type DescriptionInputWithLabelProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  control: Control<T>;
} & ComponentProps<"textarea">;

export const DescriptionInputWithLabel = <T extends FieldValues>({
  label,
  className,
  name,
  control,
  ...props
}: DescriptionInputWithLabelProps<T>) => (
  <FormField
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem className={cn("flex flex-col gap-3", className)}>
        <DescriptionInputWithLabelSubComponent
          label={label}
          field={field}
          {...props}
        />
      </FormItem>
    )}
  />
);

type DescriptionInputWithLabelSubComponentProps<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>
> = {
  label: string;
  field: ControllerRenderProps<TFieldValues, TName>;
} & ComponentProps<"textarea">;

const DescriptionInputWithLabelSubComponent = <
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>
>({
  label,
  field,
  ...props
}: DescriptionInputWithLabelSubComponentProps<TFieldValues, TName>) => {
  const { formItemId } = useFormField();
  return (
    <>
      <FormLabel htmlFor={formItemId} className="text-lg">
        {label}
      </FormLabel>
      <FormControl>
        <Textarea id={formItemId} {...field} {...props} />
      </FormControl>
    </>
  );
};
