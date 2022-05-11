import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentComponent } from './appointments/appointment/appointment.component';
import { AppointmentListComponent } from './appointments/appointment-list/appointment-list.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LabprescriptionsComponent } from './labprescriptions/labprescriptions.component';
import { LabprescriptionComponent } from './labprescriptions/labprescription/labprescription.component';
import { LabprescriptionListComponent } from './labprescriptions/labprescription-list/labprescription-list.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { DoctorComponent } from './doctor/doctor.component';
import { LabtechnicianComponent } from './labtechnician/labtechnician.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    AppointmentComponent,
    AppointmentListComponent,
    LabprescriptionsComponent,
    LabprescriptionComponent,
    LabprescriptionListComponent,
    LoginComponent,
    AdminComponent,
    ReceptionistComponent,
    DoctorComponent,
    LabtechnicianComponent,
    PharmacistComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
