# Design System Documentation

A comprehensive, scalable design system built with Material Design 3 principles, optimized for Tailwind CSS and PrimeNG integration.

## 📁 File Structure

```
assets/styles/
├── primitives/          # Core design tokens
│   ├── _colors.scss     # Color palettes and utilities
│   ├── _typography.scss # Font system and text styles
│   └── _spacing.scss    # Spacing, shadows, borders
├── tokens/              # Semantic design tokens
│   ├── _semantic.scss   # Purpose-driven tokens
│   └── _tailwind-export.scss # Tailwind integration
├── mixins/              # Reusable mixins
│   ├── _utilities.scss  # General utility mixins
│   └── _components.scss # Component-specific mixins
├── themes/              # Theme definitions
│   ├── _light.scss      # Light theme
│   ├── _dark.scss       # Dark theme
│   └── _custom.scss     # Custom theme variants
├── vendors/             # Third-party integrations
│   └── _primeng.scss    # PrimeNG customization
├── design-system.scss   # Main entry point
└── README.md           # This documentation
```

## 🎨 Color System

### Primitive Colors
The color system is built on Material Design 3 principles with comprehensive palettes:

- **Primary**: Teal/Emerald brand colors (50-950 scale)
- **Secondary**: Blue supporting colors (50-950 scale) 
- **Neutral**: Grayscale system (0, 50-950 scale)
- **Semantic**: Success, Warning, Error, Info (50-950 scale each)

### Usage

#### SCSS
```scss
// Using primitive colors
.my-element {
  background-color: get-color(primary, 600);
  color: get-color(neutral, 0);
}

// Using semantic tokens
.my-button {
  background-color: var(--color-primary);
  color: var(--color-text-on-primary);
}
```

#### Tailwind CSS
```html
<!-- Using design system colors -->
<div class="bg-primary-600 text-white">
<button class="bg-primary hover:bg-primary-hover">
<div class="text-text-primary bg-surface">
```

## 🔤 Typography System

### Font Family
- **Primary**: Poppins (weights: 100-900)
- **Secondary**: System fonts fallback
- **Monospace**: Code/technical content

### Semantic Typography
```scss
// SCSS Mixins
.page-title { @include typography(page-title); }
.section-title { @include typography(section-title); }
.body-text { @include typography(body-medium); }
```

```html
<!-- Tailwind Utilities -->
<h1 class="text-page-title">Page Title</h1>
<h2 class="text-section-title">Section</h2>
<p class="text-body-medium">Content</p>
```

### Responsive Typography
```scss
// Fluid typography
@include fluid-text(font-size(sm), font-size(lg));

// Responsive variants
@include responsive-typography(body-small, body-large);
```

## 📏 Spacing System

### Scale
Based on 4px grid with comprehensive scale (0-96):
- `spacing(1)` = 4px
- `spacing(4)` = 16px  
- `spacing(8)` = 32px

### Semantic Spacing
```scss
// Component spacing
padding: spacing-token(component-padding-md);

// Layout spacing  
margin-bottom: spacing-token(layout-section-md);
```

### Tailwind Integration
```html
<div class="p-4 m-8 gap-6">
<section class="space-y-layout-md">
```

## 🎯 Semantic Tokens

Purpose-driven tokens that abstract primitive values:

```scss
// Brand colors
--color-primary
--color-primary-hover
--color-secondary

// Surface colors
--color-background
--color-surface
--color-surface-variant

// Text colors
--color-text-primary
--color-text-secondary
--color-text-disabled

// Interactive colors
--color-hover
--color-focus
--color-active
```

## 🌗 Theme System

### Theme Switching
```html
<!-- Light theme (default) -->
<html>

<!-- Dark theme -->
<html data-theme="dark">

<!-- Custom themes -->
<html data-theme="high-contrast">
<html data-theme="enterprise">
```

### Creating Custom Themes
```scss
// Define custom theme
@include create-custom-theme(
  'brand-red',
  #dc2626,      // Primary color
  #2563eb,      // Secondary color  
  #fafafa       // Background
);
```

## 🧩 Component Mixins

### Button Components
```scss
.my-button {
  @include button-primary;
}

.secondary-btn {
  @include button-secondary;
}

.icon-btn {
  @include button-icon(2.5rem);
}
```

### Form Components
```scss
.my-input {
  @include input-base;
  
  &.small {
    @include input-small;
  }
}

.form-group {
  @include form-group;
  
  label {
    @include form-label;
  }
}
```

### Layout Components
```scss
.my-card {
  @include card-base;
  
  .header {
    @include card-header;
  }
  
  .content {
    @include card-content;
  }
}
```

## 🔧 Utility Mixins

### Layout Utilities
```scss
.centered-content {
  @include flex-center;
}

.responsive-grid {
  @include grid-auto-fit(250px, spacing(4));
}

.container {
  @include container(1200px, spacing(4));
}
```

### Visual Utilities
```scss
.interactive-element {
  @include interactive-states;
  @include focus-visible;
}

.loading-state {
  @include loading-state;
}

.elevated-card {
  @include shadow-hover(sm, md);
}
```

### Responsive Utilities
```scss
.responsive-text {
  @include mobile {
    font-size: font-size(sm);
  }
  
  @include desktop {
    font-size: font-size(lg);
  }
}
```

## 🎛️ PrimeNG Integration

The design system fully customizes PrimeNG components:

### Automatic Integration
```html
<!-- PrimeNG components automatically use design system -->
<p-button label="Primary" />
<p-inputText placeholder="Styled input" />
<p-card>
  <h3>Card Title</h3>
  <p>Card content</p>
</p-card>
```

### Custom Overrides
```scss
// Additional PrimeNG customization
.p-button.custom {
  @include button-primary;
  border-radius: border-radius(lg);
}
```

## 🎨 Tailwind CSS Integration

### Enhanced Configuration
The design system extends Tailwind with:
- Design system colors
- Semantic typography utilities
- Component classes
- Custom animations
- Responsive breakpoints

### Custom Utilities
```html
<!-- Design system specific utilities -->
<button class="btn-primary">Primary Button</button>
<div class="card">Card Component</div>
<div class="card-interactive">Interactive Card</div>

<!-- Semantic typography -->
<h1 class="text-page-title">Page Title</h1>
<p class="text-body-large">Large body text</p>
```

## ♿ Accessibility Features

### Focus Management
```scss
// Automatic focus visible styles
@include focus-visible;

// Custom focus ring
@include focus-ring($color, $width, $offset);
```

### Screen Reader Support
```html
<span class="sr-only">Screen reader only text</span>
<a href="#main" class="skip-link">Skip to content</a>
```

### Reduced Motion
```scss
// Respects user preferences
@include reduced-motion {
  // Reduced animations
}
```

## 📱 Responsive Design

### Breakpoints
```scss
@include mobile { /* 0-767px */ }
@include tablet { /* 768-1023px */ }
@include desktop { /* 1024px+ */ }
@include large-desktop { /* 1200px+ */ }
```

### Responsive Containers
```html
<div class="container-design">
  <!-- Responsive padding and max-width -->
</div>
```

## 🚀 Getting Started

### 1. Import the Design System
```scss
// In your main SCSS file
@import 'assets/styles/design-system';
```

### 2. Configure Tailwind
The `tailwind.config.js` is already set up with design system integration.

### 3. Apply Themes
```typescript
// Angular theme service example
setTheme(theme: string) {
  document.documentElement.setAttribute('data-theme', theme);
}
```

### 4. Use Components
```html
<!-- Use design system classes -->
<div class="bg-surface border border-border-default rounded-lg p-6">
  <h2 class="text-section-title mb-4">Section Title</h2>
  <p class="text-body-medium text-text-secondary">Content</p>
  <button class="btn-primary mt-4">Action</button>
</div>
```

## 📊 Performance Considerations

### CSS Custom Properties
- Minimal runtime impact
- Efficient theme switching
- Tree-shakable with proper tooling

### Tailwind Optimization
- Configured safelist for dynamic classes
- PurgeCSS integration
- Minimal bundle size

### Font Loading
- Font-display: swap for better performance
- Preloaded critical font weights

## 🔄 Maintenance

### Adding New Colors
1. Add to primitive palettes in `primitives/_colors.scss`
2. Update semantic tokens in `tokens/_semantic.scss` 
3. Add Tailwind exports in `tokens/_tailwind-export.scss`
4. Update `tailwind.config.js` color mappings

### Creating New Components
1. Add mixins to `mixins/_components.scss`
2. Create utility classes in main file
3. Add Tailwind component classes if needed
4. Update documentation

### Theme Updates
1. Modify theme files in `themes/` directory
2. Update CSS custom property mappings
3. Test across all themes
4. Verify accessibility compliance

## 🤝 Best Practices

### Naming Conventions
- Use semantic names over descriptive ones
- Follow BEM methodology for custom classes
- Prefix design system classes with `ds-` if needed

### Token Usage
- Prefer semantic tokens over primitive values
- Use CSS custom properties for dynamic values
- Leverage Tailwind utilities for spacing/layout

### Component Development
- Use design system mixins for consistency
- Apply focus states for accessibility
- Test across themes and screen sizes
- Follow responsive-first approach

## 📋 Checklist for Implementation

- [ ] Import design system in main styles
- [ ] Configure theme switching mechanism
- [ ] Apply semantic typography classes
- [ ] Use design system colors consistently
- [ ] Implement focus management
- [ ] Test responsive behavior
- [ ] Verify accessibility compliance
- [ ] Optimize for performance
- [ ] Document custom components
- [ ] Set up maintenance workflow

This design system provides a solid foundation for building consistent, accessible, and maintainable user interfaces. It's designed to scale with your project while maintaining design consistency and developer experience.