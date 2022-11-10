import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGoodsCategoryeditComponent } from './dashboard-goods-categoryedit.component';

describe('DashboardGoodsCategoryeditComponent', () => {
  let component: DashboardGoodsCategoryeditComponent;
  let fixture: ComponentFixture<DashboardGoodsCategoryeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardGoodsCategoryeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardGoodsCategoryeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
