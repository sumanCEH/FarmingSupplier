import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { LocalStorageService } from './local-storage.service';
// import * as jwt_decode from 'jwt-decode';
// import { JWTObject } from './Model/jwt-object';
// import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

    jwtToken!: string;
    decodedToken!: { [key: string]: string };

    constructor(private localStorageService:LocalStorageService) {
      this.setToken(localStorageService.get("token")?<string>localStorageService.get("token"):null);
      // console.log(this.jwtToken);
    }

    setToken(token: string|null) {
      if (token) {
        this.jwtToken = token;
      }
    }

    decodeToken() {
      if (this.jwtToken) {
        this.decodedToken = jwtDecode(this.jwtToken);
      }
    }

    getDecodeToken() {
      return jwtDecode(this.jwtToken);
    }

    // getUser() {
    //   this.decodeToken();
    //   return this.decodedToken ? this.decodedToken : null;
    // }

    getUser() {
        this.decodeToken();
        return this.decodedToken ? this.decodedToken?.['displayname'] : null;
      }
  
      getEmailId() {
        this.decodeToken();
        return this.decodedToken ? this.decodedToken?.['email'] : null;
      }

    isAdmin(){
      this.decodeToken();
      return this.decodedToken? this.decodedToken?.['userRoles'].replace("[","").replace("]","").split(",").includes("ROLE_ADMIN"):false;
    }

    isFarmer(){
      this.decodeToken();
      return this.decodedToken? this.decodedToken?.['userRoles'].replace("[","").replace("]","").split(",").map((role: string)=>role.trim()).includes("ROLE_FARMER"): false;
    }

    isSupplier(){
        this.decodeToken();
        return this.decodedToken? this.decodedToken?.['userRoles'].replace("[","").replace("]","").split(",").map((role: string)=>role.trim()).includes("ROLE_SUPPLIER"): false;
      }

    getExpiryTime() {
      this.decodeToken();
      return this.decodedToken ? this.decodedToken?.['exp'] : null;
    }

    isTokenExpired(): boolean {
      const expiryTime: any|null = this.getExpiryTime();

      if (expiryTime) {
        return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
      } else {
        return false;
      }

    }

}
