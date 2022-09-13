import { Component, OnInit } from '@angular/core';
import { acceso } from 'src/app/modelo/acceso.model';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  acceso!: acceso;
  usuario!: string;
  contrasena!: string;
  error!: string;

  constructor(private tokenService: TokenService, private autenticacionService: AutenticacionService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
    }
  }

  onLogin(): void{
    this.acceso = new acceso(this.usuario, this.contrasena); 
    this.autenticacionService.login(this.acceso).subscribe(data =>{
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUser(data.usuario);
    },)
    window.location.reload()
  }

  hide = true;

}
