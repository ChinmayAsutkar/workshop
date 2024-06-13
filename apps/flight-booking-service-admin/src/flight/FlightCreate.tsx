import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { BookingTitle } from "../booking/BookingTitle";

export const FlightCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="airlineName" source="airlineName" />
        <DateTimeInput label="arrivalTime" source="arrivalTime" />
        <ReferenceArrayInput
          source="bookings"
          reference="Booking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookingTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="departureTime" source="departureTime" />
        <TextInput label="flightNumber" source="flightNumber" />
        <TextInput label="fromAirport" source="fromAirport" />
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="seatsAvailable" source="seatsAvailable" />
        <TextInput label="toAirport" source="toAirport" />
      </SimpleForm>
    </Create>
  );
};
