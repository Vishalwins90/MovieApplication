import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailePageComponent } from './movie-detaile-page.component';

describe('MovieDetailePageComponent', () => {
  let component: MovieDetailePageComponent;
  let fixture: ComponentFixture<MovieDetailePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDetailePageComponent]
    });
    fixture = TestBed.createComponent(MovieDetailePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
