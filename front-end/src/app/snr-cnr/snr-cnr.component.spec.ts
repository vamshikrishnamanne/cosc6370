import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnrCnrComponent } from './snr-cnr.component';

describe('SnrCnrComponent', () => {
  let component: SnrCnrComponent;
  let fixture: ComponentFixture<SnrCnrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnrCnrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnrCnrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
