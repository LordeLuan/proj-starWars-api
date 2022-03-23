import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoFilmComponent } from './perso-film.component';

describe('PersoFilmComponent', () => {
  let component: PersoFilmComponent;
  let fixture: ComponentFixture<PersoFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersoFilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
