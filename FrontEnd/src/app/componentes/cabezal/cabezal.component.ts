import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AccesoComponent } from '../acceso/acceso.component';
import { perfil } from 'src/app/modelo/perfil.model';
import { PerfilService } from 'src/app/servicios/perfil.service';

@Component({
  selector: 'app-cabezal',
  templateUrl: './cabezal.component.html',
  styleUrls: ['./cabezal.component.css']
})
export class CabezalComponent implements OnInit {
  perfil: perfil = new perfil("","","","");

  constructor(public dialog: MatDialog, public perfilService: PerfilService) { }
  abrirLogin(): void {
    this.dialog.open(AccesoComponent);
  }
  ngOnInit(): void {
    this.perfilService.getPerfil().subscribe(datos => {this.perfil = datos})
  }

}
