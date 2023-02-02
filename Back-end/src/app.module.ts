import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CareersModule } from "./careers/careers.module";
import { DetailTeachersSubjectsModule } from "./detail_teachers_subjects/detail_teachers_subjects.module";
import { GradeModule } from "./grade/grade.module";
import { LabotoryModule } from "./laboratories/laboratory.module";
import { LabStateModule } from "./lab_state_subject/lab_state.module";
import { ParallelModule } from "./parallel/parallel.module";
import { SubjectModule } from "./subjects/subject.module";
import { DetailLabTsubjectModule } from "./detail_lab_tsubject/detail_lab_tsubject.module";
import { ShiftModule } from "./shifts/shift.module";
import { SemesterModule } from "./semester/semester.module";
import { TeacherModule } from "./teachers/teacher.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LocationModule } from './location/location.module';
import { ProfessionModule } from './profession/profession.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: "postgres",
			host: "localhost",
			port: 5432,
			username: "postgres",
			//Solo descomentar la con su contraseña y no borrar
			password: "12345678", //Cris
			//password: "Barbarita19@2021@", //Emily
			//password: "...", //Jenny
			//password: "...", //Jona
			database: "prueba_GELABY",
			synchronize: true,
			logging: true,
			autoLoadEntities: true,
		}),
		CareersModule,
		DetailTeachersSubjectsModule,
		GradeModule,
		LabotoryModule,
		LabStateModule,
		ParallelModule,
		SubjectModule,
		DetailLabTsubjectModule,
		ShiftModule,
		SemesterModule,
		TeacherModule,
		LocationModule,
		ProfessionModule,
	],

	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
