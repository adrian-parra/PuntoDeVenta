import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGoodsCategoriesComponent } from './dashboard-goods-categories.component';

describe('DashboardGoodsCategoriesComponent', () => {
  let component: DashboardGoodsCategoriesComponent;
  let fixture: ComponentFixture<DashboardGoodsCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardGoodsCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardGoodsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
