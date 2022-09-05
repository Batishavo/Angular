import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paina1Component } from './paina1.component';

describe('Paina1Component', () => {
  let component: Paina1Component;
  let fixture: ComponentFixture<Paina1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Paina1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paina1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
