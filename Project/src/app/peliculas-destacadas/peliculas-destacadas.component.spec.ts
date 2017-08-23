import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasDestacadasComponent } from './peliculas-destacadas.component';

describe('PeliculasDestacadasComponent', () => {
  let component: PeliculasDestacadasComponent;
  let fixture: ComponentFixture<PeliculasDestacadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculasDestacadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasDestacadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
