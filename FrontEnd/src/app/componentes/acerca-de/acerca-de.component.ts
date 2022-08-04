import { Component, OnInit } from '@angular/core';
import { PerfilService } from 'src/app/servicios/perfil.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  datos:any;
  constructor(private datosPerfil:PerfilService) { }

  ngOnInit(): void {
    this.datosPerfil.obtenerDatos().subscribe(data =>{
      this.datos=data;
    })
  }

}
