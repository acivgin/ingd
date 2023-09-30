import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalletHandlingHomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: PalletHandlingHomeComponent;
  let fixture: ComponentFixture<PalletHandlingHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PalletHandlingHomeComponent],
    });
    fixture = TestBed.createComponent(PalletHandlingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
