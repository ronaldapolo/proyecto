import { IsString, IsNumber } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class CreateParallelDto {
	@IsString()
	readonly name: string;
}
