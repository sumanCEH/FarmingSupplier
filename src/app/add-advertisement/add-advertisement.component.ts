import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../userService';
import { AuthService } from '../auth.service'; // Import AuthService or the relevant service for handling authentication

@Component({
  selector: 'app-add-advertisement',
  templateUrl: './add-advertisement.component.html',
  styleUrls: ['./add-advertisement.component.css']
})
export class AddAdvertisementComponent {
  advertisement: any = {};

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private authService: AuthService // Inject AuthService or the relevant authentication service
  ) {}

  submitForm() {
    const supplierId = localStorage.getItem('id');
    console.log(supplierId);
    const payload = { supplierId, advertisement: this.advertisement };
    console.log(payload);

    // Get the authentication token from AuthService
    const authToken = this.authService.getAuthToken();

    // Set the authorization header with the token
    const header = new HttpHeaders({ 'Authorization': `Bearer ${authToken}` });

    this.http.post('http://localhost:9002/supplier/postAdd', payload, { headers: header })
      .subscribe(
        (response: any) => {
          console.log('Advertisement posted successfully', response);
          // Add any success handling code here
        }
        // (error) => {
        //   console.error('Error posting advertisement', error);
        //   // Add any error handling code here
        // }
      );
  }
}
