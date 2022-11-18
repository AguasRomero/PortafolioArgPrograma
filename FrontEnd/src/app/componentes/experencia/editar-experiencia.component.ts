import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { experiencia } from 'src/app/modelo/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
  exp: experiencia = null;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    const id = this.data
    this.experienciaService.detalleExperiencia(id).subscribe(
      data =>{this.exp = data;}
    )
  }

  onUpdate(): void {
      const id = this.data
      this.experienciaService.editarExperiencia(id, this.exp).subscribe(data=>{
      alert("Experiencia editada");
      window.location.reload()
    })
  }
}
