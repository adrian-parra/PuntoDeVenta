import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardClientsDatabaseComponent } from './dashboard-clients-database.component';

describe('DashboardClientsDatabaseComponent', () => {
  let component: DashboardClientsDatabaseComponent;
  let fixture: ComponentFixture<DashboardClientsDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardClientsDatabaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardClientsDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
