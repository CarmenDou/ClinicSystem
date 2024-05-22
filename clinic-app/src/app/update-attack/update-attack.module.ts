import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateAttackPageRoutingModule } from './update-attack-routing.module';

import { UpdateAttackPage } from './update-attack.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateAttackPageRoutingModule
  ],
  declarations: [UpdateAttackPage]
})
export class UpdateAttackPageModule {}
