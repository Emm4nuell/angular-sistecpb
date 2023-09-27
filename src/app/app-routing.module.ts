import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'}, /* ao tentar acessar rota que não existe ele direciona para home */
  {path: 'login', component: LoginComponent},
  {path: 'cadastrar', component: UsuarioCreateComponent},
  {path: '', component: NavComponent, canActivate: [authGuard], children: [
    {path: 'home', component: HomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
