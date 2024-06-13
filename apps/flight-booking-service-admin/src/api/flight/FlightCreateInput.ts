import { BookingCreateNestedManyWithoutFlightsInput } from "./BookingCreateNestedManyWithoutFlightsInput";

export type FlightCreateInput = {
  airlineName?: string | null;
  arrivalTime?: Date | null;
  bookings?: BookingCreateNestedManyWithoutFlightsInput;
  departureTime?: Date | null;
  flightNumber?: string | null;
  fromAirport?: string | null;
  price?: number | null;
  seatsAvailable?: number | null;
  toAirport?: string | null;
};
