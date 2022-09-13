import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { proyectos } from 'src/app/modelo/proyectos.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';
import { EditarProyectosComponent } from './editar-proyectos.component';
import { NuevoProyectoComponent } from './nuevo-proyecto.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: proyectos[] = [];

  constructor(public dialog: MatDialog, private proyectoService:ProyectosService, private tokenService: TokenService) { }

  isLogged = false;

  agregarProyecto(): void {
    this.dialog.open(NuevoProyectoComponent);
  }

  borrarProyecto(id?: number) {
    if(id != undefined){
      this.proyectoService.eliminarProyectos(id).subscribe(data=>
        {this.cargarProyectos();})
    }
  }

  editarProyecto(id?: number) {
    if(id != undefined){
      this.dialog.open(EditarProyectosComponent, {data: id});
    }
  }

  cargarProyectos(): void{
    this.proyectoService.todosProyectos().subscribe(data =>{
      this.proyectos=data;
    });
  }

  ngOnInit(): void {
    this.cargarProyectos();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } 
  }
}
