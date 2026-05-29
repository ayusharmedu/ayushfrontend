# ThemeSwitcherComponent Documentation

## Purpose
`ThemeSwitcherComponent` is a small UI widget that allows users to change the app theme at runtime.
It toggles between `light` and `dark` mode and selects one of four brand hue colors.

## Files
- `theme-switcher.component.ts` — component logic and state
- `theme-switcher.component.html` — component template
- `theme-switcher.component.scss` — component host style
- Shared styles in `src/styles/ui-components/_theme-switcher.scss` and `src/styles/ui-components/_button.scss`

## Component logic (`theme-switcher.component.ts`)

### Main responsibilities
- Injects `ThemeService` from `src/app/core/services/theme.service.ts`
- Exposes the service as `theme` for template binding
- Controls component visibility using local signal `isVisible`
- Calls `setMode()` and `setHue()` when the user clicks buttons

### Important code
```ts
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
```

### What this means
- `theme.modes` and `theme.hues` are arrays from `ThemeService`
- `theme.mode()` and `theme.hue()` are reactive signals representing the current selection
- `isVisible` is a local boolean signal that toggles whether the full panel is open or only the restore button shows

## Template (`theme-switcher.component.html`)

### Conditional rendering
The template uses Angular template syntax:
- `@if (isVisible()) { ... } @else { ... }`
- When visible:
  - renders the theme switcher panel
- When hidden:
  - renders a floating restore button

### Main sections of the panel
- Header
  - `.tweaks-panel` wrapper
  - `.tweaks-header` container
  - `.tweaks-title` label `v3 tweaks`
  - close button using `.icon-btn.icon-btn-sm`
- Theme mode section
  - `.tweaks-section` with label `Theme`
  - `.tweaks-row` and `.tweaks-mode-seg`
  - `@for (mode of theme.modes; track mode)` creates a button for each theme mode
  - each mode button uses `.tweaks-mode-btn`
  - active mode gets `class.active`
- Hue selection section
  - `.tweaks-section` with label `Brand Primary`
  - `.tweaks-color-chips` container
  - `@for (hue of theme.hues; track hue)` creates a color chip button for each hue
  - each chip uses `.tweaks-color-chip`
  - additional hue classes are applied dynamically:
    - `.hue-indigo`
    - `.hue-violet`
    - `.hue-emerald`
    - `.hue-green`
  - the currently selected hue button also gets `class.active`
  - if selected, the chip includes an inline SVG checkmark
- Restore button
  - `.theme-restore-btn` appears when `isVisible()` is false
  - clicking it makes the panel visible again

### UI classes in the template
- `.tweaks-panel`
- `.tweaks-header`
- `.tweaks-title`
- `.icon-btn`
- `.icon-btn-sm`
- `.tweaks-body`
- `.tweaks-section`
- `.tweaks-section-label`
- `.tweaks-row`
- `.text-body-sm`
- `.text-secondary`
- `.tweaks-mode-seg`
- `.tweaks-mode-btn`
- `.tweaks-color-chips`
- `.tweaks-color-chip`
- `.hue-indigo`, `.hue-violet`, `.hue-emerald`, `.hue-green`
- `.theme-restore-btn`
- `.icon`

## Styling sources

### Component stylesheet
`theme-switcher.component.scss` contains only:
```scss
:host {
  display: contents;
}
```
This means the component host element does not add an extra wrapper in the rendered DOM.

### Component-specific CSS file
The visual styling for the theme switcher is defined in `src/styles/ui-components/_theme-switcher.scss`, including:
- panel layout and positioning (`.tweaks-panel`)
- header layout (`.tweaks-header`)
- section spacing and labels
- color chip sizes and hover effects
- active state styles for mode buttons and chips
- restore button layout and positioning
- responsive behavior for smaller screens

### Shared button styles
The `.icon-btn` and `.icon-btn-sm` classes are defined in `src/styles/ui-components/_button.scss`.
These provide shared icon-button styling used by this component and others.

### Global typography / utility classes
The classes `.text-body-sm` and `.text-secondary` are global utility classes defined in `src/styles/mixins/_utilities.scss`.
They provide consistent text size and text color styling across the app.

### Theme hue variables
The hue classes map to theme CSS variables defined in `src/styles/tokens/_semantic.scss`:
- `.hue-indigo` → `--color-hue-indigo`
- `.hue-violet` → `--color-hue-violet`
- `.hue-emerald` → `--color-hue-emerald`
- `.hue-green` → `--color-hue-green`

These variables control the actual color shown on each chip and the selected brand accent.

## Behavior and integration

### How the component works
- Clicking a theme mode button calls `setMode(mode)`
- Clicking a hue chip calls `setHue(hue)`
- The component does not persist theme settings itself
- `ThemeService` handles persistence and applying the theme to the document root

### Where it is used
- This component is a reusable shared UI component with selector `app-theme-switcher`
- It is usually added to a top-level layout or app shell
- The actual style changes depend on `ThemeService` and global CSS variables

### ThemeService responsibilities
`ThemeService` manages:
- current theme mode (`light` or `dark`)
- current hue (`indigo`, `violet`, `emerald`, `green`)
- setting `data-theme` and `data-hue` on `<html>`
- persisting values to `localStorage`

## Summary
This component is mainly a UI layer for theme selection.
Its template renders a floating settings panel and a restore button.
Most visual styles come from `src/styles/ui-components/_theme-switcher.scss` and shared button/utility styles, not from the component SCSS itself.
The component logic is small: it delegates mode/hue selection to `ThemeService` and maintains visibility with `isVisible`.
