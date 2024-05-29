import { Component, OnInit } from '@angular/core';
import { ParticipantService } from './participant.service';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  deviceId!: any;
  participantId!: number;
  constructor(private participantService: ParticipantService) {}

  ngOnInit(): void {
    this.initialize();
  }

  async initialize(){
    await this.getDeviceInfo();
    this.participantService.getParticipantByUuid(this.deviceId.identifier).subscribe(data => {
      if (data && data.length > 0) {
        this.participantService.setParticipant(data[0]);
      }
    })
  }

  async getDeviceInfo(){
    this.deviceId =  await Device.getId();
  }
}
