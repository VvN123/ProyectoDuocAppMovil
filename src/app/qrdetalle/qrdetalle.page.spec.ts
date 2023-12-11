import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QRdetallePage } from './qrdetalle.page';

describe('QRdetallePage', () => {
  let component: QRdetallePage;
  let fixture: ComponentFixture<QRdetallePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QRdetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
