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

// ユーザー認証確認
export type checkUserAuthHeaders = {
  "access-token": string;
  client: string;
  uid: string;
};
