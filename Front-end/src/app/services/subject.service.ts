import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CreateSubjectDto, SubjectModel } from '../models/subject.model';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/response.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectHttpService {
  //readonly API_URL:string="http://localhost:3000/subjects/";//solo de lectura la vareiable
  API_URL: string;

  constructor(private hhtpClient: HttpClient) {
    this.API_URL= environment.API_URL;
  }

  index() {

    const url = `${this.API_URL}/subjects`;
    return this.hhtpClient.get<ResponseModel>(url);
  }
  findAll():Observable<SubjectModel[]>{
    const url = `${this.API_URL}/subjects`;
    return this.hhtpClient.get<SubjectModel[]>(url);
   }
  /*
findAll(){
    const url = `${this.API_URL}/subjects`
    return this.hhtpClient.get<ResponseModel>(url);
}*/

findOne(id: number){
    const url = `${this.API_URL}/subjects/${id}`;
    return this.hhtpClient.get<ResponseModel>(url);
}
create(reserva: CreateSubjectDto): Observable<SubjectModel[]> {
  const url = `${this.API_URL}/subjects/`;
  return this.hhtpClient.post<SubjectModel[]>(url, reserva)
}

/*
create(subject: SubjectModel){
    const url = `${this.API_URL}/subjects`
    return this.hhtpClient.post<ResponseModel>(url, subject)
}*/

update(id: number, subject: SubjectModel){
    const url = `${this.API_URL}/subjects/${id}`
    return this.hhtpClient.put<ResponseModel>(url, subject)
}
remove(id: SubjectModel['id']):Observable<any> {
  const url = `${this.API_URL}/subjects/${id}`;
  return this.hhtpClient.delete<any>(url).pipe(map((response: { rta: boolean; }) => {
      return response.rta;
    })
    );
}
/*
remove(id: number){
    const url = `${this.API_URL}/subjects/${id}`
    return this.hhtpClient.delete<ResponseModel>(url)
}*/
}
