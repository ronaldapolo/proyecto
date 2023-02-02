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
import { CreateDetailLabTsubjectDto } from "./Dtos/create-detail-tsubject.dto";
import { UpdateDetailLabTsubjectDto } from "./Dtos/update-detail-tsubject.dto";
import { DetailLabTsubjectService } from "./detail-lab-tsubject.service";

@Controller("detail-lab-tsubjects")
export class DetailLabTsubjectController {
	constructor(
		private detailLabTsubjectService: DetailLabTsubjectService
	) {}

	@Get("")
	@HttpCode(HttpStatus.OK)
	findAll(@Query() params: any) {
		const response =
			this.detailLabTsubjectService.findAll();
		// return response;

		return {
			data: response,
			message: `Lista de los detalles`,
		};
	}

	@Get(":id")
	@HttpCode(HttpStatus.OK)
	findOne(@Param("id", ParseIntPipe) id: number) {
		const response =
			this.detailLabTsubjectService.findOne(id);
		// return response;

		return {
			data: response,
			message: `Detalle ${id}`,
		};
	}

	@Post("")
	@HttpCode(HttpStatus.CREATED)
	create(@Body() payload: CreateDetailLabTsubjectDto) {
		const response =
			this.detailLabTsubjectService.create(payload);
		// return response;

		return {
			data: response,
			message: `Detalle creado`,
		};
	}

	@Put(":id")
	@HttpCode(HttpStatus.CREATED)
	update(
		@Param("id", ParseIntPipe) id: number,
		@Body() payload: UpdateDetailLabTsubjectDto
	) {
		const response =
			this.detailLabTsubjectService.update(
				id,
				payload
			);
		// return response;

		return {
			data: response,
			message: `El detalle: ${id} se actualizo`,
		};
	}

	@Delete(":id")
	@HttpCode(HttpStatus.CREATED)
	delete(@Param("id", ParseIntPipe) id: number) {
		const response =
			this.detailLabTsubjectService.delete(id);
		// return response;

		return {
			data: response,
			message: `El detalle ${id} se eliminó correctamente.`,
		};
	}
}
