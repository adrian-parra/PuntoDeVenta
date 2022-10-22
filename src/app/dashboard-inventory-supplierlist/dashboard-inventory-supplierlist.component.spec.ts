import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInventorySupplierlistComponent } from './dashboard-inventory-supplierlist.component';

describe('DashboardInventorySupplierlistComponent', () => {
  let component: DashboardInventorySupplierlistComponent;
  let fixture: ComponentFixture<DashboardInventorySupplierlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardInventorySupplierlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardInventorySupplierlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
