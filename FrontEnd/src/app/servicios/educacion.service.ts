import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacion } from '../modelo/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = 'http://localhost:8080/educacion/'

  constructor(private http:HttpClient) { }

  public todosEducacion(): Observable<educacion[]> {
    return this.http.get<educacion[]>(this.URL+'todos');
  }
  public detalleEducacion(id: number): Observable<educacion> {
    return this.http.get<educacion>(this.URL+`obtener/${id}`);
  }
  public agregarEducacion(Educacion: educacion): Observable<any> {
    return this.http.post<any>(this.URL+'crear/', Educacion);
  } 
  public eliminarEducacion(id: number): Observable<any>{
    return this.http.delete<any>(this.URL+`borrar/${id}`);
  }
  public editarEducacion(id: number, educacion: educacion): Observable<any> {
    return this.http.put<any>(this.URL+`editar/${id}`, educacion);
  }
}
