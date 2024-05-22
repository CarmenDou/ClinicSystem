import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clinician } from './clinician';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  private baseUrl = "http://localhost:8080/user/login";
  constructor(private httpClient: HttpClient) { }

  loginUser(user:Clinician): Observable<object>{
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`, user);
  }
}
