import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabprescriptionsComponent } from './labprescriptions.component';

describe('LabprescriptionsComponent', () => {
  let component: LabprescriptionsComponent;
  let fixture: ComponentFixture<LabprescriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabprescriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabprescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
