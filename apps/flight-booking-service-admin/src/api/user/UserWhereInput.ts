import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OtpListRelationFilter } from "../otp/OtpListRelationFilter";

export type UserWhereInput = {
  bookings?: BookingListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  otps?: OtpListRelationFilter;
  username?: StringFilter;
};
