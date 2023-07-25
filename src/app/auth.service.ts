import { HttpClient, HttpErrorResponse } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import jwtDecode from 'jwt-decode';
  import { catchError, firstValueFrom, map, tap, throwError } from 'rxjs';
  // import { JWTObject } from './Model/jwt-object';
  // import { LocalStorageService } from './local-storage.service';
  // import { JwtService } from './jwt.service';
  import { Router } from '@angular/router';
  // import { GlobalErrorHandler } from '../global-error-handler/global-error-handler';
  // import { User } from '../Model/user';
// import { catchError, Observable, tap, throwError } from 'rxjs';
import { UserService } from '../app/userService';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:9002'; // Replace with your Spring Boot backend API URL

  constructor(private http: HttpClient, private router: Router , private userService: UserService) {}

  login(email: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/token`, { email, password });
  }

  
 
// Add the getAuthToken() method
getAuthToken(): string | null {
  return localStorage.getItem('token');
}
  saveToken(token: string) {
    
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  decodeToken(): any {
    const token = this.getToken();
    if (token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(atob(base64));
    }
    return null;
  }

  isAuthenticated(): boolean {
    // Check if the user is authenticated based on the token
    const token = this.getToken();
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
    
  
  }
  






 