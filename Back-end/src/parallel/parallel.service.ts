import {
	Injectable,
	NotFoundException,
} from "@nestjs/common";
import { CreateParallelDto } from "./Dtos/create-parallel.dto";
import { UpdateParallelDto } from "./Dtos/update-parallel.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ParallelEntity } from "./entities/parallel.entity";

@Injectable()
export class ParallelService {
	constructor(
		@InjectRepository(ParallelEntity)
		private parallelRepo: Repository<ParallelEntity>
	) {}

	// Busca a todos los Paralelo.
	async findAll() {
		return await this.parallelRepo;
	}

	// Busca a un Paralelo.
	async findOne(id: number) {
		const parallel = await this.parallelRepo.findOne({
			where: { id: id },
		});
		if (parallel == null) {
			throw new NotFoundException(
				"Paralelo no encontrado"
			);
		}
		return parallel;
	}

	// Crea a un Paralelo.
	create(payload: CreateParallelDto) {
		const newParallel =
			this.parallelRepo.create(payload);
		return this.parallelRepo.save(newParallel);
	}

	// Actualiza a un Paralelo.
	async update(id: number, payload: UpdateParallelDto) {
		const parallel = await this.parallelRepo.findOne({
			where: { id: id },
		});
		if (parallel === null) {
			throw new NotFoundException(
				"Paralelo no encontrado"
			);
		}
		this.parallelRepo.merge(parallel, payload);
		return this.parallelRepo.save(parallel);
	}

	// Elimina a un Paralelo.
	delete(id: number) {
		return this.parallelRepo.delete(id);
	}
}
