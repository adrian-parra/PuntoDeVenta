import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardClientsDetailcustomerComponent } from './dashboard-clients-detailcustomer.component';

describe('DashboardClientsDetailcustomerComponent', () => {
  let component: DashboardClientsDetailcustomerComponent;
  let fixture: ComponentFixture<DashboardClientsDetailcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardClientsDetailcustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardClientsDetailcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
