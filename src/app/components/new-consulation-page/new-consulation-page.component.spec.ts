import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConsulationPageComponent } from './new-consulation-page.component';

describe('NewConsulationPageComponent', () => {
  let component: NewConsulationPageComponent;
  let fixture: ComponentFixture<NewConsulationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewConsulationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConsulationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
