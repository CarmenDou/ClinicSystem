import { Component, OnInit } from '@angular/core';
import { Participant } from '../participant';
import { Router } from '@angular/router';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  participant: Participant = new Participant();
  constructor(private participantService: ParticipantService, private router: Router) {}

  ngOnInit() {
    this.participantService.participant$.subscribe(participant => {
      if (participant !== null) {
        this.participant = participant;
      }
    })
  }
}
