import { CreateLaboratoriesDto, LaboratoriesModel, UpdateLaboratoriesDto } from './../models/laboratory.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/response.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaboratoryHttpService {
  navigate(arg0: any[]) {
    throw new Error('Method not implemented.');
  }
  API_URL: string;

  constructor(private httpClient: HttpClient) {
    this.API_URL = environment.API_URL;
  }

  index() {
    const url = `${this.API_URL}/laboratories`;
    return this.httpClient.get<ResponseModel>(url);
  }
  show(id: number) {
    const url = `${this.API_URL}/laboratories/${id}`;
    return this.httpClient.get<ResponseModel>(url);
  }
  get(id: number) {
    return this.httpClient.get<LaboratoriesModel>(`${this.API_URL}/${id}`);
  }  
  findAll(): Observable<LaboratoriesModel[]> {
    const url = `${this.API_URL}/laboratories`;
    return this.httpClient.get<LaboratoriesModel[]>(url);
  }
  findOne(id: number) {
    const url = `${this.API_URL}/laboratories/${id}`;
    return this.httpClient.get<ResponseModel>(url);
  }
  create(reserva: CreateLaboratoriesDto): Observable<LaboratoriesModel[]> {
    const url = `${this.API_URL}/laboratories/`;
    return this.httpClient.post<LaboratoriesModel[]>(url, reserva)
  }
  update(laboratory:UpdateLaboratoriesDto,id:LaboratoriesModel['id']):Observable<LaboratoriesModel>  {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<LaboratoriesModel>(url, laboratory)
   }
  remove(id: LaboratoriesModel['id']): Observable<any> {
    const url = `${this.API_URL}/laboratories/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean; }) => {
      return response.rta;
    })
    );
  }

}
