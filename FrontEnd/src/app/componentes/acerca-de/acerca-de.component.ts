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
    this.dialog.open(editarNombre , {data: {Elemento: elemento, N:n}})
  }
}

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-acerca-de.component.html',
})
export class editarNombre {
  constructor(public dialogRef: MatDialogRef<editarNombre>, public perfilService: PerfilService, @Inject(MAT_DIALOG_DATA) public data: any) {}

  elemento: string
  titulo: string

  ngOnInit(): void {
    const elemento = this.data.elemento
    const opcion = this.data.n
    switch(opcion){
      case opcion===1: this.titulo="nombre"; break;
      case opcion===2: this.titulo="acerca de"; break;
      case opcion===3: this.titulo="foto de perfil"; break;
      case opcion===4: this.titulo="foto de fondo"; break;
    }
  }

  editado(): void {
    const elemento = this.data.elemento
    const opcion = this.data.n
    switch(opcion){
      case opcion===1: this.perfilService.editarNombre(this.elemento).subscribe(data=>{
        alert("Nombre editado");
      }); break;
      case opcion===2: this.perfilService.editarAcercaDe(this.elemento).subscribe(data=>{
        alert("Acerca de editado");
      }); break;
      case opcion===3: this.perfilService.editarFotoPerfil(this.elemento).subscribe(data=>{
        alert("Foto de perfil editado");
      }); break;
      case opcion===4: this.perfilService.editarFotoFondo(this.elemento).subscribe(data=>{
        alert("Foto de fondo editado");
      }); break;
    }
  }
}