export type User = {
  id: number;
  provider: string;
  uid: string;
  allowPasswordChange: boolean;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  errors?: string[];
};
