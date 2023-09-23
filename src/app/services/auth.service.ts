import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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

  isAutheticated(){
    let token = localStorage.getItem('token');

    if(token != null){
      
    }
  }
}
