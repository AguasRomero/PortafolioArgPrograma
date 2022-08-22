import { Component, OnInit } from '@angular/core';
import { perfil } from 'src/app/modelo/perfil.model';
import { PerfilService } from 'src/app/servicios/perfil.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  perfil: perfil = new perfil("","","","");
  
  constructor(public perfilService: PerfilService) { }
  ngOnInit(): void {
      this.perfilService.getPerfil().subscribe(datos => {this.perfil = datos})
  }
}
