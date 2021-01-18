import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationsPageComponent } from './consultations-page.component';

describe('ConsultationsPageComponent', () => {
  let component: ConsultationsPageComponent;
  let fixture: ComponentFixture<ConsultationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
