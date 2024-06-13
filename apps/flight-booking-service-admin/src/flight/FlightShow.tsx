import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { FLIGHT_TITLE_FIELD } from "./FlightTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const FlightShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="airlineName" source="airlineName" />
        <TextField label="arrivalTime" source="arrivalTime" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="departureTime" source="departureTime" />
        <TextField label="flightNumber" source="flightNumber" />
        <TextField label="fromAirport" source="fromAirport" />
        <TextField label="ID" source="id" />
        <TextField label="price" source="price" />
        <TextField label="seatsAvailable" source="seatsAvailable" />
        <TextField label="toAirport" source="toAirport" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Booking"
          target="flightId"
          label="Bookings"
        >
          <Datagrid rowClick="show">
            <TextField label="bookingDate" source="bookingDate" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Flight"
              source="flight.id"
              reference="Flight"
            >
              <TextField source={FLIGHT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="paymentStatus" source="paymentStatus" />
            <TextField label="totalPrice" source="totalPrice" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
