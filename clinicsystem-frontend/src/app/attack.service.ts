import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attack } from './attack';

@Injectable({
  providedIn: 'root'
})
export class AttackService {
  private baseURL = "http://localhost:8080/user";

  constructor(private httpClient:HttpClient) { }

  getAttacksByParticipantId(participantId: number, page: number, pageSize: number): Observable<any>{
    const url = `${this.baseURL}/attacks/${participantId}`;
    const params = new HttpParams().set('page',page.toString()).set('size',pageSize.toString());
    return this.httpClient.get<any>(`${url}`, {params});
  }

  getLastSevenDaysReports(participantId: number): Observable<Attack[]>{
    const url = `${this.baseURL}/attackReport/${participantId}`;
    return this.httpClient.get<Attack[]>(`${url}`);
  }

  createAttack():Observable<Object>{
    const url = `${this.baseURL}/attacks`;
    return this.httpClient.post(`${url}`,{attackDateTime: '2024-05-15T09:38:00', location: 'inside', participant: {participantId: 9, userName: '', deviceUuid: ''}});
  }
}
