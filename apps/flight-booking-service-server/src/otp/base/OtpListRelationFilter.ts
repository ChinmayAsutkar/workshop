/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OtpWhereInput } from "./OtpWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class OtpListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => OtpWhereInput,
  })
  @ValidateNested()
  @Type(() => OtpWhereInput)
  @IsOptional()
  @Field(() => OtpWhereInput, {
    nullable: true,
  })
  every?: OtpWhereInput;

  @ApiProperty({
    required: false,
    type: () => OtpWhereInput,
  })
  @ValidateNested()
  @Type(() => OtpWhereInput)
  @IsOptional()
  @Field(() => OtpWhereInput, {
    nullable: true,
  })
  some?: OtpWhereInput;

  @ApiProperty({
    required: false,
    type: () => OtpWhereInput,
  })
  @ValidateNested()
  @Type(() => OtpWhereInput)
  @IsOptional()
  @Field(() => OtpWhereInput, {
    nullable: true,
  })
  none?: OtpWhereInput;
}
export { OtpListRelationFilter as OtpListRelationFilter };
