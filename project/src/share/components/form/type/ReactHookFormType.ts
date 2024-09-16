import { TextFieldProps as MuiTextFieldProps } from "@mui/material";
import { ComponentPropsWithoutRef } from "react";
import { RegisterOptions } from "react-hook-form";

export type TextFieldProps = Omit<MuiTextFieldProps, "name"> & {
  name: string;
  rules?: Omit<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  helperText?: string;
} & ComponentPropsWithoutRef<"input">;
