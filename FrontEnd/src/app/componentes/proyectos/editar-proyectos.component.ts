import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { proyectos } from 'src/app/modelo/proyectos.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {
  pro: proyectos = null;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private proyectoService: ProyectosService) { }

  ngOnInit(): void {
    const id = this.data
    this.proyectoService.detalleProyectos(id).subscribe(
      data =>{this.pro = data;}
    )
  }

  onUpdate(): void {
    const id = this.data
    this.proyectoService.editarProyectos(id, this.pro).subscribe(data=>{
      alert("Proyecto editado")
    })
  }
}
