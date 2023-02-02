import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CareerController } from "./career.controller";
import { CareerEntity } from "./entities/career.entity";
import { CareerService } from "./career.service";

@Module({
	imports: [TypeOrmModule.forFeature([CareerEntity])],
	controllers: [CareerController],
	providers: [CareerService],
	exports: [CareerService],
})
export class CareersModule {}
