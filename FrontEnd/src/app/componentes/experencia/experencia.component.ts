import { Component, OnInit } from '@angular/core';
import { PerfilService } from 'src/app/servicios/perfil.service';

@Component({
  selector: 'app-experencia',
  templateUrl: './experencia.component.html',
  styleUrls: ['./experencia.component.css']
})
export class ExperenciaComponent implements OnInit {
  experiencias:any;
  constructor(private datosPerfil:PerfilService) { }

  ngOnInit(): void {
    this.datosPerfil.obtenerDatos().subscribe(data =>{
      this.experiencias=data.experencias;
    })
  }
}
