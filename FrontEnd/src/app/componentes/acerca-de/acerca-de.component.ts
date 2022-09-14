import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { perfil } from 'src/app/modelo/perfil.model';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  perfil: perfil = new perfil("","","","");
  isLogged = false;
  
  constructor(public dialog: MatDialog, public perfilService: PerfilService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.perfilService.getPerfil().subscribe(datos => {this.perfil = datos})

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {this.isLogged = false;}
  }
  
  edicion(elemento: string, n:number): void {
    this.dialog.open(editarPerfil , {data: {elemento, n}})
  }
}

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-acerca-de.component.html',
})
export class editarPerfil {
  constructor(public dialogRef: MatDialogRef<editarPerfil>, public perfilService: PerfilService, @Inject(MAT_DIALOG_DATA) public data: any) {}

  elemento: string

  ngOnInit(): void {
    this.elemento = this.data.elemento
  }

  editado(opcion: number): void {
    switch(opcion){
      case opcion=1: this.perfilService.editarNombre(this.data.elemento).subscribe(data=>{
        alert("Nombre editado");
      }); break;
      case opcion=2: this.perfilService.editarAcercaDe(this.data.elemento).subscribe(data=>{
        alert("Acerca de editado");
      }); break;
      case opcion=3: this.perfilService.editarFotoPerfil(this.data.elemento).subscribe(data=>{
        alert("Foto de perfil editado");
      }); break;
      case opcion=4: this.perfilService.editarFotoFondo(this.data.elemento).subscribe(data=>{
        alert("Foto de fondo editado");
      }); break;
    }
  }
}