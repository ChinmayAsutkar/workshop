import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OtpUpdateInput = {
  expirationDate?: Date | null;
  otpCode?: string | null;
  user?: UserWhereUniqueInput | null;
};
