import {
	Injectable,
	NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCareerDto } from "./Dtos/create-career.dto";
import { UpdateCareerDto } from "./Dtos/update-career.dto";
import { Repository } from "typeorm";
import { CareerEntity } from "./entities/career.entity";

@Injectable()
export class CareerService {
	constructor(
		@InjectRepository(CareerEntity)
		private careerRepo: Repository<CareerEntity>
	) {}

	// Busca a todos las Carreras.
	async findAll() {
		return await this.careerRepo;
	}

	// Busca a una Carrera.
	async findOne(id: number) {
		const career = this.careerRepo.findOne({
			where: { id: id },
		});
		if (career == null) {
			throw new NotFoundException(
				"La Carrera no fue encontrada."
			);
		}
		return career;
	}

	// Crea a una Carrera.
	create(payload: CreateCareerDto) {
		const newCarrer = this.careerRepo.create(payload);
		return this.careerRepo.save(newCarrer);
	}

	// Actualiza a una Carrera.
	async update(id: number, payload: UpdateCareerDto) {
		const career = await this.careerRepo.findOne({
			where: { id: id },
		});
		if (career === null) {
			throw new NotFoundException(
				"La Carrera no fue encontrada."
			);
		}
		this.careerRepo.merge(career, payload);
		return this.careerRepo.save(career);
	}

	// Elimina a una Carrera.
	delete(id: number) {
		return this.careerRepo.delete(id);
	}
}
