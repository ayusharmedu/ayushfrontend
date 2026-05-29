import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';
export type ThemeHue = 'indigo' | 'violet' | 'emerald' | 'green';

const MODE_KEY = 'armedu.theme.mode';
const HUE_KEY = 'armedu.theme.hue';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  readonly modes: ThemeMode[] = ['light', 'dark'];
  readonly hues: ThemeHue[] = ['indigo', 'violet', 'emerald', 'green'];
  readonly mode = signal<ThemeMode>('light');
  readonly hue = signal<ThemeHue>('indigo');

  initialize(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const savedMode = window.localStorage.getItem(MODE_KEY);
    const savedHue = window.localStorage.getItem(HUE_KEY);

    this.setMode(this.isMode(savedMode) ? savedMode : this.mode(), false);
    this.setHue(this.isHue(savedHue) ? savedHue : this.hue(), false);
  }

  setMode(mode: ThemeMode, persist = true): void {
    this.mode.set(mode);
    this.withoutThemeTransition(() => {
      this.document.documentElement.setAttribute('data-theme', mode);
    });

    if (persist && isPlatformBrowser(this.platformId)) {
      window.localStorage.setItem(MODE_KEY, mode);
    }
  }

  setHue(hue: ThemeHue, persist = true): void {
    this.hue.set(hue);
    this.withoutThemeTransition(() => {
      this.document.documentElement.setAttribute('data-hue', hue);
    });

    if (persist && isPlatformBrowser(this.platformId)) {
      window.localStorage.setItem(HUE_KEY, hue);
    }
  }

  private isMode(value: string | null): value is ThemeMode {
    return value === 'light' || value === 'dark';
  }

  private isHue(value: string | null): value is ThemeHue {
    return value === 'indigo' || value === 'violet' || value === 'emerald' || value === 'green';
  }

  private withoutThemeTransition(updateTheme: () => void): void {
    const root = this.document.documentElement;
    root.classList.add('theme-switching');
    updateTheme();

    if (!isPlatformBrowser(this.platformId)) {
      root.classList.remove('theme-switching');
      return;
    }

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => root.classList.remove('theme-switching'));
    });
  }
}
