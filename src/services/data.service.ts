import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  consulations = []


  constructor() { }


  createConsulation(specialty, doctor, dia, hora){
    this.consulations.push({
      'specialty': specialty,
      'name': doctor,
      'date':dia,
      'hour': hora
    })
  }

  deleteConsulation(index){
    this.consulations.splice(index, 1)
  }
}
