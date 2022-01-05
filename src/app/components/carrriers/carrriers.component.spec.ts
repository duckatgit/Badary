import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrriersComponent } from './carrriers.component';

describe('CarrriersComponent', () => {
  let component: CarrriersComponent;
  let fixture: ComponentFixture<CarrriersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrriersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
