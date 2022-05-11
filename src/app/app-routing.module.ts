import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { DoctorComponent } from './doctor/doctor.component';
import { LabtechnicianComponent } from './labtechnician/labtechnician.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import {AuthGuard} from './shared/auth.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path: 'admin', component: AdminComponent,canActivate: [AuthGuard],data:{role:'1'}},
  {path: 'receptionist', component: ReceptionistComponent,canActivate: [AuthGuard],data:{role:'2'}},
  {path: 'doctor', component: DoctorComponent,canActivate: [AuthGuard],data:{role:'3'}},
  {path: 'labtechnician', component: LabtechnicianComponent,canActivate: [AuthGuard],data:{role:'4'}},
  {path: 'pharmacist', component: PharmacistComponent,canActivate: [AuthGuard],data:{role:'5'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
