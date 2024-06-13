import { User } from "../user/User";

export type Otp = {
  createdAt: Date;
  expirationDate: Date | null;
  id: string;
  otpCode: string | null;
  updatedAt: Date;
  user?: User | null;
};
