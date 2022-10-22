import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEmployeesListComponent } from './dashboard-employees-list.component';

describe('DashboardEmployeesListComponent', () => {
  let component: DashboardEmployeesListComponent;
  let fixture: ComponentFixture<DashboardEmployeesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEmployeesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardEmployeesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
