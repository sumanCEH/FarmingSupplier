import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // @Input() userRole!: string;

  // constructor(private authService: AuthService,
  //   private router: Router) { }

  // ngOnInit(): void {
  // }

  // onLogout() {
  //   this.authService.logout();
  //   this.router.navigate(['/login']);
  // }

  // isAuthenticated() {
  //   return this.authService.isAuthenticated();
  // }



  @Input() userRole!: string;

  isAuthenticated = false;




  constructor(private authService: AuthService, private router: Router) {}




  ngOnInit(): void {

    this.isAuthenticated = this.authService.isAuthenticated();

  }




  onLogout() {

    this.authService.logout();

    this.isAuthenticated = false;

    this.router.navigate(['/login']);

  }

}
