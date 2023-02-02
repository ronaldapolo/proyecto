import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaboratoriesModel } from 'src/app/models/laboratory.model';
import { LaboratoryHttpService } from 'src/app/services/laboratory.service';

@Component({
  selector: 'app-list-laboratory',
  templateUrl: './list-laboratory.component.html',
  styleUrls: ['./list-laboratory.component.css']
})
export class ListLaboratoryComponent implements OnInit {

  laboratories: LaboratoriesModel[] = []
  constructor(private LaboratorieshttpService: LaboratoryHttpService, private router: Router) 
  {    
    this.getLaboratories();
    this.consola();
  }
 consola(){
  console.log(this.getLaboratories())
 }
  ngOnInit(): void {
    this.getLaboratories();
  }
  getLaboratories() {
    return this.LaboratorieshttpService.findAll().subscribe((response) => {
      this.laboratories = response;     
    });
  }  
  editLaboratory(id: number) {
    this.router.navigate(['/edit-laboratory', id]);
}
  deleteLaboratory(id:LaboratoriesModel['id']) {
    return this.LaboratorieshttpService.remove(id).subscribe((response) => {
      this.laboratories = this.laboratories.filter(product => product.id != id);
      //console.log(response);
    });
  }


}
