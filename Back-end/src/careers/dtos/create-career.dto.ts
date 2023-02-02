import {
	IsString,
	MaxLength,
	MinLength,
} from "class-validator";

export class CreateCareerDto {
	@IsString()
	@MinLength(5)
	@MaxLength(40)
	readonly name: string;
}
