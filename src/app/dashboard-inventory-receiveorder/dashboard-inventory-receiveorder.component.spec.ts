import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInventoryReceiveorderComponent } from './dashboard-inventory-receiveorder.component';

describe('DashboardInventoryReceiveorderComponent', () => {
  let component: DashboardInventoryReceiveorderComponent;
  let fixture: ComponentFixture<DashboardInventoryReceiveorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardInventoryReceiveorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardInventoryReceiveorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
