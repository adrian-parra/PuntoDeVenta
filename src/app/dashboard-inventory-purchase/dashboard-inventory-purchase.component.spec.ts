import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInventoryPurchaseComponent } from './dashboard-inventory-purchase.component';

describe('DashboardInventoryPurchaseComponent', () => {
  let component: DashboardInventoryPurchaseComponent;
  let fixture: ComponentFixture<DashboardInventoryPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardInventoryPurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardInventoryPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
