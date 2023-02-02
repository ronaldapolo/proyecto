import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LabStateEntity } from "./entities/lab_state.entity";
import { LabStateController } from "./lab_state.controller";
import { LabStateService } from "./lab_state.service";

@Module({
	imports: [TypeOrmModule.forFeature([LabStateEntity])],
	controllers: [LabStateController],
	providers: [LabStateService],
	exports: [LabStateService],
})
export class LabStateModule {}
