/* eslint-disable prettier/prettier */
import {
	Injectable,
	NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateDetailTeacherSubjectDto } from "./Dtos/create-detail_teacher_subject.dto";
import { UpdateDetailTeacherSubject } from "./Dtos/update-detail_teacher_subject.dto";
import { Repository } from "typeorm";
import { DetailTeacherSubjectEntity } from "./entities/detail_teacher_subject.entity";

@Injectable()
export class DetailTeacherSubjectService {
	constructor(
		@InjectRepository(DetailTeacherSubjectEntity)
		private detailTeachersSubjectRepo: Repository<DetailTeacherSubjectEntity>
	) {}

	// Busca a todos los Detalles de Profesores y Materias.
	async findAll() {
		return await this.detailTeachersSubjectRepo;
	}

	// Busca a un Detalles de Profesor y Materias.
	async findOne(id: number) {
		const teacherSubject =
			await this.detailTeachersSubjectRepo.findOne({
				where: { id: id },
			});
		if (teacherSubject === null) {
			throw new NotFoundException(
				"Detalle docente_asignatura no encontrada"
			);
		}
		return teacherSubject;
	}

	// Crea a un Detalles de Profesor y Materias.
	create(payload: CreateDetailTeacherSubjectDto) {
		const newTeacher =
			this.detailTeachersSubjectRepo.create(payload);
		return this.detailTeachersSubjectRepo.save(
			newTeacher
		);
	}

	// Actualiza a un Detalles de Profesor y Materias.
	async update(
		id: number,
		payload: UpdateDetailTeacherSubject
	) {
		const teacherSubject =
			await this.detailTeachersSubjectRepo.findOne({
				where: { id: id },
			});
		if (teacherSubject === null) {
			throw new NotFoundException(
				"Detalle docente_asignatura no encontrada"
			);
		}
		this.detailTeachersSubjectRepo.merge(
			teacherSubject,
			payload
		);
		return this.detailTeachersSubjectRepo.save(
			teacherSubject
		);
	}

	// Elimina a un Detalles de Profesor y Materias.
	delete(id: number) {
		return this.detailTeachersSubjectRepo.delete(id);
	}
}
