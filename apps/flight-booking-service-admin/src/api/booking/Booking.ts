import { Flight } from "../flight/Flight";
import { User } from "../user/User";

export type Booking = {
  bookingDate: Date | null;
  createdAt: Date;
  flight?: Flight | null;
  id: string;
  paymentStatus: string | null;
  totalPrice: number | null;
  updatedAt: Date;
  user?: User | null;
};
