import { Component, OnInit } from '@angular/core';
import { educacion } from 'src/app/modelo/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {
  institucion: string = "";
  logoInstitucion: string = "";
  titulo: string = "";
  anoIngreso: number = 0;
  anoEgreso: number = 0;

  constructor(private educacionService: EducacionService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const edu = new educacion(this.institucion, this.logoInstitucion, this.titulo, this.anoIngreso, this.anoEgreso);
    this.educacionService.agregarEducacion(edu).subscribe(data=>{
      alert("Educacion agregada");
      window.location.reload()
    })
  }

}
