import { Component, OnInit } from '@angular/core';
import { ParticipantAttackService } from '../participant-attack.service';
import { ParticipantAttack } from '../participant-attack';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent implements OnInit{
  participantAttacks!: ParticipantAttack[];

  constructor(private participantAttackService: ParticipantAttackService, private router:Router ){}
  ngOnInit(): void {
    this.getAllParticipantAttacks();
  }

  private getAllParticipantAttacks(){
    this.participantAttackService.getParticipantAttackList().subscribe(data => {
      this.participantAttacks = data;
    })
  }

  patientDetail(id:number){
    this.router.navigate(['patient-detail',id]);
  }

  patientReport(id:number){
    this.router.navigate(['patient-report',id]);
  }
}
