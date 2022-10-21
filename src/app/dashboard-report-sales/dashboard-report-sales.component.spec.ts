import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardReportSalesComponent } from './dashboard-report-sales.component';

describe('DashboardReportSalesComponent', () => {
  let component: DashboardReportSalesComponent;
  let fixture: ComponentFixture<DashboardReportSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardReportSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardReportSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
