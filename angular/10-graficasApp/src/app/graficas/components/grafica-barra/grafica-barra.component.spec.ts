import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaBarraComponent } from './grafica-barra.component';

describe('GraficaBarraComponent', () => {
  let component: GraficaBarraComponent;
  let fixture: ComponentFixture<GraficaBarraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaBarraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaBarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
