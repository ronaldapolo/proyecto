import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ShiftController } from "./shift.controller";
import { ShiftEntity } from "./entities/shift.entity";
import { ShiftService } from "./shift.service";

@Module({
	imports: [TypeOrmModule.forFeature([ShiftEntity])],
	controllers: [ShiftController],
	providers: [ShiftService],
	exports: [ShiftService],
})
export class ShiftModule {}
