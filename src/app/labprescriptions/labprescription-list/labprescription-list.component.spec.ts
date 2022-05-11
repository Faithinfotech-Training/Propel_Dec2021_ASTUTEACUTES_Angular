import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabprescriptionListComponent } from './labprescription-list.component';

describe('LabprescriptionListComponent', () => {
  let component: LabprescriptionListComponent;
  let fixture: ComponentFixture<LabprescriptionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabprescriptionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabprescriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
