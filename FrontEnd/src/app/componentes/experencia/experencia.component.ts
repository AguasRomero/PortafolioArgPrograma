import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { experiencia } from 'src/app/modelo/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';
import { EditarExperienciaComponent } from './editar-experiencia.component';
import { NuevaExperienciaComponent } from './nueva-experiencia.component';

@Component({
  selector: 'app-experencia',
  templateUrl: './experencia.component.html',
  styleUrls: ['./experencia.component.css']
})
export class ExperenciaComponent implements OnInit {
  experiencias: experiencia[] = []
  ;
  constructor(public dialog: MatDialog, private experienciaService: ExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  agregarExperiencia(): void {
    this.dialog.open(NuevaExperienciaComponent);
  }

  borrarExperiencia(id: number) {
    if(id != undefined){
      this.experienciaService.eliminarExperiencia(id).subscribe(data=>
        {alert("Experiencia borrada");
        window.location.reload()})
    }
  }

  editarExperiencia(id: number) {
    if(id != undefined){
      this.dialog.open(EditarExperienciaComponent, {data: id});
    }
  }

  cargarExperiencia(): void{
    this.experienciaService.todosExperiencia().subscribe(data =>{
      this.experiencias=data;
    })
  }

  ngOnInit(): void {
    this.cargarExperiencia();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {this.isLogged = false;}
  }
}
