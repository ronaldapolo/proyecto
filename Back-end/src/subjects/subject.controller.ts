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
import { CreateSubjectDto } from "./Dtos/create-subject.dto";
import { UpdateSubjectDto } from "./Dtos/update-subject.dto";
import { SubjectService } from "./subject.service";

@Controller("subjects")
export class SubjectController {
	constructor(private subjectService: SubjectService) {}

	@Get("")
	@HttpCode(HttpStatus.OK)
	findAll(@Query() params: any) {
		const response = this.subjectService.findAll();
		return response;

		// return {
		// 	data: response,
		// 	message: `Lista de materias`,
		// };
	}

	@Get(":id")
	@HttpCode(HttpStatus.OK)
	findOne(@Param("id", ParseIntPipe) id: number) {
		const response = this.subjectService.findOne(id);
		return response;

		// return {
		// 	data: response,
		// 	message: `Materia ${id}`,
		// };
	}

	@Post("")
	@HttpCode(HttpStatus.CREATED)
	create(@Body() payload: CreateSubjectDto) {
		const response =
			this.subjectService.create(payload);
		return response;

		// return {
		// 	data: response,
		// 	message: `Materia creada`,
		// };
	}

	@Put(":id")
	@HttpCode(HttpStatus.CREATED)
	update(
		@Param("id", ParseIntPipe) id: number,
		@Body() payload: UpdateSubjectDto
	) {
		const response = this.subjectService.update(
			id,
			payload
		);
		return response;

		// return {
		// 	data: response,
		// 	message: `La materia ${id} se actualizo`,
		// };
	}

	@Delete(":id")
	@HttpCode(HttpStatus.CREATED)
	delete(@Param("id", ParseIntPipe) id: number) {
		const response = this.subjectService.delete(id);
		return response;

		// return {
		// 	data: response,
		// 	message: `La materia ${id} se eliminó correctamente.`,
		// };
	}
}
