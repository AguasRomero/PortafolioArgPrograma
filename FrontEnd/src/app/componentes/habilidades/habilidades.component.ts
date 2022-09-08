import { Component, OnInit } from '@angular/core';
import { habilidades } from 'src/app/modelo/habilidades.model';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidades: habilidades[] = [];

  constructor(private habilidadesService:HabilidadesService, private tokenService: TokenService) { }

  isLogged = false;
  
  ngOnInit(): void {
    this.habilidadesService.todosHabilidades().subscribe(data =>{
      this.habilidades=data;
    });
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {this.isLogged = false;}
  }
}
