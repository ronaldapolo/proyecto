import {
	IsDate,
	IsDateString,
	IsMilitaryTime,
	IsString,
	MaxLength,
	MinLength,
} from "class-validator";

export class CreateDetailTeacherSubjectDto {
	@IsDateString()
	readonly date: string;

	@IsString()
	@MinLength(5)
	@MaxLength(10)
	readonly day: string;

	@IsString()
	@IsMilitaryTime()
	readonly hourStart: string;

	@IsString()
	@IsMilitaryTime()
	readonly hourFinish: string;
}
