import { Component, OnInit } from '@angular/core';
import { proyectos } from 'src/app/modelo/proyectos.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: proyectos[] = [];

  constructor(private proyectoService:ProyectosService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.proyectoService.todosProyectos().subscribe(data =>{
      this.proyectos=data;
    });

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } 
  }
}
