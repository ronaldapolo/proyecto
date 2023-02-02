import {
	IsString,
	MaxLength,
	MinLength,
} from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class CreateLabStateDto {
	@IsString()
	@MinLength(10)
	@MaxLength(30)
	readonly state: string;

	@IsString()
	@MinLength(20)
	@MaxLength(100)
	readonly observations: string;
}
