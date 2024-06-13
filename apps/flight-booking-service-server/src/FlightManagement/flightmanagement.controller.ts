import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FlightManagementService } from "./flightmanagement.service";

@swagger.ApiTags("flightManagements")
@common.Controller("flightManagements")
export class FlightManagementController {
  constructor(protected readonly service: FlightManagementService) {}

  @common.Get("/:id/create-flight")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateFlight(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateFlight(body);
      }

  @common.Delete("/flights/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteFlight(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.DeleteFlight(body);
      }

  @common.Get("/:id/read-flight-details")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ReadFlightDetails(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ReadFlightDetails(body);
      }

  @common.Get("/:id/update-flight-details")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateFlightDetails(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.UpdateFlightDetails(body);
      }
}
