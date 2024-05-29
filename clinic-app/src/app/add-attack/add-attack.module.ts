import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAttackPageRoutingModule } from './add-attack-routing.module';

import { AddAttackPage } from './add-attack.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAttackPageRoutingModule
  ],
  declarations: [AddAttackPage]
})
export class AddAttackPageModule {}
