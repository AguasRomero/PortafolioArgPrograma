import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  proyectos = [
    {
      proyecto: "Portafolio personal",
      descripcion: "Esta misma pagina ;)"
    },
    {
      proyecto: "Proyecto B",
      descripcion: "etc."
    }
  ]

}
