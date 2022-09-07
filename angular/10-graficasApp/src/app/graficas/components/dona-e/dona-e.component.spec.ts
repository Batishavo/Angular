import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonaEComponent } from './dona-e.component';

describe('DonaEComponent', () => {
  let component: DonaEComponent;
  let fixture: ComponentFixture<DonaEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonaEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonaEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
