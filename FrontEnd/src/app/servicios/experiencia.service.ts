import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../modelo/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  URL = 'http://localhost:8080/experiencia/'

  constructor(private http:HttpClient) { }

  public todosExperiencia(): Observable<experiencia[]> {
    return this.http.get<experiencia[]>(this.URL+'todos');
  }
  public detalleExperiencia(id: number): Observable<experiencia> {
    return this.http.get<experiencia>(this.URL+`obtener/${id}`);
  }
  public agregarExperiencia(experiencia: experiencia): Observable<any> {
    return this.http.post<any>(this.URL+'crear/', experiencia);
  } 
  public eliminarExperiencia(id: number): Observable<any>{
    return this.http.delete<any>(this.URL+`borrar/${id}`);
  }
  public editarExperiencia(id: number, experiencia: experiencia): Observable<any> {
    return this.http.put<any>(this.URL+`editar/${id}`, experiencia);
  }
}