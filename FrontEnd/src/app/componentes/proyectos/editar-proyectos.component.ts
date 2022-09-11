import { Component, OnInit } from '@angular/core';
import { proyectos } from 'src/app/modelo/proyectos.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {

  constructor(private proyectoService: ProyectosService) { }

  ngOnInit(): void {
  }

}
