import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Credenciais } from 'src/app/models/credenciais';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: Credenciais = {
    email: '',
    senha: ''
  }

  vemail = new FormControl(null, [Validators.required, Validators.email]);
  vsenha = new FormControl(null, [Validators.required, Validators.minLength(3)]);

  validarCampo(): boolean{
    return this.vemail.valid && this.vsenha.valid;
  }

  constructor() { }

  ngOnInit(): void {
  }


}
