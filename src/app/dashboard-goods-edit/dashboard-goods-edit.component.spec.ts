import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGoodsEditComponent } from './dashboard-goods-edit.component';

describe('DashboardGoodsEditComponent', () => {
  let component: DashboardGoodsEditComponent;
  let fixture: ComponentFixture<DashboardGoodsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardGoodsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardGoodsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
