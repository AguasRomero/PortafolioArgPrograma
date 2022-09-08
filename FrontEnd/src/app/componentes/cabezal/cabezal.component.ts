import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AccesoComponent } from '../acceso/acceso.component';
import { perfil } from 'src/app/modelo/perfil.model';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-cabezal',
  templateUrl: './cabezal.component.html',
  styleUrls: ['./cabezal.component.css']
})
export class CabezalComponent implements OnInit {
  perfil: perfil = new perfil("","","","");
  isLogged = false;

  constructor(public dialog: MatDialog, public perfilService: PerfilService, private tokenService: TokenService) { }
  abrirLogin(): void {
    this.dialog.open(AccesoComponent);
  }
  ngOnInit(): void {
    this.perfilService.getPerfil().subscribe(datos => {this.perfil = datos})
    if(this.tokenService.getToken()){
      this.isLogged=true;}else{this.isLogged=false;}
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

}
