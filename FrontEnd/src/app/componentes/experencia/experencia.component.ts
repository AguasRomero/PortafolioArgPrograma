import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/modelo/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { PerfilService } from 'src/app/servicios/perfil.service';

@Component({
  selector: 'app-experencia',
  templateUrl: './experencia.component.html',
  styleUrls: ['./experencia.component.css']
})
export class ExperenciaComponent implements OnInit {
  experiencias: experiencia[] = []
  ;
  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.experienciaService.todosExperiencia().subscribe(data =>{
      this.experiencias=data;
    })
  }
}
