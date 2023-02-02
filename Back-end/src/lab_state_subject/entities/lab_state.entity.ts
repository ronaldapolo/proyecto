import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class LabStateEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	state: string;

	@Column()
	observations: string;
}
