import { Injectable } from '@angular/core';
import { LabtestprescriptionDTO } from './labtestprescription-dto';
import { LabTest } from './lab-test';
import { Labtestpres } from './labtestpres';
import { Medicine } from './medicine';
import { HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabtestprescriptionService {

    //declare variables -- global 
    labprescriptions: LabtestprescriptionDTO[]; //list of all lab prescriptions by ID
    labprescriptions2:Labtestpres[];
    formData: Labtestpres = new Labtestpres(); //store data in lab test prescribed


    labtests: LabTest[];


    
    
  constructor(private httpClient: HttpClient) { } //HttpClient

  getAllLabPrescriptions(){
    this.httpClient.get(environment.apiUrl+'/api/labtestsprescribed')
    .toPromise().then(response =>
      this.labprescriptions2= response as Labtestpres[]);
  }

  //get a particular Employee

  getLabPrescription(presId: number): Observable<any>{
    return this.httpClient.get(environment.apiUrl+'/api/labtestsprescribed/'+ presId);
  }


  
  insertLabPrescription(pres: Labtestpres): Observable<any>{
    return this.httpClient.post(environment.apiUrl+'/api/labtestsprescribed/', pres);
  }
  //get a list of lab prescriptions for a particular patient


  updateLabPrescription(pres: Labtestpres): Observable<any>{
    return this.httpClient.put(environment.apiUrl+'/api/labtestsprescribed/', pres);
  }

  //delete Employee
  deleteLabPrescription(presId: number):  Observable<any>{
    return this.httpClient.delete(environment.apiUrl+'/api/labtestsprescribed/'+ presId);
  }


  getAllLabTestPrescribedByPatientId(patId: number){
    this.httpClient.get(environment.apiUrl+'/api/labtestsprescribed/dto/'+ patId)
    .toPromise().then(response =>
      this.labprescriptions= response as LabtestprescriptionDTO[]);
  }


  

  getAllLabTests(){
    this.httpClient.get(environment.apiUrl+'/api/labtests')
    .toPromise().then(response =>
      this.labtests= response as LabTest[]);
  }

}
