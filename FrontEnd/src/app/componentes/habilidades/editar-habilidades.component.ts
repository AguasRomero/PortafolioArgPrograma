import { Component, OnInit } from '@angular/core';
import { habilidades } from 'src/app/modelo/habilidades.model';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-editar-habilidades',
  templateUrl: './editar-habilidades.component.html',
  styleUrls: ['./editar-habilidades.component.css']
})
export class EditarHabilidadesComponent implements OnInit {

  constructor(private habilidadesService: HabilidadesService) { }

  ngOnInit(): void {
  }

}
