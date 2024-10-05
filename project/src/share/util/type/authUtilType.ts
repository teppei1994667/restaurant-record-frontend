import { User } from "@/app/User/type/UserType";

// サインアップ
export type SignUpParams = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

// サインイン
export type SignInParams = {
  email: string;
  password: string;
};

// ユーザー認証確認のリクエストヘッダー
export type CheckUserAuthHeaders = {
  "access-token": string;
  client: string;
  uid: string;
};

// ユーザー認証確認のレスポンスデータ
export type Authenticated = {
  isLogin: boolean;
};

// ユーザーデータ取得
export type AuthUserShow = {
  user: User;
};
