import { UsuarioService } from './../../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario-create';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  usuario: Usuario = {
    id: '',
    nome: '',
    cpf: '',
    email: '',
    datanascimento: '',
    senha: '',
    perfis: [],
    loja: {
      nomeempresa: ''
    }
  }

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
    if(this.nome.valid && this.cpf.valid && this.datanascimento.valid && this.email.valid && this.repitasenha.valid && this.senha.valid){
      return true;
    }else{
      return false;
    }
  }

  constructor(
    private service: UsuarioService, 
    private router: Router,
    private toast: ToastrService
    ) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.usuario).subscribe(resp => {
      if(resp == null){
        this.toast.success("Usuário cadastrado com sucesso");
        this.router.navigate(['/login'])
      }
      console.warn("Response: " + resp);
    }, error => {
      this.toast.error(error.error.message)
    })
  }
}
