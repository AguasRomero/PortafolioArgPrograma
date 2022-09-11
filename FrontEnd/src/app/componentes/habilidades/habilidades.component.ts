import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { habilidades } from 'src/app/modelo/habilidades.model';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { TokenService } from 'src/app/servicios/token.service';
import { EditarHabilidadesComponent } from './editar-habilidades.component';
import { NuevaHabilidadComponent } from './nueva-habilidad.component';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidades: habilidades[] = [];

  constructor(public dialog: MatDialog, private habilidadesService:HabilidadesService, private tokenService: TokenService) { }

  isLogged = false;

  agregarHabilidad(): void {
    this.dialog.open(NuevaHabilidadComponent);
  }

  borrarHabilidad(id?: number) {
    if(id != undefined){
      this.habilidadesService.eliminarHabilidades(id).subscribe(data=>
        {this.cargarHabilidades();})
    }
  }

  editarHabilidad(id?: number) {
    if(id != undefined){
      this.dialog.open(EditarHabilidadesComponent);
    }
  }

  cargarHabilidades(): void{
    this.habilidadesService.todosHabilidades().subscribe(data =>{
      this.habilidades=data;
    });
  }
  
  ngOnInit(): void {
    this.cargarHabilidades();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {this.isLogged = false;}
  }
}
