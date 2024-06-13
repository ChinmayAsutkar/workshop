import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OtpWhereInput = {
  expirationDate?: DateTimeNullableFilter;
  id?: StringFilter;
  otpCode?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
