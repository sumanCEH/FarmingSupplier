import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private http:HttpClient){ }
  // Replace this method with the actual way you retrieve the supplierId
  getSupplierId(): number {
    // For demonstration purposes, let's assume you retrieve the supplierId from local storage
    return Number(localStorage.getItem('supplierId'));
  }

  getsupplier(){
    const token = localStorage.getItem('token');
    const emailid = localStorage.getItem('useremail');
    const header = new HttpHeaders({"Authorization": "Bearer "+ token});
    return this.http.get(`http://localhost:9002/user/farmer/details?email=${emailid}`, {headers: header});
  }
}