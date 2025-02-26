export interface User {
  id: string;
  name: string;
  email: string;
  subscriptionPlan: "free" | "basic" | "premium";
}

export interface LoginCredentials {
  username: string;
  password: string;
  rememberMe?: boolean;
}

export const DEFAULT_CREDENTIALS = {
  username: "123456",
  password: "qwerty",
};
