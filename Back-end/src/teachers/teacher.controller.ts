import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	ParseIntPipe,
	Post,
	Put,
	Query,
} from "@nestjs/common";
import { CreateTeacherDto } from "./Dtos/create-teacher.dto";
import { UpdateTeacherDto } from "./Dtos/update-teacher.dto";
import { TeacherService } from "./teacher.service";
@Controller("teachers")
export class TeacherController {
	constructor(private teacherService: TeacherService) { }

	@Get("")
	@HttpCode(HttpStatus.OK)
	findAll() {
		const response = this.teacherService.findAll();
		// return response;

		return {
			data: response,
			message: `Lista de Docentes`,
		};
	}

	@Get(":id")
	@HttpCode(HttpStatus.OK)
	findOne(@Param("id", ParseIntPipe) id: number) {
		const response = this.teacherService.findOne(id);
		// return response;

		return {
			data: response,
			message: `Docente ${id}`,
		};
	}

	@Post("")
	@HttpCode(HttpStatus.CREATED)
	create(@Body() payload: CreateTeacherDto) {
		const response =
			this.teacherService.create(payload);
		// return response;

		return {
			data: response,
			message: `Docente creado`,
		};
	}

	@Put(":id")
	@HttpCode(HttpStatus.CREATED)
	update(
		@Param("id", ParseIntPipe) id: number,
		@Body() payload: UpdateTeacherDto
	) {
		const response = this.teacherService.update(
			id,
			payload
		);
		// return response;

		return {
			data: response,
			message: `El Docente ${id} se actualizo`,
		};
	}

	@Delete(":id")
	@HttpCode(HttpStatus.CREATED)
	remove(@Param("id", ParseIntPipe) id: number) {
		const response = this.teacherService.remove(id);
		// return response;

		return {
			data: response,
			message: `El Docente ${id} se eliminó correctamente.`,
		};
	}
}
