import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OtpCreateInput = {
  expirationDate?: Date | null;
  otpCode?: string | null;
  user?: UserWhereUniqueInput | null;
};
