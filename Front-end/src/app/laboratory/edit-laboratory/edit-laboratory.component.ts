import { Component, OnInit } from '@angular/core';
import { CareersModel } from 'src/app/models/career.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CareerHttpService } from 'src/app/services/career.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateLaboratoriesDto, LaboratoriesModel, UpdateLaboratoriesDto } from 'src/app/models/laboratory.model';
import { LaboratoryHttpService } from 'src/app/services/laboratory.service';

@Component({
  selector: 'app-edit-laboratory',
  templateUrl: './edit-laboratory.component.html',
  styleUrls: ['./edit-laboratory.component.css']
})
export class EditLaboratoryComponent implements OnInit {
  laboratories: LaboratoriesModel[] = [];
  title: string = 'Nuevo Laboratorio';
  myForm: FormGroup;
  selectLaboratory : UpdateLaboratoriesDto={};    
  constructor(private laboratoryHttpService: LaboratoryHttpService, private route: ActivatedRoute,) {    
    this.initLaboratory();    
  }  
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getLaboratory(id);
 }
  initLaboratory(){
    this.selectLaboratory = {name:"",capacity:0,description:""};
  }
  getLaboratory(id: number) {
    this.laboratoryHttpService.get(id).subscribe(laboratory => {
      this.selectLaboratory = laboratory;
    });
 }
 updateLaboratory() {
  const data = {
    id: this.selectLaboratory.id,
    name: this.selectLaboratory.name,
    capacity: this.selectLaboratory.capacity,
    description: this.selectLaboratory.description
  };
  const id = +this.route.snapshot.paramMap.get('id');
  return this.laboratoryHttpService.update(data, id).subscribe((response) => {
    console.log(response);
  });
}
}
