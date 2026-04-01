export type UserRole = "USER" | "ADMIN";

export type loginPayload = {
  phone: string;
  password: string;
};

export type loginUserInfo = {
  id: string;
  phone: string;
  name: string;
};

export type loginResponse = {
  success: boolean;
  message: string;
  data: {
    token: string;
    role: string;
    user: loginUserInfo;
  };
};

export type currentUser = {
  id: string;
  phone: string;
  name: string;
  role: UserRole;
  metersCount: number;
  createdAt: string;
};

export type currentUserApiResponse = {
  success: boolean;
  data: currentUser;
};

export type authStateUser = {
  token: string;
  role: UserRole;
  user: currentUser;
};