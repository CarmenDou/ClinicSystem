import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAttackPage } from './add-attack.page';

const routes: Routes = [
  {
    path: '',
    component: AddAttackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAttackPageRoutingModule {}
