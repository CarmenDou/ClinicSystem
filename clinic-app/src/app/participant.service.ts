import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participant } from './participant';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  private baseURL = "http://localhost:8080/user";
  private participantSource = new BehaviorSubject<Participant | null>(null);
  participant$ = this.participantSource.asObservable();

  constructor(private httpClient: HttpClient) { }

  setParticipant(participant: Participant): void {
    this.participantSource.next(participant);
  }

  getParticipant(): Participant | null {
    return this.participantSource.value;
  }

  createParticipant(participant: Participant):Observable<Participant>{
    const url = `${this.baseURL}/participant`;
    return this.httpClient.post<Participant>(`${url}`, participant);
  }

  getParticipantByUuid(deviceUuid: String): Observable<any>{
    const url = `${this.baseURL}/getParticipantByUuid/${deviceUuid}`;
    return this.httpClient.get<any>(`${url}`);
  }
  
}
