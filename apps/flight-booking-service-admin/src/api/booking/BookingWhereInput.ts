import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FlightWhereUniqueInput } from "../flight/FlightWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingWhereInput = {
  bookingDate?: DateTimeNullableFilter;
  flight?: FlightWhereUniqueInput;
  id?: StringFilter;
  paymentStatus?: StringNullableFilter;
  totalPrice?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
