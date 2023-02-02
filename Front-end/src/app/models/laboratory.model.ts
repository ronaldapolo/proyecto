export interface LaboratoriesModel {
    id: number;
    name: string;
    capacity:number;
    description: string;
}
export interface CreateLaboratoriesDto extends Omit<LaboratoriesModel, 'id'> {
   
}
export interface UpdateLaboratoriesDto extends Partial<LaboratoriesModel> {   
     
}