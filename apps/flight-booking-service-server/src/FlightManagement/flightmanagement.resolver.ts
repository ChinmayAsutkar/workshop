import * as graphql from "@nestjs/graphql";
import { FlightManagementService } from "./flightmanagement.service";

export class FlightManagementResolver {
  constructor(protected readonly service: FlightManagementService) {}

  @graphql.Query(() => String)
  async CreateFlight(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateFlight(args);
  }

  @graphql.Mutation(() => String)
  async DeleteFlight(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.DeleteFlight(args);
  }

  @graphql.Query(() => String)
  async ReadFlightDetails(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ReadFlightDetails(args);
  }

  @graphql.Query(() => String)
  async UpdateFlightDetails(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UpdateFlightDetails(args);
  }
}
