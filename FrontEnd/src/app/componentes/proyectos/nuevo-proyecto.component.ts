import { Component, OnInit } from '@angular/core';
import { proyectos } from 'src/app/modelo/proyectos.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {
  proyecto: string = "";
  descripcion: string = "";
  anoCreacion: number = 0;
  fotoProyecto: string = "";

  constructor(private proyectosService: ProyectosService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const pro = new proyectos(this.proyecto, this.descripcion, this.anoCreacion, this.fotoProyecto)
    this.proyectosService.agregarProyectos(pro).subscribe(data=>{
      alert("Proyecto agregado")
    })
  }

}
