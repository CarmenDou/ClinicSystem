import { Component, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';
import { Participant } from '../participant';
import { ParticipantService } from '../participant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  deviceId: any;
  inputUserName!: string;
  userName: any;
  participant: Participant = new Participant();

  constructor(private participantService: ParticipantService, private router: Router) {
    this.inputUserName = '';
  }

  ngOnInit() {
    this.initialize();
  }

  async initialize(){
    await this.getDeviceInfo();
    this.participantService.getParticipantByUuid(this.deviceId.identifier).subscribe(data => {
      if (data && data.length > 0) {
        this.participant = data[0];
        this.router.navigate(['/tabs/tab1']);
      }
    })
  }

  async getDeviceInfo(){
    this.deviceId =  await Device.getId();
  }

  submit(){
    console.log(this.deviceId);
    this.participant.userName = this.inputUserName;
    this.participant.deviceUuid = this.deviceId.identifier;
    this.saveParticipant();
  }

  saveParticipant(){
    console.log(this.participant);
    this.participantService.createParticipant(this.participant).subscribe((data: Participant) => {
      this.participantService.setParticipant(data);
    },
    error => console.error());
    this.router.navigate(['/tabs/tab1']);
  }

}
