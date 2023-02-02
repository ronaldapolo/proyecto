import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class CareerEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;
}
