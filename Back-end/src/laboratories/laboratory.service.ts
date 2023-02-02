import {
	Injectable,
	NotFoundException,
} from "@nestjs/common";
import { CreateLaboratoryDto } from "./Dtos/create-laboratory.dto";
import { UpdateLaboratoryDto } from "./Dtos/update-laboratory.dto";
import { LaboratoryEntity } from "./entities/laboratory.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class LaboratoryService {
	constructor(
		@InjectRepository(LaboratoryEntity)
		private laboratoryRepo: Repository<LaboratoryEntity>
	) {}

	// Busca a todos los Laboratorioes.
	async findAll() {
		return await this.laboratoryRepo.find();
	}

	// Busca a un Laboratorio.
	async findOne(id: number) {
		const laboratory = await this.laboratoryRepo.findOne({
				where: { id: id },
			});
		if (laboratory == null) {
			throw new NotFoundException(
				"Laboratorio no encontrado"
			);
		}
		return laboratory;
	}

	// Crea a un Laboratorio.
	create(payload: CreateLaboratoryDto) {
		const newLaboratory = this.laboratoryRepo.create(payload);
		return this.laboratoryRepo.save(newLaboratory);
	}

	// Actualiza a un Laboratorio.
	async update(id: number, payload: UpdateLaboratoryDto) {
		const laboratory =
			await this.laboratoryRepo.findOne({
				where: { id: id },
			});
		if (laboratory === null) {
			throw new NotFoundException(
				"Laboratorio no encontrado"
			);
		}
		this.laboratoryRepo.merge(laboratory, payload);
		return this.laboratoryRepo.save(laboratory);
	}

	// Elimina a un Laboratorio.
	delete(id: number) {
		return this.laboratoryRepo.delete(id);
	}
}
