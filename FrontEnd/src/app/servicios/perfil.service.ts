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
  public editarPerfil(perfil: perfil): Observable<any> {
    return this.http.put<any>(this.URL+`editar/1`, perfil);
  }
}
