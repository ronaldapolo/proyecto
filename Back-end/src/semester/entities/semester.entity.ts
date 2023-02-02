import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
} from "typeorm";

@Entity()
export class SemesterEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;
}
