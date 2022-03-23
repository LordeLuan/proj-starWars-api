import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarFilmesComponent } from './star-filmes.component';

describe('StarFilmesComponent', () => {
  let component: StarFilmesComponent;
  let fixture: ComponentFixture<StarFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarFilmesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
