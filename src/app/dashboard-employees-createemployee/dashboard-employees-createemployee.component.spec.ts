import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEmployeesCreateemployeeComponent } from './dashboard-employees-createemployee.component';

describe('DashboardEmployeesCreateemployeeComponent', () => {
  let component: DashboardEmployeesCreateemployeeComponent;
  let fixture: ComponentFixture<DashboardEmployeesCreateemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEmployeesCreateemployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardEmployeesCreateemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
