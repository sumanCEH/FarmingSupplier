import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  constructor(private http:HttpClient) { }

  

  getFarmerDetails(email: string) {
    const token = localStorage.getItem("token");
    console.log(token);
    const header=new HttpHeaders({"Authorization":"Bearer "+token});
    console.log(header);
    
   return this.http.get(`http://localhost:9002/farmer/getFarmerByEmail?email=${email}`, { headers: header}  )
  }
}
