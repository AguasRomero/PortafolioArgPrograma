import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { habilidades } from '../modelo/habilidades.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  URL = 'http://localhost:8080/habilidades/'

  constructor(private http:HttpClient) { }

  public todosHabilidades(): Observable<habilidades[]> {
    return this.http.get<habilidades[]>(this.URL+'todos');
  }
  public detalleHabilidades(id: number): Observable<habilidades> {
    return this.http.get<habilidades>(this.URL+`obtener/${id}`);
  }
  public agregarHabilidades(Habilidades: habilidades): Observable<any> {
    return this.http.post<any>(this.URL+'crear/', Habilidades);
  } 
  public eliminarHabilidades(id: number): Observable<any>{
    return this.http.delete<any>(this.URL+`borrar/${id}`);
  }
  public editarHabilidades(id: number, habilidad: habilidades): Observable<any> {
    return this.http.put<any>(this.URL+`editar/${id}`, habilidad);
  }
}
