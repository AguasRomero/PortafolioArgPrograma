import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyectos } from '../modelo/proyectos.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  URL = 'https://portafolioargprograma-production.up.railway.app/proyectos/'

  constructor(private http:HttpClient) { }

  public todosProyectos(): Observable<proyectos[]> {
    return this.http.get<proyectos[]>(this.URL+'todos');
  }
  public detalleProyectos(id: number): Observable<proyectos> {
    return this.http.get<proyectos>(this.URL+`obtener/${id}`);
  }
  public agregarProyectos(Proyectos: proyectos): Observable<any> {
    return this.http.post<any>(this.URL+'crear/', Proyectos);
  } 
  public eliminarProyectos(id: number): Observable<any>{
    return this.http.delete<any>(this.URL+`borrar/${id}`);
  }
  public editarProyectos(id: number, proyecto: proyectos): Observable<any> {
    return this.http.put<any>(this.URL+`editar/${id}`, proyecto);
  }
}
