import { Component, OnInit } from '@angular/core';
import { Specialties, Doctors, Dates, Hours } from "./../../../ts/new-consulations";

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

  constructor() { }

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

  }

}
