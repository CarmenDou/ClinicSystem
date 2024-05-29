import { Component, OnInit } from '@angular/core';
import { Attack } from '../attack';
import { Participant } from '../participant';
import { AttackService } from '../attack.service';
import { Router } from '@angular/router';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-add-attack',
  templateUrl: './add-attack.page.html',
  styleUrls: ['./add-attack.page.scss'],
})
export class AddAttackPage implements OnInit {
  selectedRadioValue: string = 'inside';
  selectedDatetime!: string;
  attack: Attack = new Attack;
  participant: Participant = new Participant();
  constructor(private attackService: AttackService, private router: Router, private participantService: ParticipantService) { }

  ngOnInit() {
    this.participantService.participant$.subscribe(participant => {
      if (participant !== null) {
        this.participant = participant;
      }
    })
  }

  submit(){
    this.attack.attackDateTime = this.selectedDatetime;
    this.attack.location = this.selectedRadioValue;
    this.attack.participant = this.participant;
    this.saveAttack();
  }

  saveAttack(){
    this.attackService.createAttack(this.attack).subscribe(data => {
      // console.log(data);
    },
    error => console.log(error));
    this.router.navigate(['/tabs/tab2']);
  }

}
