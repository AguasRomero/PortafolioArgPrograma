import { Component, OnInit } from '@angular/core';
import { PerfilService } from 'src/app/servicios/perfil.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos:any;
  constructor(private datosPerfil:PerfilService) { }

  ngOnInit(): void {
    this.datosPerfil.obtenerDatos().subscribe(data =>{
      this.proyectos=data.proyectos;
    });
  }
}
