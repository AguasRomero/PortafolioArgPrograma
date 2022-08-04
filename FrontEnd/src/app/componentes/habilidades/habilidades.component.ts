import { Component, OnInit } from '@angular/core';
import { PerfilService } from 'src/app/servicios/perfil.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  idiomas:any;
  lenguajes:any;
  constructor(private datosPerfil:PerfilService) { }

  ngOnInit(): void {
    this.datosPerfil.obtenerDatos().subscribe(data =>{
      this.idiomas=data.idiomas;
      this.lenguajes=data.lenguajes
    });
  }
}
