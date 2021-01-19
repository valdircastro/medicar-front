import { Component, OnInit } from '@angular/core';
import { Consulations } from "./../../../ts/consulations";
import { DataService } from "./../../../services/data.service";

@Component({
  selector: 'app-consultations-page',
  templateUrl: './consultations-page.component.html',
  styleUrls: ['./consultations-page.component.scss']
})
export class ConsultationsPageComponent implements OnInit {

  // Recebera lista de consultas da API
  consulations = []

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log('consulations:');
    console.log(this.dataService.consulations);
    this.consulations = this.dataService.consulations;
  }

  deleteConsulation(index){
    this.dataService.deleteConsulation(index)
  }

}
