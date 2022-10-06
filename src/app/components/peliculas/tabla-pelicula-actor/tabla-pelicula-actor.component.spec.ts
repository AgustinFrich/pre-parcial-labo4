import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPeliculaActorComponent } from './tabla-pelicula-actor.component';

describe('TablaPeliculaActorComponent', () => {
  let component: TablaPeliculaActorComponent;
  let fixture: ComponentFixture<TablaPeliculaActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPeliculaActorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaPeliculaActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
