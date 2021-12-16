import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntensitiesComponent } from './intensities.component';

describe('IntensitiesComponent', () => {
  let component: IntensitiesComponent;
  let fixture: ComponentFixture<IntensitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntensitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntensitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
