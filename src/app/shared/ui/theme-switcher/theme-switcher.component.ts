import { Component, inject, signal } from '@angular/core';
import { ThemeHue, ThemeMode, ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  imports: [],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss',
})
export class ThemeSwitcherComponent {
  readonly theme = inject(ThemeService);
  readonly isVisible = signal(true);

  setMode(mode: ThemeMode): void {
    this.theme.setMode(mode);
  }

  setHue(hue: ThemeHue): void {
    this.theme.setHue(hue);
  }
}
