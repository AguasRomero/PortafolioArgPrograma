import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { educacion } from 'src/app/modelo/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';
import { EditarEducacionComponent } from './editar-educacion.component';
import { NuevaEducacionComponent } from './nueva-educacion.component';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: educacion[] = [];

  constructor(public dialog: MatDialog, public educacionService: EducacionService, private tokenService: TokenService) { }

  isLogged = false;

  agregarEducacion(): void {
    this.dialog.open(NuevaEducacionComponent);
  }

  borrarEducacion(id: number) {
    if(id != undefined){
      this.educacionService.eliminarEducacion(id).subscribe(data=>
        {this.cargarEducacion();
          this.ngOnInit();})
    }
  }

  editarEducacion(id: number) {
    if(id != undefined){
      this.dialog.open(EditarEducacionComponent, {data: id});
    }
  }

  cargarEducacion(): void{
    this.educacionService.todosEducacion().subscribe(data =>
      {this.educacion = data;
    })
  }

  ngOnInit(): void {
    this.cargarEducacion();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {this.isLogged = false;}
  }
}
