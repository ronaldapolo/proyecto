import {
	Injectable,
	NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateShiftDto } from "./Dtos/create-shift.dto";
import { UpdateShiftDto } from "./Dtos/update-shift.dto";
import { Repository } from "typeorm";
import { ShiftEntity } from "./entities/shift.entity";

@Injectable()
export class ShiftService {
	constructor(
		@InjectRepository(ShiftEntity)
		private shiftRepo: Repository<ShiftEntity>
	) {}

	// Busca a todas las Jornadas.
	async findAll() {
		return await this.shiftRepo;
	}

	// Busca a una Jornada.
	async findOne(id: number) {
		const shift = await this.shiftRepo.findOne({
			where: { id: id },
		});
		if (shift == null) {
			throw new NotFoundException(
				"Jornada no encontrada."
			);
		}
		return shift;
	}

	// Crea a una Jornada.
	create(payload: CreateShiftDto) {
		const newShift = this.shiftRepo.create(payload);
		return this.shiftRepo.save(newShift);
	}

	// Actualiza a una Jornada.
	async update(id: number, payload: UpdateShiftDto) {
		const shift = await this.shiftRepo.findOne({
			where: { id: id },
		});
		if (shift == null) {
			throw new NotFoundException(
				"Jornada no encontrada."
			);
		}
		this.shiftRepo.merge(shift, payload);
		return this.shiftRepo.save(shift);
	}

	// Elimina a una Jornada.
	delete(id: number) {
		return this.shiftRepo.delete(id);
	}
}
