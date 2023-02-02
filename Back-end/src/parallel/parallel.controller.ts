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
import { ParallelService } from "./parallel.service";
import { CreateParallelDto } from "./Dtos/create-parallel.dto";
import { UpdateParallelDto } from "./Dtos/update-parallel.dto";
@Controller("parallels")
export class ParallelController {
	constructor(private parallelService: ParallelService) {}

	@Get("")
	@HttpCode(HttpStatus.OK)
	findAll(@Query() params: any) {
		const response = this.parallelService.findAll();
		// return response;

		return {
			data: response,
			message: `Lista de Paralelos`,
		};
	}

	@Get(":id")
	@HttpCode(HttpStatus.OK)
	findOne(@Param("id", ParseIntPipe) id: number) {
		const response = this.parallelService.findOne(id);
		// return response;

		return {
			data: response,
			message: `Paralelo ${id}`,
		};
	}

	@Post("")
	@HttpCode(HttpStatus.CREATED)
	create(@Body() payload: CreateParallelDto) {
		const response =
			this.parallelService.create(payload);
		// return response;

		return {
			data: response,
			message: `Paralelo creado`,
		};
	}

	@Put(":id")
	@HttpCode(HttpStatus.CREATED)
	update(
		@Param("id", ParseIntPipe) id: number,
		@Body() payload: UpdateParallelDto
	) {
		const response = this.parallelService.update(
			id,
			payload
		);
		// return response;

		return {
			data: response,
			message: `El Paralelo: ${id} se actualizo`,
		};
	}

	@Delete(":id")
	@HttpCode(HttpStatus.CREATED)
	delete(@Param("id", ParseIntPipe) id: number) {
		const response = this.parallelService.delete(id);
		// return response;

		return {
			data: response,
			message: `El paralelo ${id} se eliminó correctamente.`,
		};
	}
}
