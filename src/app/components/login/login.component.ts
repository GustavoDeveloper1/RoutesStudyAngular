import { Usuario } from './usuario';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    usuario: Usuario = new Usuario()



  constructor( private authService:LoginService) { }

  ngOnInit(): void {

  }
  fazerLogin(){

    this.authService.fazerLoogin(this.usuario)

    // console.log(this.usuario)
  }

}
