import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
} from "typeorm";

@Entity()
export class TeacherEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column(
		'varchar', {
		name: 'identity_card', 
		unique: true, 
		comment: 'Numero de cedula del docente'
	})
	identityCard: number;

	@Column('varchar', {
		name: 'names',
		comment: 'Nombres del docente'
	})
	names: string;

	@Column('varchar', {
		name: 'last_names',
		comment: 'Apellidos del docente'
	})
	lastNames: string;

	@Column('varchar', {
		name: 'institutional_mail',
		comment: 'Correo institucional del docnete'
	})
	institutionalMail: string;

	@Column('int', {
		name: 'cell_phone',
		comment: 'Numero de telefono del docente'
	})
	cellPhone: number;

	@Column('boolean', {
		name: 'state',
		comment: 'Estado del docente. True=activo, False=inactivo'
	})
	state: boolean;

	@Column('boolean', {
		name: 'coordinator',
		comment: 'Si el docente es coordinador. True=si, False=no'
	})
	coordinator: boolean;

	// @Column('string', {
	// 	name: 'photo',
	// 	comment: 'Foto del docente'
	// })
	// photo: string;

	//TODO: fk de detalle_profesion
	// @Column('int', {
	// 	name: 'profession_detail',
	// 	comment: 'Detalle de la profesion del docente'
	// })
	// professionDetail: number;

	@CreateDateColumn({
		name: 'created_at',
		type: 'timestamptz',
		default: () => 'CURRENT_TIMESTAMP',
	})
	createrAt: Date;

	@UpdateDateColumn({
		name: 'updated_at',
		type: 'timestamptz',
		default: () => 'CURRENT_TIMESTAMP',
	})
	updatedAt: Date;

	@DeleteDateColumn({
		name: 'deleted_at',
		type: 'timestamptz',
		nullable: true,
	})
	deletedAt: Date;
}
