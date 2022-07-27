import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  educacion = [
  {
    titulo: "Bioquímico",
    institucion: "Universidad de Mar del Plata",
    logo: "https://www.mdp.edu.ar/templates/unmdp/img/logoUNMDP.svg",
    anoIngreso: 2015
  }
  ]
}
