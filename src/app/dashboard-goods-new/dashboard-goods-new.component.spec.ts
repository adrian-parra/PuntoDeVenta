import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGoodsNewComponent } from './dashboard-goods-new.component';

describe('DashboardGoodsNewComponent', () => {
  let component: DashboardGoodsNewComponent;
  let fixture: ComponentFixture<DashboardGoodsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardGoodsNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardGoodsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
