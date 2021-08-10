import {Component, OnInit} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;
  public userEmail;

  constructor(
    private authService: AuthService
  ){

  }
  ngOnInit() {
    this.userEmail = this.authService.getUserEmail();
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  onLogout(){
    this.authService.logout();
  }
}
