import { Component, OnInit } from '@angular/core';
import { educacion } from 'src/app/modelo/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: educacion[] = [];

  constructor(public educacionService: EducacionService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.educacionService.todosEducacion().subscribe(data =>
      {this.educacion = data;
    })

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {this.isLogged = false;}
  }
}
