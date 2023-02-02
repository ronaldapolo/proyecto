import { IsDateString } from "class-validator";

export class CreateDetailLabTsubjectDto {
	@IsDateString()
	readonly date: Date;
}
