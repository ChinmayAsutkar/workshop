import { Booking } from "../booking/Booking";

export type Flight = {
  airlineName: string | null;
  arrivalTime: Date | null;
  bookings?: Array<Booking>;
  createdAt: Date;
  departureTime: Date | null;
  flightNumber: string | null;
  fromAirport: string | null;
  id: string;
  price: number | null;
  seatsAvailable: number | null;
  toAirport: string | null;
  updatedAt: Date;
};
