import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  nome = new FormControl('', [Validators.required]);
  cpf = new FormControl('', [Validators.required])
  email = new FormControl('', [Validators.required, Validators.email]);
  datanascimento = new FormControl('', [Validators.required]);
  senha = new FormControl('', [Validators.required])
  repitasenha = new FormControl('', [Validators.required])
  btsenha = true;
  btrepitasenha = true

  mostrarsenha(): boolean{
    if(this.btsenha == true){
      this.btsenha = false
      return this.btsenha;
    }else{
      this.btsenha = true;
      return this.btsenha;
    }
  }

  mostrarrepitasenha(): boolean{
    if(this.btrepitasenha == true){
      this.btrepitasenha = false
      return this.btrepitasenha;
    }else{
      this.btrepitasenha = true;
      return this.btrepitasenha;
    }
  }

  validarCampo(): boolean{
    if(this.nome.valid && this.cpf.valid && this.datanascimento.valid){
      return true;
    }else{
      return false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }



}
