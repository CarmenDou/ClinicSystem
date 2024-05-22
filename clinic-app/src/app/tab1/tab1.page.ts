import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Attack } from '../attack';
import { AttackService } from '../attack.service';
import { Participant } from '../participant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  selectedRadioValue: string = 'inside';
  selectedDatetime!: string;
  attack: Attack = new Attack;
  participant: Participant = new Participant();
  constructor(private actionSheet: ActionSheetController, private attackService: AttackService, private router: Router) {}
  async presentActionSheet(){
    const actionSheet = await this.actionSheet.create({
      header: 'Test Action Sheet',
      mode: 'ios',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'trash',
          handler: () => {
            console.log("You clicked me");
          }
        },
        {
          text: 'Hello',
          role: 'destructive',
          icon: 'add',
          handler: () => {
            console.log("You added me");
          }
        }
      ]
    });
    await actionSheet.present();
  }

  submit(){
    this.attack.attackDateTime = this.selectedDatetime;
    this.attack.location = this.selectedRadioValue;
    this.participant.participantId = 14
    this.attack.participant = this.participant;
    this.saveAttack();
  }

  saveAttack(){
    this.attackService.createAttack(this.attack).subscribe(data => {
      console.log(data);
    },
    error => console.log(error));
    this.router.navigate(['attack-list']);
  }
}
