import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelryDialogComponent } from './jewelry-dialog.component';

describe('JewelryDialogComponent', () => {
  let component: JewelryDialogComponent;
  let fixture: ComponentFixture<JewelryDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JewelryDialogComponent]
    });
    fixture = TestBed.createComponent(JewelryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
