# Ayush Frontend Design System

This folder follows the same layered design-system pattern as the reference styles package, adapted to this project palette and UI.

## Architecture

```text
primitives -> semantic tokens -> themes -> mixins/integrations -> ui-components -> HTML
```

## Folder Roles

```text
styles/
├── primitives/      Raw source tokens: colors, spacing, typography, icons
├── tokens/          Semantic roles and CSS custom property exports
├── themes/          Runtime CSS variables for light, dark, base, and hue themes
├── mixins/          Shared utility/component recipes
├── integrations/    Third-party library bridges
├── ui-components/   Application-facing UI classes
└── vendors/         Isolated vendor overrides
```

## Layer Rules

- UI classes should use theme variables such as `--color-*`, `--size-*`, `--text-*`, `--shadow-*`.
- Themes should map semantic tokens to runtime CSS variables.
- Semantic tokens should source values from primitives or semantic maps/functions.
- Primitives are the only place for raw palette, spacing, typography, elevation, and icon-size values.
- Avoid adding raw colors, pixel values, or repeated theme aliases in UI component files.

## Theme Pattern

`themes/_base.scss` contains shared theme aliases that are identical for light and dark modes.

`themes/_light.scss` and `themes/_dark.scss` should only define tokens whose value actually changes by mode.

`themes/_custom.scss` handles brand hue variations.

## UI Pattern

HTML should consume stable UI classes and component classes. Styling should flow through CSS variables, for example:

```scss
.ui-card {
  background: var(--color-surface-raised);
  border: var(--border-thin) solid var(--color-border-default);
  border-radius: var(--radius-lg);
}
```

Do not bypass the layer by using primitive colors directly in UI classes.
