import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ICONS, IconDefinition, IconPart } from './icon.registry';

function coerceIconName(value: unknown): string {
  return `${value ?? ''}`;
}

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg
      [ngClass]="className"
      [attr.viewBox]="icon.viewBox"
      [attr.fill]="icon.fill"
      [attr.stroke]="icon.stroke"
      [attr.stroke-width]="strokeWidth || icon.strokeWidth"
      [attr.stroke-linecap]="icon.strokeLinecap"
      [attr.stroke-linejoin]="icon.strokeLinejoin"
      [attr.aria-hidden]="ariaLabel ? null : 'true'"
      [attr.role]="ariaLabel ? 'img' : null"
      [attr.aria-label]="ariaLabel || null"
    >
      @for (part of icon.parts; track $index) {
        @switch (part.type) {
          @case ('path') {
            <path
              [attr.d]="part.d"
              [attr.fill]="part.fill || null"
              [attr.stroke]="part.stroke || null"
              [attr.stroke-width]="part.strokeWidth || null"
            />
          }
          @case ('line') {
            <line
              [attr.x1]="part.x1"
              [attr.y1]="part.y1"
              [attr.x2]="part.x2"
              [attr.y2]="part.y2"
              [attr.stroke]="part.stroke || null"
              [attr.stroke-width]="part.strokeWidth || null"
            />
          }
          @case ('polyline') {
            <polyline
              [attr.points]="part.points"
              [attr.stroke]="part.stroke || null"
              [attr.stroke-width]="part.strokeWidth || null"
            />
          }
          @case ('rect') {
            <rect
              [attr.x]="part.x || null"
              [attr.y]="part.y || null"
              [attr.width]="part.width"
              [attr.height]="part.height"
              [attr.rx]="part.rx || null"
              [attr.fill]="part.fill || null"
            />
          }
          @case ('circle') {
            <circle [attr.cx]="part.cx" [attr.cy]="part.cy" [attr.r]="part.r" [attr.fill]="part.fill || null" />
          }
          @case ('polygon') {
            <polygon [attr.points]="part.points" [attr.fill]="part.fill || null" />
          }
        }
      }
    </svg>
  `,
  styles: [':host { display: contents; }'],
})
export class IconComponent {
  @Input({ transform: coerceIconName }) name = '';
  @Input() className = 'icon';
  @Input() strokeWidth = '';
  @Input() ariaLabel = '';

  get icon(): IconDefinition {
    return ICONS[this.name as keyof typeof ICONS] || ICONS.circle;
  }

  protected readonly iconParts = (_: number, part: IconPart) => part;
}
