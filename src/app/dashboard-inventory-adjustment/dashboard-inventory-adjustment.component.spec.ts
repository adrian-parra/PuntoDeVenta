import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInventoryAdjustmentComponent } from './dashboard-inventory-adjustment.component';

describe('DashboardInventoryAdjustmentComponent', () => {
  let component: DashboardInventoryAdjustmentComponent;
  let fixture: ComponentFixture<DashboardInventoryAdjustmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardInventoryAdjustmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardInventoryAdjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
