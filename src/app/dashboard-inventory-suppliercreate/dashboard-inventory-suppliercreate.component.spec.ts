import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInventorySuppliercreateComponent } from './dashboard-inventory-suppliercreate.component';

describe('DashboardInventorySuppliercreateComponent', () => {
  let component: DashboardInventorySuppliercreateComponent;
  let fixture: ComponentFixture<DashboardInventorySuppliercreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardInventorySuppliercreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardInventorySuppliercreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
