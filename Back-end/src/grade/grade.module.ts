import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GradeEntity } from "./entities/grade.entity";
import { GradeController } from "./grade.controller";
import { GradeService } from "./grade.service";

@Module({
	imports: [TypeOrmModule.forFeature([GradeEntity])],
	controllers: [GradeController],
	providers: [GradeService],
	exports: [GradeService],
})
export class GradeModule {}
