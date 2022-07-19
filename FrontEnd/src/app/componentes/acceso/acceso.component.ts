import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {

  usuario: string | undefined;
  contrasena: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  hide = true;

  acceso() {
    console.log(this.usuario);
    console.log(this.contrasena);
  }
}
