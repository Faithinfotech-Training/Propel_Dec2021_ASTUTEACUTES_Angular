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

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    AppointmentComponent,
    AppointmentListComponent,
    LabprescriptionsComponent,
    LabprescriptionComponent,
    LabprescriptionListComponent,
    LoginComponent
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
