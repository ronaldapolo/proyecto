import { PartialType } from "@nestjs/swagger";
import { CreateDetailTeacherSubjectDto } from "./create-detail_teacher_subject.dto";

export class UpdateDetailTeacherSubject extends PartialType(
	CreateDetailTeacherSubjectDto
) {}
