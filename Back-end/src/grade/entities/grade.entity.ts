import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class GradeEntity {
	@PrimaryGeneratedColumn()
	id: number;

	//fk_Semestre
	//fk_carrera
	//fk_jornada
	//fk_paralelo

	@Column()
	numberStudents: number;
}
