import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { educacion } from 'src/app/modelo/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {
  edu: educacion = null;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private educacionService: EducacionService) { }

  ngOnInit(): void {
    const id = this.data
    this.educacionService.detalleEducacion(id).subscribe(
      data =>{this.edu = data;}
    )
  }

  onUpdate(): void {
    const id = this.data
    this.educacionService.editarEducacion(id, this.edu).subscribe(data=>{
      alert("Educacion editada");
      window.location.reload()
    })
  }
}
