import {
	IsNumber,
	IsString,
	MaxLength,
	Min,
	MinLength,
} from "class-validator";

export class CreateLaboratoryDto {
	@IsString()
	@MinLength(10)
	@MaxLength(20)
	readonly name: string;

	@IsNumber()
	@Min(0)
	readonly capacity: number;

	@IsString()
	@MinLength(20)
	@MaxLength(100)
	readonly description: string;
}
