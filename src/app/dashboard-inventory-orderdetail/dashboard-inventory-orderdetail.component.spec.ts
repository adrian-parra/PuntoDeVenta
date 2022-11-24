import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInventoryOrderdetailComponent } from './dashboard-inventory-orderdetail.component';

describe('DashboardInventoryOrderdetailComponent', () => {
  let component: DashboardInventoryOrderdetailComponent;
  let fixture: ComponentFixture<DashboardInventoryOrderdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardInventoryOrderdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardInventoryOrderdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
