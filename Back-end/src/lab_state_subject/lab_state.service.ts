import {
	Injectable,
	NotFoundException,
} from "@nestjs/common";
import { CreateLabStateDto } from "./Dtos/create-lab_state.dto";
import { UpdateLabStateDto } from "./Dtos/update-lab_state.dto";
import { Repository } from "typeorm";
import { LabStateEntity } from "./entities/lab_state.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class LabStateService {
	constructor(
		@InjectRepository(LabStateEntity)
		private labStateRepo: Repository<LabStateEntity>
	) {}

	// Busca a todos los Estados Laboratorios.
	async findAll() {
		return await this.labStateRepo;
	}

	// Busca a un Estados Laboratorios.
	async findOne(id: number) {
		const labState = await this.labStateRepo.findOne({
			where: { id: id },
		});
		if (labState == null) {
			throw new NotFoundException(
				"Profesor no Estados Laboratorios"
			);
		}
		return labState;
	}

	// Crea a un Estados Laboratorios.
	create(payload: CreateLabStateDto) {
		const newLabState =
			this.labStateRepo.create(payload);
		return this.labStateRepo.save(newLabState);
	}

	// Actualiza a un Estados Laboratorios
	async update(id: number, payload: UpdateLabStateDto) {
		const labState = await this.labStateRepo.findOne({
			where: { id: id },
		});
		if (labState === null) {
			throw new NotFoundException(
				"Estados Laboratorios no encontrado"
			);
		}
		this.labStateRepo.merge(labState, payload);
		return this.labStateRepo.save(labState);
	}

	// Elimina a un Estados Laboratorios
	delete(id: number) {
		return this.labStateRepo.delete(id);
	}
}
