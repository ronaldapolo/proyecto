import { CreateLaboratoriesDto } from './../../models/laboratory.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LaboratoriesModel } from 'src/app/models/laboratory.model';
import { LaboratoryHttpService } from 'src/app/services/laboratory.service';

@Component({
  selector: 'app-create-laboratory',
  templateUrl: './create-laboratory.component.html',
  styleUrls: ['./create-laboratory.component.css']
})
export class CreateLaboratoryComponent implements OnInit {

  laboratories: LaboratoriesModel[] = [];
  title: string = 'Nuevo Laboratorio';
  myForm: FormGroup;
  createLaboratory: CreateLaboratoriesDto = {name:"", capacity:0, description:""};  
  ngOnInit(): void {
  }
  constructor(private subjectHttpService: LaboratoryHttpService, private router: Router) {
    this.initProduct(); 
  }
  initProduct(){
    this.createLaboratory = {name:"", capacity:0, description:""};
  }
  createLaboratorie() {
    if (!this.createLaboratory.name || this.createLaboratory.name.length < 10) {
      alert("El campo Laboratorio vacio o tiene menos de 10 caracteres");
      return;
    }else if(!this.createLaboratory.capacity || this.createLaboratory.capacity == 0){
      alert("La capacidad no puede ser 0");
    }else if(!this.createLaboratory.description || this.createLaboratory.description.length < 20){
      alert("El campo Descripcion esta vacio o tiene menos de 20 caracteres");
    }    
    const data = {      
      name: this.createLaboratory.name,
      capacity: this.createLaboratory.capacity,
      description: this.createLaboratory.description
    };
    this.subjectHttpService.create(data).subscribe((response) => {
      console.log(response);
      alert("Laboratorio registrada exitosamente");
      this.router.navigate(["/list-laboratory"]);
    });
  }
  
}
