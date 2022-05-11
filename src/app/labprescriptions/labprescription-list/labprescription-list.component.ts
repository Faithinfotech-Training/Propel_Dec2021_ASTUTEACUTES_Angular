import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LabtestprescriptionService} from 'src/app/shared/labtestprescription.service'

@Component({
  selector: 'app-labprescription-list',
  templateUrl: './labprescription-list.component.html',
  styleUrls: ['./labprescription-list.component.scss']
})
export class LabprescriptionListComponent implements OnInit {

    //declare
    filter: string;
    page: number=1;
    patId: number;

    constructor(public labtestprescriptionService: LabtestprescriptionService, private router: Router ) { }

  ngOnInit(): void {
   //this.labtestprescriptionService.getAllLabTestPrescribedByPatientId();
  }

}
