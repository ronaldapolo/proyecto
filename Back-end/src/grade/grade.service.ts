import { Injectable } from "@nestjs/common";
import { CreateGradeDto } from "./Dtos/create-grade.dto";
import { UpdateGradeDto } from "./Dtos/update-grade.dto";

@Injectable()
export class GradeService {
	// Busca todos los cursos.
	findAll() {
		throw new Error("Method not implemented.");
	}

	// Busca un curso.
	findOne(id: number) {
		throw new Error("Method not implemented.");
	}

	// Crea un curso.
	create(payload: CreateGradeDto) {
		throw new Error("Method not implemented.");
	}

	// Actualiza un curso.
	update(id: number, payload: UpdateGradeDto) {
		throw new Error("Method not implemented.");
	}

	// Elimina un curso.
	delete(id: number) {
		throw new Error("Method not implemented.");
	}
}
