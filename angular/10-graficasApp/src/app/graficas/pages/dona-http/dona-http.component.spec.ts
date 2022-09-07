import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonaHttpComponent } from './dona-http.component';

describe('DonaHttpComponent', () => {
  let component: DonaHttpComponent;
  let fixture: ComponentFixture<DonaHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonaHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonaHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
