import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPeliculaComponent } from './item-pelicula.component';

describe('ItemPeliculaComponent', () => {
  let component: ItemPeliculaComponent;
  let fixture: ComponentFixture<ItemPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
