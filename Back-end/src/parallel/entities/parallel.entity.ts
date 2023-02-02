import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class ParallelEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;
}
