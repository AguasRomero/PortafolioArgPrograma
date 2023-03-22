import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../modelo/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  URL = 'https://zestful-rodina-hornerovago.koyeb.app/experiencia/'

  constructor(private http:HttpClient) { }

  public todosExperiencia(): Observable<experiencia[]> {
    return this.http.get<experiencia[]>(this.URL+'todos');
  }
  public detalleExperiencia(id: number): Observable<experiencia> {
    return this.http.get<experiencia>(this.URL+`obtener/${id}`);
  }
  public agregarExperiencia(experiencia: experiencia): Observable<any> {
    return this.http.post(this.URL+'crear/', experiencia, {responseType: 'text'});
  } 
  public eliminarExperiencia(id: number): Observable<any>{
    return this.http.delete(this.URL+`borrar/${id}`, {responseType: 'text'});
  }
  public editarExperiencia(id: number, experiencia: experiencia): Observable<any> {
    return this.http.put(this.URL+`editar/${id}`, experiencia, {responseType: 'text'});
  }
}