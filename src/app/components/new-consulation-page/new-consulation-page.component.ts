import { Component, OnInit } from '@angular/core';
import { Specialties, Doctors, Dates, Hours } from "./../../../ts/new-consulations";
import { DataService } from "./../../../services/data.service";
import { Router } from '@angular/router';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-consulation-page',
  templateUrl: './new-consulation-page.component.html',
  styleUrls: ['./new-consulation-page.component.scss']
})
export class NewConsulationPageComponent implements OnInit {

  hide = true;

  specialties = [];
  doctors = [];
  dates = [];
  hours = [];

  fields = []

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.specialties = Specialties;
    this.doctors = Doctors;
    this.dates = Dates;
    this.hours = Hours;

    this.fields = [
      {'name' : 'Especialidades', 'data': this.specialties},
      {'name' : 'Médico', 'data': this.doctors},
      {'name' : 'Dia', 'data': this.dates},
      {'name' : 'Hora', 'data': this.hours}
    ]
  }

  sendForm(){
    console.log("Nova consulta criada");
    this.dataService.createConsulation('Pediatria', 'José da Silva', '01/02/2021', '08:00');
    console.log('consulations:');
    console.log(this.dataService.consulations);
    this.router.navigateByUrl('/consulations');
  }

}
