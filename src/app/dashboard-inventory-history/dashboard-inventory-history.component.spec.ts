import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInventoryHistoryComponent } from './dashboard-inventory-history.component';

describe('DashboardInventoryHistoryComponent', () => {
  let component: DashboardInventoryHistoryComponent;
  let fixture: ComponentFixture<DashboardInventoryHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardInventoryHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardInventoryHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
