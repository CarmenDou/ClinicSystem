import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attack } from './attack';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttackService {
  private baseURL = "http://localhost:8080/user";
  constructor(private httpClient:HttpClient) { }

  createAttack(attack: Attack):Observable<Object>{
    const url = `${this.baseURL}/attacks`;
    return this.httpClient.post(`${url}`,attack);
  }

  getTodayAttacksByParticipantId(participantId: number): Observable<any>{
    const url = `${this.baseURL}/todayAttacks/${participantId}`;
    return this.httpClient.get<any>(`${url}`);
  }

  getAttackById(id: number): Observable<any>{
    const url = `${this.baseURL}/getAttack/${id}`;
    return this.httpClient.get<any>(`${url}`);
  }

  updateAttack(id: number, attack: Attack):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/attack/${id}`,attack);
  }

  getLastSevenDaysReports(participantId: number): Observable<Attack[]>{
    const url = `${this.baseURL}/attackReport/${participantId}`;
    return this.httpClient.get<Attack[]>(`${url}`);
  }
}
