import { Injectable } from "@nestjs/common";

@Injectable()
export class FlightManagementService {
  constructor() {}
  async CreateFlight(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async DeleteFlight(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ReadFlightDetails(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UpdateFlightDetails(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
