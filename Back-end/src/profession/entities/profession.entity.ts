import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProfessionEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column('varchar', {
        name: 'grade_specialty',
        comment: 'Grado especial del docente'
    })
    gradeSpecialty: string;
}
