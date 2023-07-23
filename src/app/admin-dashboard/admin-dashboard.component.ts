import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  userRole: string = 'admin';

  constructor() { 
    
  }

  ngOnInit():void  {

    // const decodedToken = this.authService.decodeToken();
    // this.userRole = decodedToken.role;
  }

  // onLogout() {
  //   this.authService.logout();
  // }

}
