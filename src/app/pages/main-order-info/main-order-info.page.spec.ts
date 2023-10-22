import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainOrderInfoPage } from './main-order-info.page';

describe('MainOrderInfoPage', () => {
  let component: MainOrderInfoPage;
  let fixture: ComponentFixture<MainOrderInfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MainOrderInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
