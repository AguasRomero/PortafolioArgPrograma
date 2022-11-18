import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { perfil } from '../modelo/perfil.model';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  URL = 'https://portafolioargprograma-production.up.railway.app/perfil/'

  constructor(private http:HttpClient) { }

  public getPerfil(): Observable<perfil> {
    return this.http.get<perfil>(this.URL+'obtener/1');
  }
  public editarNombre(nombre: string): Observable<any> {
    return this.http.put(this.URL+`editar/nombre/1?nombre=${nombre}`, nombre, {responseType: 'text'});
  }
  public editarFotoPerfil(fotoPerfil: string): Observable<any> {
    return this.http.put(this.URL+`editar/fotoPerfil/1?nombre=${fotoPerfil}`, fotoPerfil, {responseType: 'text'});
  }
  public editarFotoFondo(fotoFondo: string): Observable<any> {
    return this.http.put(this.URL+`editar/fondo/1?fotoFondo=${fotoFondo}`, fotoFondo, {responseType: 'text'});
  }
  public editarAcercaDe(acercaDe: string): Observable<any> {
    return this.http.put(this.URL+`editar/acerca/1?acercaDe=${acercaDe}`, acercaDe, {responseType: 'text'});
  }
}
