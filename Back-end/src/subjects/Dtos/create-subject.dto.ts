import {
	IsString,
	MaxLength,
	MinLength,
} from "class-validator";

export class CreateSubjectDto {
	@IsString()
	@MinLength(10)
	@MaxLength(20)
	readonly name: string;
}
