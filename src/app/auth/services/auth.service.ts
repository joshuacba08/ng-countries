import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { DataLogin, LoginResp, User } from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  private baseUrl: string = 'https://fake-login-api-production.up.railway.app';
  auth!:LoginResp;  
  constructor(private http: HttpClient) {  
  }
  setAuth(auth:LoginResp){
    this.auth = auth;
  }
  getAuth() {
    return this.auth;
  }

  login(data: DataLogin){
    console.table(data);
    return this.http.post<LoginResp>(`${this.baseUrl}/api/auth/login`,data)
  }

  saveLogin(auth:LoginResp){
    localStorage.setItem('login',JSON.stringify(auth));
  }

  getLocalStorage(key:string){
    return localStorage.getItem(key);
  }
  deleteLocalStorage(key:string){
    localStorage.removeItem(key);
  }
}
