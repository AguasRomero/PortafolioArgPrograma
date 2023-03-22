import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { habilidades } from '../modelo/habilidades.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  URL = 'https://zestful-rodina-hornerovago.koyeb.app/habilidades/'

  constructor(private http:HttpClient) { }

  public todosHabilidades(): Observable<habilidades[]> {
    return this.http.get<habilidades[]>(this.URL+'todos');
  }
  public detalleHabilidades(id: number): Observable<habilidades> {
    return this.http.get<habilidades>(this.URL+`obtener/${id}`);
  }
  public agregarHabilidades(Habilidades: habilidades): Observable<any> {
    return this.http.post(this.URL+'crear/', Habilidades, {responseType: 'text'});
  } 
  public eliminarHabilidades(id: number): Observable<any>{
    return this.http.delete(this.URL+`borrar/${id}`, {responseType: 'text'});
  }
  public editarHabilidades(id: number, habilidad: habilidades): Observable<any> {
    return this.http.put(this.URL+`editar/${id}`, habilidad, {responseType: 'text'});
  }
}
