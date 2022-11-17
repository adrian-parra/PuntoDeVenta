import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInventorySuppliereditComponent } from './dashboard-inventory-supplieredit.component';

describe('DashboardInventorySuppliereditComponent', () => {
  let component: DashboardInventorySuppliereditComponent;
  let fixture: ComponentFixture<DashboardInventorySuppliereditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardInventorySuppliereditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardInventorySuppliereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
