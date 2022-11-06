import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardClientsEditcustomerComponent } from './dashboard-clients-editcustomer.component';

describe('DashboardClientsEditcustomerComponent', () => {
  let component: DashboardClientsEditcustomerComponent;
  let fixture: ComponentFixture<DashboardClientsEditcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardClientsEditcustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardClientsEditcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
