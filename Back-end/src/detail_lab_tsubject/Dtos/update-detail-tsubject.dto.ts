import { PartialType } from "@nestjs/swagger";
import { CreateDetailLabTsubjectDto } from "./create-detail-tsubject.dto";

export class UpdateDetailLabTsubjectDto extends PartialType(
	CreateDetailLabTsubjectDto
) {}
