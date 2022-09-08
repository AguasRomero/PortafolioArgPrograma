import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/modelo/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {
  empresa: string = "";
  logoEmpresa: string = "";
  puesto: string = "";
  anoIngreso: number = 0;
  anoEgreso: number= 0;

  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const exp = new experiencia(this.empresa, this.logoEmpresa, this.puesto, this.anoIngreso, this.anoEgreso);
    this.experienciaService.agregarExperiencia(exp).subscribe(data=>{
      alert("Experiencia agregada");
    })
  }

}
