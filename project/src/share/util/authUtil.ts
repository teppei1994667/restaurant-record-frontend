import { AxiosError } from "axios";
import { convertAuthUserAxios } from "./convertAxiosUtil";
import { SignUpParams } from "./type/authUtilType";

// サインアップ
export const signUp = (params: SignUpParams) => {
  return convertAuthUserAxios.post("/", params);
};
