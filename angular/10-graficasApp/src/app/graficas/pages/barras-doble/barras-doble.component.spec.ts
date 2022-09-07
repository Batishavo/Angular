import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrasDobleComponent } from './barras-doble.component';

describe('BarrasDobleComponent', () => {
  let component: BarrasDobleComponent;
  let fixture: ComponentFixture<BarrasDobleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrasDobleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarrasDobleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
