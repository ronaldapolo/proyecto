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
import { CreateShiftDto } from "./Dtos/create-shift.dto";
import { UpdateShiftDto } from "./Dtos/update-shift.dto";
import { ShiftService } from "./shift.service";
@Controller("shifts")
export class ShiftController {
	constructor(private shiftService: ShiftService) {}

	@Get("")
	@HttpCode(HttpStatus.OK)
	findAll(@Query() params: any) {
		const response = this.shiftService.findAll();
		// return response;

		return {
			data: response,
			message: `Lista de Jornadas`,
		};
	}

	@Get(":id")
	@HttpCode(HttpStatus.OK)
	findOne(@Param("id", ParseIntPipe) id: number) {
		const response = this.shiftService.findOne(id);
		// return response;

		return {
			data: response,
			message: `Jornada ${id}`,
		};
	}

	@Post("")
	@HttpCode(HttpStatus.CREATED)
	create(@Body() payload: CreateShiftDto) {
		const response = this.shiftService.create(payload);
		// return response;

		return {
			data: response,
			message: `Jornada creado`,
		};
	}

	@Put(":id")
	@HttpCode(HttpStatus.CREATED)
	update(
		@Param("id", ParseIntPipe) id: number,
		@Body() payload: UpdateShiftDto
	) {
		const response = this.shiftService.update(
			id,
			payload
		);
		// return response;

		return {
			data: response,
			message: `El Jornada: ${id} se actualizo`,
		};
	}

	@Delete(":id")
	@HttpCode(HttpStatus.CREATED)
	delete(@Param("id", ParseIntPipe) id: number) {
		const response = this.shiftService.delete(id);
		// return response;

		return {
			data: response,
			message: `El Jornada ${id} se eliminó correctamente.`,
		};
	}
}
