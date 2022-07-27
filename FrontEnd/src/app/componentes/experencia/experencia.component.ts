import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experencia',
  templateUrl: './experencia.component.html',
  styleUrls: ['./experencia.component.css']
})
export class ExperenciaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  experiencias = [
    {puesto: "puesto A",
    empresa: "empresa A",
    anoIngreso: "2000"
  },
    {puesto: "puesto B",
  empresa: "empresa B",
  anoIngreso: "2005"
  }
  ]

}
