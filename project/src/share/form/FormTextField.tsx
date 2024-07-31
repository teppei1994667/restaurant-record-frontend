import { TextField } from "@mui/material";
import { forwardRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TextFieldProps } from "./type/ReactHookFormType";

export const FormTextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const { name, rules, helperText, ...restProps } = props;
    const form = useFormContext();

    return (
      <>
        <Controller
          name={name}
          control={form.control}
          rules={rules}
          render={({ field, formState: { errors } }) => (
            <TextField
              {...field}
              ref={ref}
              error={!!errors.message}
              helperText={helperText}
              {...restProps}
              size="small"
            />
          )}
        />
      </>
    );
  }
);

FormTextField.displayName = "FormTextField";
