import { SortOrder } from "../../util/SortOrder";

export type FlightOrderByInput = {
  airlineName?: SortOrder;
  arrivalTime?: SortOrder;
  createdAt?: SortOrder;
  departureTime?: SortOrder;
  flightNumber?: SortOrder;
  fromAirport?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  seatsAvailable?: SortOrder;
  toAirport?: SortOrder;
  updatedAt?: SortOrder;
};
