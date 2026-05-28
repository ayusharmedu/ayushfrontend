import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create the app shell', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it('should initialize root theme attributes', () => {
    TestBed.createComponent(AppComponent);

    expect(document.documentElement.getAttribute('data-theme')).toBeTruthy();
    expect(document.documentElement.getAttribute('data-hue')).toBeTruthy();
  });
});
