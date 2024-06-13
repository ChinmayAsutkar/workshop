import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type FlightWhereInput = {
  airlineName?: StringNullableFilter;
  arrivalTime?: DateTimeNullableFilter;
  bookings?: BookingListRelationFilter;
  departureTime?: DateTimeNullableFilter;
  flightNumber?: StringNullableFilter;
  fromAirport?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  seatsAvailable?: IntNullableFilter;
  toAirport?: StringNullableFilter;
};
