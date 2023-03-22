import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacion } from '../modelo/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = 'https://zestful-rodina-hornerovago.koyeb.app/educacion/'

  constructor(private http:HttpClient) { }

  public todosEducacion(): Observable<educacion[]> {
    return this.http.get<educacion[]>(this.URL+'todos');
  }
  public detalleEducacion(id: number): Observable<educacion> {
    return this.http.get<educacion>(this.URL+`obtener/${id}`);
  }
  public agregarEducacion(Educacion: educacion): Observable<any> {
    return this.http.post(this.URL+'crear/', Educacion, {responseType: 'text'});
  } 
  public eliminarEducacion(id: number): Observable<any>{
    return this.http.delete(this.URL+`borrar/${id}`, {responseType: 'text'});
  }
  public editarEducacion(id: number, educacion: educacion): Observable<any> {
    return this.http.put(this.URL+`editar/${id}`, educacion, {responseType: 'text'});
  }
}
