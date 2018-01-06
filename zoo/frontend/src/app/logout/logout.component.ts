import {Component, OnInit} from '@angular/core';
import {LogoutService} from '../services/logout.service';

@Component({
  selector: 'app-logout',
  template: 'logging out....'
})
export class LogoutComponent implements OnInit {

  constructor(private logoutservice: LogoutService) {
  }

  ngOnInit() {
    this.logout();
  }

  logout() {
    this.logoutservice.logout().subscribe(() => {
      console.log('successful logout');
      window.location.href = '/login';
    });
  }

}
