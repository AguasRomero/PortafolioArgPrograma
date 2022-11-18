import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { habilidades } from 'src/app/modelo/habilidades.model';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-editar-habilidades',
  templateUrl: './editar-habilidades.component.html',
  styleUrls: ['./editar-habilidades.component.css']
})
export class EditarHabilidadesComponent implements OnInit {
  hab: habilidades = null;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any ,private habilidadesService: HabilidadesService) { }

  ngOnInit(): void {
    const id = this.data
    this.habilidadesService.detalleHabilidades(id).subscribe(
      data =>{this.hab = data;}
    )
  }

  onUpdate(): void {
    const id = this.data
    this.habilidadesService.editarHabilidades(id, this.hab).subscribe(data=>{
      alert("Habilidad editada");
      window.location.reload()
    })
  }
}
