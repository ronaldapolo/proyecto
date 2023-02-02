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
import { CreateLabStateDto } from "./Dtos/create-lab_state.dto";
import { UpdateLabStateDto } from "./Dtos/update-lab_state.dto";
import { LabStateService } from "./lab_state.service";
@Controller("lab-states")
export class LabStateController {
	constructor(private labStateService: LabStateService) {}

	@Get("")
	@HttpCode(HttpStatus.OK)
	findAll(@Query() params: any) {
		const response = this.labStateService.findAll();
		// return response;

		return {
			data: response,
			message: `Lista de laboratorios`,
		};
	}

	@Get(":id")
	@HttpCode(HttpStatus.OK)
	findOne(@Param("id", ParseIntPipe) id: number) {
		const response = this.labStateService.findOne(id);
		// return response;

		return {
			data: response,
			message: `Estado Laboratorio ${id}`,
		};
	}

	@Post("")
	@HttpCode(HttpStatus.CREATED)
	create(@Body() payload: CreateLabStateDto) {
		const response =
			this.labStateService.create(payload);
		// return response;

		return {
			data: response,
			message: `Estado de Laboratorio creado`,
		};
	}

	@Put(":id")
	@HttpCode(HttpStatus.CREATED)
	update(
		@Param("id", ParseIntPipe) id: number,
		@Body() payload: UpdateLabStateDto
	) {
		const response = this.labStateService.update(
			id,
			payload
		);
		// return response;

		return {
			data: response,
			message: `El estado laboratorio: ${id} se actualizo`,
		};
	}

	@Delete(":id")
	@HttpCode(HttpStatus.CREATED)
	delete(@Param("id", ParseIntPipe) id: number) {
		const response = this.labStateService.delete(id);
		// return response;

		return {
			data: response,
			message: `El estado de laboratorio ${id} se eliminó correctamente.`,
		};
	}
}
