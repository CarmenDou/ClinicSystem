import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateAttackPage } from './update-attack.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateAttackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateAttackPageRoutingModule {}
