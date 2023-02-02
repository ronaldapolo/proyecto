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
import { CreateLaboratoryDto } from "./Dtos/create-laboratory.dto";
import { UpdateLaboratoryDto } from "./Dtos/update-laboratory.dto";
import { LaboratoryService } from "./laboratory.service";
@Controller("laboratories")
export class LaboratoryController {
	constructor(
		private laboratoryService: LaboratoryService
	) {}

	@Get("")
	@HttpCode(HttpStatus.OK)
	findAll(@Query() params: any) {
		const response = this.laboratoryService.findAll();
		return response;

		/*return {
			data: response,
			message: `Lista de laboratorios`,
		};*/
	}

	@Get(":id")
	@HttpCode(HttpStatus.OK)
	findOne(@Param("id", ParseIntPipe) id: number) {
		const response = this.laboratoryService.findOne(id);
		return response;

		/*return {
			data: response,
			message: `Laboratorio ${id}`,
		};*/
	}

	@Post("")
	@HttpCode(HttpStatus.CREATED)
	create(@Body() payload: CreateLaboratoryDto) {
		const response =
			this.laboratoryService.create(payload);
		return response;

		/*return {
			data: response,
			message: `Laboratorio creado`,
		};*/
	}

	@Put(":id")
	@HttpCode(HttpStatus.CREATED)
	update(
		@Param("id", ParseIntPipe) id: number,
		@Body() payload: UpdateLaboratoryDto
	) {
		const response = this.laboratoryService.update(
			id,
			payload
		);
		return response;

		/*return {
			data: response,
			message: `El laboratorio: ${id} se actualizo`,
		};*/
	}

	@Delete(":id")
	@HttpCode(HttpStatus.CREATED)
	delete(@Param("id", ParseIntPipe) id: number) {
		const response = this.laboratoryService.delete(id);
		return response;

		/*return {
			data: response,
			message: `El laboratorio ${id} se eliminó correctamente.`,
		};*/
	}
}
