import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentDTO } from 'src/app/shared/appointment-dto';
import {AppointmentService} from 'src/app/shared/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {

    //declare
    filter: string;
    page: number=1;

    constructor(public appointmentService: AppointmentService, private router: Router ) { }

  ngOnInit(): void {
    this.appointmentService.getAllAppointments();
  }

}
