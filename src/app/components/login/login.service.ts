import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private usuarioAutheticado : boolean = false

  showMenu = new EventEmitter<boolean>();

  constructor( private router: Router) { }

  fazerLoogin(usuario: Usuario) {

    if(usuario.nome == 'usuario1' && usuario.password == '123545' ) {
    
      this.usuarioAutheticado = true;
      this.router.navigate(['/']);

      this.showMenu.emit(true)

    }
    else {
      this.usuarioAutheticado == false
      
      this.showMenu.emit(false)
    }
  }


  isAuthenticated() {
    return this.usuarioAutheticado
  }

}
