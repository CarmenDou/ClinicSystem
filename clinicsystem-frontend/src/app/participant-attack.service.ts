import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParticipantAttack } from './participant-attack';

@Injectable({
  providedIn: 'root'
})
export class ParticipantAttackService {
  private baseURL = "http://localhost:8080/user/participant-list";

  constructor(private httpClient: HttpClient) { }

  getParticipantAttackList():Observable<ParticipantAttack[]>{
    return this.httpClient.get<ParticipantAttack[]>(`${this.baseURL}`);
  }
}
