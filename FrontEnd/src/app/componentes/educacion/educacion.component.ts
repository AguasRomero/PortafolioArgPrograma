import { Component, OnInit } from '@angular/core';
import { PerfilService } from 'src/app/servicios/perfil.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion:any;
  constructor(private datosPerfil:PerfilService) { }

  ngOnInit(): void {
    this.datosPerfil.obtenerDatos().subscribe(data =>{
      this.educacion=data.educacion;
    })
  }

}
