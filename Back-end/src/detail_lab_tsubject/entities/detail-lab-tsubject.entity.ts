import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class DetailLabTsubjectEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	date: Date;

	//TODO: aqui van las fk de laboratorio y Dmateria
}
