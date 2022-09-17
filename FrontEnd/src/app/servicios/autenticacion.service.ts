import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { acceso } from '../modelo/acceso.model'
import { jwt } from '../modelo/jwt';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  authURL = "https://back-arg-programa-portafolio.herokuapp.com/auth/"
  constructor(private httpClient: HttpClient) { }

  public login(acceso: acceso): Observable<jwt>{
    return this.httpClient.post<jwt>(this.authURL + 'login', acceso)
  }
}
