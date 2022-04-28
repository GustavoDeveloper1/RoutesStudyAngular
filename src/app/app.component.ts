import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { LoginService } from './components/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routesStudy';

  showMenu:boolean = false;

  constructor(private auService: LoginService) {

    this.auService.showMenu.subscribe(show => this.showMenu = show)

  }

}
