import { Component, OnInit } from '@angular/core';
import { educacion } from 'src/app/modelo/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  constructor(private educacionService: EducacionService) { }

  ngOnInit(): void {
  }

}
