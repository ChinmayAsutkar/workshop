import { Booking } from "../booking/Booking";
import { Otp } from "../otp/Otp";
import { JsonValue } from "type-fest";

export type User = {
  bookings?: Array<Booking>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  otps?: Array<Otp>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
