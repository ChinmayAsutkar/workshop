import { Module } from "@nestjs/common";
import { FlightManagementService } from "./flightmanagement.service";
import { FlightManagementController } from "./flightmanagement.controller";
import { FlightManagementResolver } from "./flightmanagement.resolver";

@Module({
  controllers: [FlightManagementController],
  providers: [FlightManagementService, FlightManagementResolver],
  exports: [FlightManagementService],
})
export class FlightManagementModule {}
