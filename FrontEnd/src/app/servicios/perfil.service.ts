import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { perfil } from '../modelo/perfil.model';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  URL = 'http://localhost:8080/perfil/'

  constructor(private http:HttpClient) { }

  public getPerfil(): Observable<perfil> {
    return this.http.get<perfil>(this.URL+'obtener/1');
  }

  obtenerDatos(): Observable<any> {
    return this.http.get("./assets/perfil.json");
  }
}
