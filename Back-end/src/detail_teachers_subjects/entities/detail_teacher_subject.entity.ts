import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class DetailTeacherSubjectEntity {
	@PrimaryGeneratedColumn()
	id: number;

	//fk_docente
	//fk_materia
	//fk_curso

	@Column()
	date: Date;
	@Column()
	day: string;
	@Column()
	hourStart: string;
	@Column()
	hourFinish: string;
}
