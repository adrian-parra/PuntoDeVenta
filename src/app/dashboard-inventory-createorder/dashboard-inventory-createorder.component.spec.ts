import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInventoryCreateorderComponent } from './dashboard-inventory-createorder.component';

describe('DashboardInventoryCreateorderComponent', () => {
  let component: DashboardInventoryCreateorderComponent;
  let fixture: ComponentFixture<DashboardInventoryCreateorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardInventoryCreateorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardInventoryCreateorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
