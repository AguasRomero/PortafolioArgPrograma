import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyectos } from '../modelo/proyectos.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  URL = 'https://zestful-rodina-hornerovago.koyeb.app/proyectos/'

  constructor(private http:HttpClient) { }

  public todosProyectos(): Observable<proyectos[]> {
    return this.http.get<proyectos[]>(this.URL+'todos');
  }
  public detalleProyectos(id: number): Observable<proyectos> {
    return this.http.get<proyectos>(this.URL+`obtener/${id}`);
  }
  public agregarProyectos(Proyectos: proyectos): Observable<any> {
    return this.http.post(this.URL+'crear/', Proyectos, {responseType: 'text'});
  } 
  public eliminarProyectos(id: number): Observable<any>{
    return this.http.delete(this.URL+`borrar/${id}`, {responseType: 'text'});
  }
  public editarProyectos(id: number, proyecto: proyectos): Observable<any> {
    return this.http.put(this.URL+`editar/${id}`, proyecto, {responseType: 'text'});
  }
}
