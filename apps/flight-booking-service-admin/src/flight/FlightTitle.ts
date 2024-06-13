import { Flight as TFlight } from "../api/flight/Flight";

export const FLIGHT_TITLE_FIELD = "airlineName";

export const FlightTitle = (record: TFlight): string => {
  return record.airlineName?.toString() || String(record.id);
};
