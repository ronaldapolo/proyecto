import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfessionDto } from './dto/create-profession.dto';
import { UpdateProfessionDto } from './dto/update-profession.dto';
import { ProfessionEntity } from './entities/profession.entity';

@Injectable()
export class ProfessionService {
  constructor(
    @InjectRepository(ProfessionEntity)
    private professionRepo:Repository<ProfessionEntity>
  ) {}

	create(payload: CreateProfessionDto) {
		const newProfession = this.professionRepo.create(payload);
		return this.professionRepo.save(newProfession);
	}

  findAll() {
		return this.professionRepo;
	}

	async update(id: number, payload: UpdateProfessionDto) {
		const profession = await this.professionRepo.findOne({
			where: { id: id },
		});
		if (profession === null) {
			throw new NotFoundException(
				"Profesion no encontrada"
			);
		}
		this.professionRepo.merge(profession, payload);
		return this.professionRepo.save(profession);
	}

  remove(id: number) {
    return this.professionRepo.softDelete(id);
  }
}
