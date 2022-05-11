import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabprescriptionComponent } from './labprescription.component';

describe('LabprescriptionComponent', () => {
  let component: LabprescriptionComponent;
  let fixture: ComponentFixture<LabprescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabprescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabprescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
