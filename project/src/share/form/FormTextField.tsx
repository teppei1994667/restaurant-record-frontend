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
                "& .MuiFormLabel-root": {
                  color: "#6B7280",
                  opacity: 0.8,
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderWidth: !!errors.formTextField?.message
                      ? "2px"
                      : "1px",
                    borderColor: !!errors.formTextField?.message
                      ? "#cd5c5c"
                      : "#6B7280",
                  },
                },
                "& .MuiFormHelperText-root": {
                  color: "#cd5c5c",
                  fontSize: "13px",
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
