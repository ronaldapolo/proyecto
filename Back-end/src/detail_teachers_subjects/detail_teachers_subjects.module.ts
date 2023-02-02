import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DetailTeacherSubjectController } from "./detail_teacher_subject.controller";
import { DetailTeacherSubjectEntity } from "./entities/detail_teacher_subject.entity";
import { DetailTeacherSubjectService } from "./detail_teacher_subject.service";

@Module({
	imports: [
		TypeOrmModule.forFeature([
			DetailTeacherSubjectEntity,
		]),
	],
	controllers: [DetailTeacherSubjectController],
	providers: [DetailTeacherSubjectService],
	exports: [DetailTeacherSubjectService],
})
export class DetailTeachersSubjectsModule {}
