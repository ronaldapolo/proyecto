
export interface SubjectModel {
    id: number;
    name: string;
    //Carrer comentado por que no se implementa
    //career: string;
}
export interface CreateSubjectDto extends Omit<SubjectModel, 'id'> {
   
}
export interface UpdateSubjectDto extends Partial<SubjectModel> {   
     
}