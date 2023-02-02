import {
	Injectable,
	NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateSemesterDto } from "./Dtos/create-semester.dto";
import { UpdateSemesterDto } from "./Dtos/update-semester.dto";
import { Repository } from "typeorm";
import { SemesterEntity } from "./entities/semester.entity";

@Injectable()
export class SemesterService {
	constructor(
		@InjectRepository(SemesterEntity)
		private semesterRepo: Repository<SemesterEntity>
	) {}

	// Busca a todos los Semestres.
	async findAll() {
		return await this.semesterRepo;
	}

	// Busca a un Semestre.
	findOne(id: number) {
		const semester = this.semesterRepo.findOne({
			where: { id: id },
		});
		if (semester == null) {
			throw new NotFoundException(
				"Semestre no encontrado"
			);
		}
		return semester;
	}

	// Crea a un Semestre.
	create(payload: CreateSemesterDto) {
		const newSemester =
			this.semesterRepo.create(payload);
		return this.semesterRepo.save(newSemester);
	}

	// Actualiza a un Semestre.
	async update(id: number, payload: UpdateSemesterDto) {
		const semester = await this.semesterRepo.findOne({
			where: { id: id },
		});
		if (semester == null) {
			throw new NotFoundException(
				"Semestre no encontrado"
			);
		}
		this.semesterRepo.merge(semester, payload);
		return this.semesterRepo.save(semester);
	}

	// Elimina a un Semestre.
	delete(id: number) {
		return this.semesterRepo.delete(id);
	}
}
