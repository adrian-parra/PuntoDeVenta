import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardReportAverageComponent } from './dashboard-report-average.component';

describe('DashboardReportAverageComponent', () => {
  let component: DashboardReportAverageComponent;
  let fixture: ComponentFixture<DashboardReportAverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardReportAverageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardReportAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
