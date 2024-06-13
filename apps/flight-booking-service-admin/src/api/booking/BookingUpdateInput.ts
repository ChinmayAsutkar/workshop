import { FlightWhereUniqueInput } from "../flight/FlightWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingUpdateInput = {
  bookingDate?: Date | null;
  flight?: FlightWhereUniqueInput | null;
  paymentStatus?: string | null;
  totalPrice?: number | null;
  user?: UserWhereUniqueInput | null;
};
