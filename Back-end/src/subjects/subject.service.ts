import {
	Injectable,
	NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateSubjectDto } from "./Dtos/create-subject.dto";
import { UpdateSubjectDto } from "./Dtos/update-subject.dto";
import { Repository } from "typeorm";
import { SubjectEntity } from "./entities/subject.entity";

@Injectable()
export class SubjectService {
	constructor(
		@InjectRepository(SubjectEntity)
		private subjectRepo: Repository<SubjectEntity>
	) {}

	// Busca a todos las Materias.
	async findAll() {
		return await this.subjectRepo.find();
	}

	// Busca a una Materia.
	async findOne(id: number) {
		const subject = await this.subjectRepo.findOne({
			where: { id: id },
		});
		if (subject == null) {
			throw new NotFoundException(
				"Asignatura no encontrada"
			);
		}
		return subject;
	}

	// Crea a una Materia.
	create(payload: CreateSubjectDto) {
		const newSubject = this.subjectRepo.create(payload);
		return this.subjectRepo.save(newSubject);
	}

	// Actualiza a una Materia
	async update(id: number, payload: UpdateSubjectDto) {
		const subject = await this.subjectRepo.findOne({
			where: { id: id },
		});
		if (subject === null) {
			throw new NotFoundException(
				"Materia no encontrado"
			);
		}
		this.subjectRepo.merge(subject, payload);
		return this.subjectRepo.save(subject);
	}

	// Elimina a una Materia
	delete(id: number) {
		return this.subjectRepo.delete(id);
	}
}
