import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEmployeesEditemployeeComponent } from './dashboard-employees-editemployee.component';

describe('DashboardEmployeesEditemployeeComponent', () => {
  let component: DashboardEmployeesEditemployeeComponent;
  let fixture: ComponentFixture<DashboardEmployeesEditemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEmployeesEditemployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardEmployeesEditemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
