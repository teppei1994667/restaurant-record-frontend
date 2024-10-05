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
  id: number;
  provider: string;
  uid: string;
  allowPasswordChange: boolean;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  errors: string[];
};
