import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { AttackReportComponent } from './attack-report/attack-report.component';

const routes: Routes = [
  {path:'user-login', component:UserLoginComponent},
  {path:'patients',component:PatientListComponent},
  {path:'patient-detail/:id',component:PatientDetailComponent},
  {path:'patient-report/:id',component:AttackReportComponent},
  {path:'',redirectTo:'user-login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
