import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FlightList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Flights"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
