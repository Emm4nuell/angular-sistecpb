import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private toast: ToastrService) { }

  ngOnInit(): void {
  }

  sair():void{
    var token = localStorage.removeItem("token");
    if(token == null){
      this.toast.success("Usuário desconectado")
      this.router.navigate(['/login'])
    }
  }

}
