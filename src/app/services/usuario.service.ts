import { API_CONFIG } from './../config/configUrl';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario-create';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  create(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${API_CONFIG.baseUrl}/usuario`, usuario);
  }
}
