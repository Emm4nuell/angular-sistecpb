import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Auth } from 'src/app/models/auth';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: Auth = {
    email: '',
    senha: ''
  }

  vemail = new FormControl(null, [Validators.required, Validators.email]);
  vsenha = new FormControl(null, [Validators.required, Validators.minLength(3)]);

  validarCampo(): boolean{
    return this.vemail.valid && this.vsenha.valid;
  }

  constructor(private auth:AuthService, private router: Router, private toast: ToastrService ) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.autenticar(this.creds).subscribe(response => {
      this.auth.successFullLogin(response.body);
      this.router.navigate(['/home'])
    }, err => {
      localStorage.removeItem("token")
      if(err.status == 403 || err.status == 500){
        this.toast.info("Usuário e/ou senha inválidos");
      }else{
        this.toast.error("Erro interno")
      }
    })
  }

}
