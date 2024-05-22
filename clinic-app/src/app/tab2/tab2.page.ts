import { Component, OnInit } from '@angular/core';
import { AttackService } from '../attack.service';
import { Attack } from '../attack';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  attacks!: Attack[];
  constructor(private attackService: AttackService, private router: Router) {}

  ngOnInit(): void {
    console.log("ngOnInit")
    this.loadAttacks();
  }
  loadAttacks() {
    console.log("loadAttacks");
    this.attackService.getTodayAttacksByParticipantId(14).subscribe(response => {
      console.log(response);
      this.attacks = response;
      console.log(this.attacks);
    })
  }

  addAttack(){
    this.router.navigate(['create-attack']);
  }
  editAttack(attackId:number){
    this.router.navigate(['update-attack', attackId]);
  }
}
