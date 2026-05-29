# Standalone Primeng Design System Demo

This Angular 19 standalone app recreates the provided React sign-in and admin/dashboard concepts with mock data and a semantic-first design system.

## What Was Built

- Login screen with workspace, email, password, SSO, password strength, and mock submit.
- Dashboard screen with sidebar, metrics, filters, user table, and mock user data.
- Theme switching for `light`, `dark`, and `emerald`.
- Token-driven styling using this flow:

```text
Primitives -> Semantic tokens -> Themes -> UI classes -> Angular components
```

The Angular component does not hard-code palette values. Styling is driven by CSS custom properties in `src/styles.scss`, and component markup uses semantic utility classes like `card`, `btn-primary`, `input-base`, `text-heading-lg`, and `status-pill`.

## Important Files

- `src/styles.scss` - primitives, semantic tokens, themes, typography utilities, and UI classes.
- `src/app/mock-data.ts` - mock dashboard metrics and users.
- `src/app/app.component.ts` - screen state, theme switching, and filtering logic.
- `src/app/app.component.html` - login and dashboard UI.

## How To Run

Install dependencies:

```bash
npm.cmd install
```

Start the dev server:

```bash
npm.cmd run start
```

Open:

```text
http://localhost:4200/
```

Build for production:

```bash
npm.cmd run build
```

Note: On this Windows machine, use `npm.cmd` instead of plain `npm` in PowerShell if script execution is disabled.




# StandAlonePrimeng

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.3.

## 🎨 Design System - Semantic-First Hybrid Approach

This project implements a **semantic-first hybrid design system** that combines the power of SCSS design tokens with Tailwind CSS utilities, providing both semantic meaning and development flexibility.

### Architecture Overview

Our design system follows a complete semantic token flow:

```
Primitives → Semantic Tokens → Themes → CSS Variables → Tailwind → HTML
```

#### Key Components:

- **Primitives** (`assets/styles/primitives/`) - Raw design values (colors, typography, spacing)
- **Semantic Tokens** (`assets/styles/tokens/`) - Purpose-driven token abstractions
- **Themes** (`assets/styles/themes/`) - Light/dark theme implementations using semantic functions
- **Bridge** (`assets/styles/tokens/tailwind-tokens.js`) - Dynamic SCSS → Tailwind integration
- **Components** - Pre-built semantic utility classes and PrimeNG integrations

### Usage Priority (Semantic-First)

#### 1. **Semantic Utilities** (Highest Priority)

Use semantic component classes that convey meaning and purpose:

```html
<!-- Typography -->
<h1 class="text-page-title">Page Title</h1>
<h2 class="text-section-title">Section Title</h2>
<h3 class="text-card-title">Card Title</h3>
<p class="text-body-medium">Body text content</p>
<span class="text-caption">Caption text</span>

<!-- Buttons -->
<button class="btn-primary">Primary Action</button>
<button class="btn-secondary">Secondary Action</button>
<button class="btn-text">Text Action</button>

<!-- Cards -->
<div class="card">
  <div class="card-header">Header Content</div>
  <div class="card-content">Main Content</div>
  <div class="card-footer">Footer Content</div>
</div>

<!-- Forms -->
<div class="form-group">
  <label class="form-label required">Label Text</label>
  <input class="input-base" placeholder="Enter value" />
  <span class="form-helper">Helper text</span>
</div>

<!-- Semantic Spacing -->
<div class="spacing-component-md">Component with semantic padding</div>
<div class="gap-element-lg">Container with element gaps</div>
<section class="gap-layout-sm">Section with layout spacing</section>
```

#### 2. **Semantic Colors** (Second Priority)

Use semantic color tokens that describe purpose:

```html
<!-- Brand colors -->
<div class="bg-primary text-text-on-primary">Primary brand element</div>
<div class="bg-secondary text-text-on-secondary">Secondary brand element</div>

<!-- State colors -->
<div class="bg-success text-text-on-success">Success message</div>
<div class="bg-warning text-text-on-warning">Warning message</div>
<div class="bg-error text-text-on-error">Error message</div>
<div class="bg-info text-text-on-info">Info message</div>

<!-- Surface colors -->
<div class="bg-surface border-border-subtle">Surface container</div>
<div class="bg-surface-variant border-border-default">Variant surface</div>

<!-- Text colors -->
<p class="text-text-primary">Primary text</p>
<p class="text-text-secondary">Secondary text</p>
<p class="text-text-tertiary">Tertiary text</p>

<!-- Interactive colors -->
<div class="hover:bg-hover focus:bg-focus">Interactive element</div>
```

#### 3. **Tailwind Utilities** (Third Priority)

Use standard Tailwind for layout and positioning:

```html
<div class="flex items-center justify-between p-4 mt-6">
  <span class="text-card-title">Hybrid approach</span>
  <button class="btn-primary ml-4">Action</button>
</div>
```

#### 4. **Primitive Access** (Advanced Usage Only)

Direct access to primitive tokens for edge cases:

```html
<div class="bg-primitive-primary-600 text-primitive-neutral-0">Direct primitive usage (avoid unless necessary)</div>
```

### Theme Switching

The design system supports automatic theme switching:

```html
<!-- Light theme (default) -->
<html class="theme-light">
  <!-- Dark theme -->
  <html class="theme-dark" data-theme="dark">
    <!-- System preference detection -->
    <html>
      <!-- Automatically detects user's system preference -->
    </html>
  </html>
</html>
```

All semantic tokens automatically adapt to the selected theme without code changes.

### Development Workflow

#### Building Styles

```bash
# Compile SCSS and generate Tailwind tokens
npm run build:css

# Watch for SCSS changes
npm run watch:css

# Build Tailwind with semantic tokens
npx tailwindcss build
```

#### Testing Token Integration

```bash
# Test the bridge file
node -e "console.log(require('./assets/styles/tokens/tailwind-tokens.js').colors.primary)"

# Verify semantic functions
# All semantic functions are available: brand-color(), text-color(), surface-color(), etc.
```

### File Structure

```
assets/styles/
├── primitives/           # Raw design values
│   ├── _colors.scss     # Color palettes
│   ├── _typography.scss # Font definitions
│   └── _spacing.scss    # Spacing scale
├── tokens/              # Semantic abstractions
│   ├── _semantic.scss   # Semantic token functions
│   ├── _tailwind-export.scss # SCSS exports
│   └── tailwind-tokens.js    # Bridge to Tailwind
├── themes/              # Theme implementations
│   ├── _light.scss      # Light theme
│   └── _dark.scss       # Dark theme
├── mixins/              # Reusable mixins
│   ├── _components.scss # Component mixins
│   └── _utilities.scss  # Utility mixins
├── vendors/             # Third-party integrations
│   └── _primeng.scss    # PrimeNG customizations
└── main.scss           # Main entry point
```

### Extending the Design System

#### Adding New Semantic Tokens

1. Add the token to appropriate map in `tokens/_semantic.scss`
2. Update the bridge file `tokens/tailwind-tokens.js`
3. Add theme variations in `themes/_light.scss` and `themes/_dark.scss`

#### Creating Custom Components

```scss
// Use semantic token functions in your components
.my-component {
  background-color: surface-color(variant);
  color: text-color(primary);
  border: border-width() solid border-color(subtle);
  padding: spacing-token(component-padding-md);
}
```

#### Adding Custom Tailwind Utilities

```javascript
// In tailwind.config.js
addUtilities({
  ".my-semantic-utility": {
    padding: theme("spacing.component-padding-lg"),
    backgroundColor: theme("colors.surface.variant"),
    color: theme("colors.text.primary"),
  },
});
```

### Benefits of This Approach

✅ **Semantic Meaning** - Code conveys design intent  
✅ **Design Consistency** - Single source of truth for all design decisions  
✅ **Theme Support** - Automatic light/dark mode with proper color adaptations  
✅ **Developer Experience** - Both semantic utilities and Tailwind flexibility  
✅ **Maintainability** - Easy to update design tokens globally  
✅ **Type Safety** - SCSS functions provide compile-time validation  
✅ **Performance** - Optimized CSS output with proper purging

### PrimeNG Integration

All PrimeNG components are automatically styled with the design system tokens. The integration maintains PrimeNG functionality while applying consistent design patterns.

For detailed component customizations, see `assets/styles/vendors/_primeng.scss`.

---

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
