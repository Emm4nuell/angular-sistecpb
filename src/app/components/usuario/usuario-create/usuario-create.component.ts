import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  constructor() { }

  ngOnInit(): void {
  }



}
