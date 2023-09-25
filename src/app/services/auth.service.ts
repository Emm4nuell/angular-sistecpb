import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) { }

  autenticar(auth: Auth){
    return this.http.post('http://localhost:8080/login', auth, {
      observe: 'response',
      responseType: 'text'
    })
  }

  successFullLogin(token: String): void{
    localStorage.setItem('token', `Bearer ${token}`);
  }

  logout(){
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean{
    let token = localStorage.getItem('token');

    if(token != null){
      return !this.jwtService.isTokenExpired(token);
    }
    return false;
  }
}
