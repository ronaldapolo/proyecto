import {
	Injectable,
	NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateTeacherDto } from "./Dtos/create-teacher.dto";
import { UpdateTeacherDto } from "./Dtos/update-teacher.dto";
import { Repository } from "typeorm";
import { TeacherEntity } from "./entities/teacher.entity";

@Injectable()
export class TeacherService {
	constructor(
		@InjectRepository(TeacherEntity)
		private teacherRepo: Repository<TeacherEntity>
	) {}
	// Busca a todos los Profesores.
	findAll() {
		return this.teacherRepo;
	}

	// Busca a un Profesor.
	async findOne(id: number) {
		const teacher = await this.teacherRepo.findOne({
			where: { id: id },
		});
		if (teacher == null) {
			throw new NotFoundException(
				"Profesor no encontrado"
			);
		}
		return teacher;
	}

	create(payload: CreateTeacherDto) {
		const newTeacher = this.teacherRepo.create(payload);
		return this.teacherRepo.save(newTeacher);
	}

	async update(id: number, payload: UpdateTeacherDto) {
		const teacher = await this.teacherRepo.findOne({
			where: { id: id },
		});
		if (teacher === null) {
			throw new NotFoundException(
				"Docente no encontrado"
			);
		}
		this.teacherRepo.merge(teacher, payload);
		return this.teacherRepo.save(teacher);
	}

	remove(id: number) {
		return this.teacherRepo.softDelete(id);
	}
}
