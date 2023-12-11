import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearuserPage } from './crearuser.page';

describe('CrearuserPage', () => {
  let component: CrearuserPage;
  let fixture: ComponentFixture<CrearuserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
