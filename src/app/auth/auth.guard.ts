import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const isAuth = inject(AuthService)
  console.error("Booleano token: " + isAuth.isAuthenticated())
  if(isAuth.isAuthenticated()){
    console.error("Token válido: " + isAuth.isAuthenticated());
    return isAuth.isAuthenticated();
  }else{
    router.navigate(['login'])
    console.error("Token inválido: " + isAuth.isAuthenticated());
    return false
  }
};
