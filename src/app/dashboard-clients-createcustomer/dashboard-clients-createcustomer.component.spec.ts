import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardClientsCreatecustomerComponent } from './dashboard-clients-createcustomer.component';

describe('DashboardClientsCreatecustomerComponent', () => {
  let component: DashboardClientsCreatecustomerComponent;
  let fixture: ComponentFixture<DashboardClientsCreatecustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardClientsCreatecustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardClientsCreatecustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
