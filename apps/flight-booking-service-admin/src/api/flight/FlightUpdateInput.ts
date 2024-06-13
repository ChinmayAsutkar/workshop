import { BookingUpdateManyWithoutFlightsInput } from "./BookingUpdateManyWithoutFlightsInput";

export type FlightUpdateInput = {
  airlineName?: string | null;
  arrivalTime?: Date | null;
  bookings?: BookingUpdateManyWithoutFlightsInput;
  departureTime?: Date | null;
  flightNumber?: string | null;
  fromAirport?: string | null;
  price?: number | null;
  seatsAvailable?: number | null;
  toAirport?: string | null;
};
