import { Injectable } from '@angular/core';
import { AppointmentDTO } from './appointment-dto';
import { LabTest } from './lab-test';
import { Medicine } from './medicine';
import { HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  //declare variables -- global 
  appointments: AppointmentDTO[]; //list of all appointments
  //formData: AppointmentDTO = new AppointmentDTO(); //store data in employee

  labtests: LabTest[];
  medicines:Medicine[];
 

  constructor(private httpClient: HttpClient) { } //HttpClient

  //get All Appointments //Method for binding all Appointments

  getAllAppointments(){
    this.httpClient.get(environment.apiUrl+'/api/appointments/dto')
    .toPromise().then(response =>
      this.appointments= response as AppointmentDTO[]);
  }


  getAllLabTests(){
    this.httpClient.get(environment.apiUrl+'/api/labtests')
    .toPromise().then(response =>
      this.labtests= response as LabTest[]);
  }

  getAllMedicines(){
    this.httpClient.get(environment.apiUrl+'/api/medicines')
    .toPromise().then(response =>
      this.medicines = response as Medicine[]);
  }
}
