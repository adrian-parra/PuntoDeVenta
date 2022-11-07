import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGoodsCategorycreateComponent } from './dashboard-goods-categorycreate.component';

describe('DashboardGoodsCategorycreateComponent', () => {
  let component: DashboardGoodsCategorycreateComponent;
  let fixture: ComponentFixture<DashboardGoodsCategorycreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardGoodsCategorycreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardGoodsCategorycreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
