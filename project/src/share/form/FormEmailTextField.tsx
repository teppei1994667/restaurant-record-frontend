import { forwardRef } from "react";
import { TextFieldProps } from "./type/ReactHookFormType";
import { FormTextField } from "./FormTextField";

export const FormEmailTextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const { rules, ...restProps } = props;
  const emailRegExp =
    /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

  //EmailTextField標準のバリデーションルール
  const emailTextFieldRules = {
    required: { value: true, message: "必須入力です" },
    maxLength: {
      value: 319,
      message: "最大319桁までの入力にしか対応していません",
    },
    pattern: {
      value: emailRegExp,
      message: "正しいメールアドレスの形式を入力してください。",
    },
    //呼び出し元からの上書き可能
    ...rules,
  };
  return (
    <>
      <FormTextField rules={emailTextFieldRules} {...restProps} ref={ref} />
    </>
  );
});

FormEmailTextField.displayName = "FormEmailTextField";
