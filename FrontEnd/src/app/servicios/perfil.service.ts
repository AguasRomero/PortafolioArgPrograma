import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { perfil } from '../modelo/perfil.model';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  URL = 'https://back-arg-programa-portafolio.herokuapp.com/perfil/'

  constructor(private http:HttpClient) { }

  public getPerfil(): Observable<perfil> {
    return this.http.get<perfil>(this.URL+'obtener/1');
  }
  public editarNombre(nombre: string): Observable<any> {
    return this.http.put<any>(this.URL+`editar/nombre/1?nombre=${nombre}`, nombre);
  }
  public editarFotoPerfil(fotoPerfil: string): Observable<any> {
    return this.http.put<any>(this.URL+`editar/fotoPerfil/1?nombre=${fotoPerfil}`, fotoPerfil);
  }
  public editarFotoFondo(fotoFondo: string): Observable<any> {
    return this.http.put<any>(this.URL+`editar/fondo/1?fotoFondo=${fotoFondo}`, fotoFondo);
  }
  public editarAcercaDe(acercaDe: string): Observable<any> {
    return this.http.put<any>(this.URL+`editar/acerca/1?acercaDe=${acercaDe}`, acercaDe);
  }
}
