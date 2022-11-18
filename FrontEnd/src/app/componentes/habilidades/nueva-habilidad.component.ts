import { Component, OnInit } from '@angular/core';
import { habilidades } from 'src/app/modelo/habilidades.model';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-nueva-habilidad',
  templateUrl: './nueva-habilidad.component.html',
  styleUrls: ['./nueva-habilidad.component.css']
})
export class NuevaHabilidadComponent implements OnInit {
  habilidad: string = "";
  porcentaje: number = 0;
  ioL: boolean = false;

  constructor(private habilidadesService: HabilidadesService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const hab = new habilidades(this.habilidad, this.porcentaje, this.ioL)
    this.habilidadesService.agregarHabilidades(hab).subscribe(data=>{
      alert("Habilidad agregada");
      window.location.reload()
    })
  }

}
