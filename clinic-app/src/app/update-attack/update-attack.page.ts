import { Component, OnInit } from '@angular/core';
import { Attack } from '../attack';
import { AttackService } from '../attack.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-attack',
  templateUrl: './update-attack.page.html',
  styleUrls: ['./update-attack.page.scss'],
})
export class UpdateAttackPage implements OnInit {
  id!: number;
  attack: Attack = new Attack();
  constructor(private attackService: AttackService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.attackService.getAttackById(this.id).subscribe(data => {
      this.attack = data[0];
    })
  }

  onSubmit(){
    this.attackService.updateAttack(this.id, this.attack).subscribe(data => {
      console.log(data);
      this.goToAttackList();
      },error => console.log(error));
  }

  goToAttackList() {
    this.router.navigate(['/tabs/tab2']);
  }
}
