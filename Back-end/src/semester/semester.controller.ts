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
import { CreateSemesterDto } from "./Dtos/create-semester.dto";
import { UpdateSemesterDto } from "./Dtos/update-semester.dto";
import { SemesterService } from "./semester.service";
@Controller("semesters")
export class SemesterController {
	constructor(private semesterService: SemesterService) {}

	@Get("")
	@HttpCode(HttpStatus.OK)
	findAll(@Query() params: any) {
		const response = this.semesterService.findAll();
		// return response;

		return {
			data: response,
			message: `Lista de Semestres`,
		};
	}

	@Get(":id")
	@HttpCode(HttpStatus.OK)
	findOne(@Param("id", ParseIntPipe) id: number) {
		const response = this.semesterService.findOne(id);
		// return response;

		return {
			data: response,
			message: `Semestre ${id}`,
		};
	}

	@Post("")
	@HttpCode(HttpStatus.CREATED)
	create(@Body() payload: CreateSemesterDto) {
		const response =
			this.semesterService.create(payload);
		// return response;

		return {
			data: response,
			message: `Semestre creado`,
		};
	}

	@Put(":id")
	@HttpCode(HttpStatus.CREATED)
	update(
		@Param("id", ParseIntPipe) id: number,
		@Body() payload: UpdateSemesterDto
	) {
		const response = this.semesterService.update(
			id,
			payload
		);
		// return response;

		return {
			data: response,
			message: `El Semestre: ${id} se actualizo`,
		};
	}

	@Delete(":id")
	@HttpCode(HttpStatus.CREATED)
	delete(@Param("id", ParseIntPipe) id: number) {
		const response = this.semesterService.delete(id);
		// return response;

		return {
			data: response,
			message: `El Semestre ${id} se eliminó correctamente.`,
		};
	}
}
