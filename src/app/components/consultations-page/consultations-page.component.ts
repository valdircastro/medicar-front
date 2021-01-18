import { Component, OnInit } from '@angular/core';
import { Consulations } from "./../../../ts/consulations";

@Component({
  selector: 'app-consultations-page',
  templateUrl: './consultations-page.component.html',
  styleUrls: ['./consultations-page.component.scss']
})
export class ConsultationsPageComponent implements OnInit {

  // Recebera lista de consultas da API
  consulations = []

  constructor() { }

  ngOnInit(): void {
    this.consulations = Consulations;
  }

}
