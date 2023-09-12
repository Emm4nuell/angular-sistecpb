import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  email = new FormControl(null, [Validators.required, Validators.email]);
  senha = new FormControl(null, [Validators.required, Validators.minLength(3)]);



  validarCampo(): boolean{
    return this.email.valid && this.senha.valid;
  }

}
