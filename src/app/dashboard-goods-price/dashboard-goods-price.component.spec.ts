import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGoodsPriceComponent } from './dashboard-goods-price.component';

describe('DashboardGoodsPriceComponent', () => {
  let component: DashboardGoodsPriceComponent;
  let fixture: ComponentFixture<DashboardGoodsPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardGoodsPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardGoodsPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
