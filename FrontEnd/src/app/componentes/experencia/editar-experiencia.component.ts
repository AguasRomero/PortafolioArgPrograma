import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/modelo/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
  }

}
