import {
	Injectable,
	NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateDetailLabTsubjectDto } from "./Dtos/create-detail-tsubject.dto";
import { UpdateDetailLabTsubjectDto } from "./Dtos/update-detail-tsubject.dto";
import { Repository } from "typeorm";
import { DetailLabTsubjectEntity } from "./entities/detail-lab-tsubject.entity";

@Injectable()
export class DetailLabTsubjectService {
	constructor(
		@InjectRepository(DetailLabTsubjectEntity)
		private dtltSubjectsRepo: Repository<DetailLabTsubjectEntity>
	) {}

	// Busca a todos los Detalle Laboratorio.
	async findAll() {
		return await this.dtltSubjectsRepo;
	}

	// Busca a un Detalle Laboratorio.
	async findOne(id: number) {
		const dtltSubjects =
			await this.dtltSubjectsRepo.findOne({
				where: { id: id },
			});
		if (dtltSubjects == null) {
			throw new NotFoundException(
				"Detalle Laboratorio no encontrado"
			);
		}
		return dtltSubjects;
	}

	// Crea a un Detalle Laboratorio.
	create(payload: CreateDetailLabTsubjectDto) {
		const newDtltSubjects =
			this.dtltSubjectsRepo.create(payload);
		return this.dtltSubjectsRepo.save(newDtltSubjects);
	}

	// Actualiza a un Detalle Laboratorio.
	async update(
		id: number,
		payload: UpdateDetailLabTsubjectDto
	) {
		const dtltSubjects =
			await this.dtltSubjectsRepo.findOne({
				where: { id: id },
			});
		if (dtltSubjects === null) {
			throw new NotFoundException(
				"Detalle Laboratorio no encontrado"
			);
		}
		this.dtltSubjectsRepo.merge(dtltSubjects, payload);
		return this.dtltSubjectsRepo.save(dtltSubjects);
	}

	// Elimina a un Detalle Laboratorio.
	delete(id: number) {
		return this.dtltSubjectsRepo.delete(id);
	}
}
