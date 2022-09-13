import { Component, OnInit } from '@angular/core';
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
  modoEdicion = false;
  
  constructor(public perfilService: PerfilService, private tokenService: TokenService) { }

  ngOnInit(): void {
      this.perfilService.getPerfil().subscribe(datos => {this.perfil = datos})

      if(this.tokenService.getToken()){
        this.isLogged = true;
      } else {this.isLogged = false;}
    }
  
  edicion(): void {
    this.modoEdicion != this.modoEdicion
  }
}
