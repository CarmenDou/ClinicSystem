import { Component, OnInit } from '@angular/core';
import { Attack } from '../attack';
import { AttackService } from '../attack.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrl: './patient-detail.component.css'
})
export class PatientDetailComponent implements OnInit{
  attacks!: Attack[];
  participantid!:number;
  currentPage = 0;
  pageSize = 10;
  totalPages!: number;
  constructor(private attackService: AttackService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.participantid = this.route.snapshot.params['id'];
    this.loadAttacks();
  }

  loadAttacks() {
    this.attackService.getAttacksByParticipantId(this.participantid,this.currentPage, this.pageSize).subscribe(response => {
      this.attacks = response.content;
      this.totalPages = response.totalPages;
    })
    // this.attackService.createAttack().subscribe(data => {
    //   console.log(data);
    // },
    // error => console.log(error));
  }

  goToPage(pageNumber:number): void{
    this.currentPage = pageNumber;
    // console.log(this.currentPage);
    this.attackService.getAttacksByParticipantId(this.participantid,this.currentPage, this.pageSize).subscribe(response => {
      this.attacks = response.content;
      // console.log(this.attacks);
    })
  }

  goToNextOrPreviousPage(direction:string):void{
    this.goToPage(direction == 'forward' ? this.currentPage + 1: this.currentPage -1);
  }
}
