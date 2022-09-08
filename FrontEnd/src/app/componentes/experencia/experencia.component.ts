import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/modelo/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experencia',
  templateUrl: './experencia.component.html',
  styleUrls: ['./experencia.component.css']
})
export class ExperenciaComponent implements OnInit {
  experiencias: experiencia[] = []
  ;
  constructor(private experienciaService: ExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.experienciaService.todosExperiencia().subscribe(data =>{
      this.experiencias=data;
    })

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {this.isLogged = false;}
  }
}
