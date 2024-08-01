import { TextField } from "@mui/material";
import { forwardRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TextFieldProps } from "./type/ReactHookFormType";

export const FormTextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const { name, rules, helperText, sx, ...restProps } = props;
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
              fullWidth
              sx={{
                ".MuiFormHelperText-root": {
                  color: "#cd5c5c",
                  fontSize: "12px",
                  fontWeight: "bold",
                },
                ...sx,
              }}
              {...restProps}
            />
          )}
        />
      </>
    );
  }
);

FormTextField.displayName = "FormTextField";
