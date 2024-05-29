import { Component, OnInit } from '@angular/core';
import { AttackService } from '../attack.service';
import { Attack } from '../attack';
import { Router } from '@angular/router';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  attacks!: Attack[];
  constructor(private attackService: AttackService, private router: Router, private participantService: ParticipantService) {}

  ngOnInit(): void {
    this.participantService.participant$.subscribe(participant => {
      if (participant !== null) {
        this.loadAttacks(participant.participantId);
      }
    })
  }
  loadAttacks(participantId:any) {
    this.attackService.getTodayAttacksByParticipantId(participantId).subscribe(response => {
      this.attacks = response;
    })
  }

  addAttack(){
    this.router.navigate(['create-attack']);
  }
  editAttack(attackId:number){
    this.router.navigate(['update-attack', attackId]);
  }
}
