import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateSubjectDto, SubjectModel } from 'src/app/models/subject.model';
import { SubjectHttpService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-create-matter',
  templateUrl: './create-matter.component.html',
  styleUrls: ['./create-matter.component.css']
})
export class CreateMatterComponent implements OnInit {
  myForm: FormGroup;
  title: string = 'Crear asignatura';
  products : SubjectHttpService[] = [];
  createSubject: CreateSubjectDto = {name:""};  
  ngOnInit(): void {
  }
  constructor(private subjectHttpService: SubjectHttpService, private router: Router) {
    this.initProduct(); 
  }
  initProduct(){
    this.createSubject = {name:"",};
  }
  createMatter() {
    if (!this.createSubject.name || this.createSubject.name.length < 10) {
      alert("El campo esta vacio o tiene menos de 10 caracteres");
      return;
    }
    const data = {      
      name: this.createSubject.name
    };
    this.subjectHttpService.create(data).subscribe((response) => {
      console.log(response);
      alert("Asignatura registrada exitosamente");
      this.router.navigate(["/list-subject"]);
    });
  }
  
  

  get nameField() {
    return this.myForm.controls['name'];
  }
  
  /*
  subjects: SubjectModel[] = [];
  title: string = 'Crear asignatura';
  myForm: FormGroup;
  constructor(
    private subjectHttpService: SubjectHttpService,
    private formBuilder: FormBuilder,
    private route: Router,

  ) {
    this.myForm = this.newForm();
  }

  ngOnInit(): void {
  }

  newForm(): FormGroup {
    return this.formBuilder.group({
      name: [null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ]
      ],
      career: [null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100)
        ]
      ]
    });
  }

  create() {
    this.subjectHttpService.create(this.myForm.value).subscribe(
      (response) => { this.route.navigate(['list-subject']);}
    );
  }

  get idField() {
    return this.myForm.controls['id'];
  }

  get nameField() {
    return this.myForm.controls['name'];
  }

  get careerField() {
    return this.myForm.controls['career'];
  }

*/
}
