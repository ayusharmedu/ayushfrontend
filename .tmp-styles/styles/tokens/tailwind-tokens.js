/**
 * Design System → Tailwind Bridge
 * Complete semantic-first token mapping with no fallbacks
 * 
 * This file provides ALL semantic tokens from your design system:
 * - Brand Colors ($brand-colors)
 * - Semantic Colors ($semantic-colors) 
 * - Surface Colors ($surface-colors)
 * - Text Colors ($text-colors)
 * - Border Colors ($border-colors)
 * - Interactive Colors ($interactive-colors)
 * - Spacing Tokens ($spacing-tokens)
 * - Component Tokens (Button, Input, Card, etc.)
 */

const path = require('path');

let primitiveTokens = null;

/**
 * Compile SCSS exports to extract primitive design tokens
 * This reads your _tailwind-export.scss :export values
 */
function getPrimitiveTokens() {
  if (primitiveTokens) return primitiveTokens;

  try {
    const sass = require('sass');
    const scssFile = path.join(__dirname, '_tailwind-export.scss');
    
    const result = sass.compile(scssFile, {
      includePaths: [
        path.join(__dirname, '..'),
        path.join(__dirname, '../primitives'),
        path.join(__dirname, '../tokens')
      ],
      outputStyle: 'expanded'
    });
    
    // Extract :export block from compiled CSS
    const exportRegex = /:export\s*\{([^}]+)\}/;
    const exportMatch = result.css.match(exportRegex);
    
    if (!exportMatch) {
      throw new Error('No :export block found in compiled CSS');
    }
    
    const exportContent = exportMatch[1];
    const tokens = {};
    
    // Parse CSS properties from :export block
    const propertyRegex = /([^;:\s]+)\s*:\s*([^;]+)/g;
    let match;
    
    while ((match = propertyRegex.exec(exportContent)) !== null) {
      const key = match[1].trim();
      const value = match[2].trim().replace(/['"]/g, ''); // Remove quotes
      tokens[key] = value;
    }
    
    primitiveTokens = tokens;
    console.log(`✅ Loaded ${Object.keys(tokens).length} primitive tokens from SCSS`);
    return tokens;
    
  } catch (error) {
    throw new Error(`Failed to compile SCSS tokens: ${error.message}`);
  }
}

/**
 * Recreate get-color() function in JavaScript
 * Maps to your $color-palettes in primitives/_colors.scss
 */
function getColor(palette, shade) {
  const tokens = getPrimitiveTokens();
  // Handle special cases for neutral colors with decimal shades
  const key = shade === 0 ? `${palette}0` : 
              shade === 25 ? `${palette}25` :
              shade === 850 ? `${palette}850` :
              `${palette}${shade}`;
  
  if (!tokens[key]) {
    throw new Error(`Color ${palette}-${shade} not found in primitive tokens`);
  }
  
  return tokens[key];
}

/**
 * Recreate spacing() function in JavaScript
 * Maps to your $spacing in primitives/_spacing.scss
 */
function spacing(size) {
  const tokens = getPrimitiveTokens();
  const key = `spacing${size.toString().replace('.', '_')}`;
  
  if (!tokens[key]) {
    throw new Error(`Spacing ${size} not found in primitive tokens`);
  }
  
  return tokens[key];
}

/**
 * Color alpha function (recreates color-alpha from SCSS)
 */
function colorAlpha(color, alpha) {
  // Convert hex to rgba
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * BRAND COLORS - Recreate $brand-colors from tokens/_semantic.scss
 */
function getBrandColors() {
  return {
    primary: getColor('primary', 600),
    'primary-hover': getColor('primary', 700),
    'primary-active': getColor('primary', 800),
    'primary-disabled': getColor('neutral', 300),
    
    secondary: getColor('secondary', 600),
    'secondary-hover': getColor('secondary', 700),
    'secondary-active': getColor('secondary', 800),
    'secondary-disabled': getColor('neutral', 300),
    
    accent: getColor('primary', 500),
    'accent-subtle': getColor('primary', 100)
  };
}

/**
 * SEMANTIC COLORS - Recreate $semantic-colors from tokens/_semantic.scss
 */
function getSemanticColors() {
  return {
    success: getColor('success', 500),
    'success-hover': getColor('success', 600),
    'success-subtle': getColor('success', 50),
    'success-muted': getColor('success', 100),
    
    warning: getColor('warning', 500),
    'warning-hover': getColor('warning', 600),
    'warning-subtle': getColor('warning', 50),
    'warning-muted': getColor('warning', 100),
    
    error: getColor('error', 500),
    'error-hover': getColor('error', 600),
    'error-subtle': getColor('error', 50),
    'error-muted': getColor('error', 100),
    
    info: getColor('info', 500),
    'info-hover': getColor('info', 600),
    'info-subtle': getColor('info', 50),
    'info-muted': getColor('info', 100)
  };
}

/**
 * SURFACE COLORS - Recreate $surface-colors from tokens/_semantic.scss
 */
function getSurfaceColors() {
  return {
    background: getColor('neutral', 0),
    surface: getColor('neutral', 0),
    'surface-variant': getColor('neutral', 50),
    'surface-subtle': getColor('neutral', 25),
    'surface-muted': getColor('neutral', 100),
    'surface-emphasis': getColor('neutral', 900),
    'surface-inverse': getColor('neutral', 900)
  };
}

/**
 * TEXT COLORS - Recreate $text-colors from tokens/_semantic.scss
 */
function getTextColors() {
  return {
    primary: getColor('neutral', 900),
    secondary: getColor('neutral', 600),
    tertiary: getColor('neutral', 500),
    disabled: getColor('neutral', 400),
    placeholder: getColor('neutral', 400),
    inverse: getColor('neutral', 0),
    
    // Text on colored backgrounds
    'on-primary': getColor('neutral', 0),
    'on-secondary': getColor('neutral', 0),
    'on-success': getColor('neutral', 900),
    'on-warning': getColor('neutral', 900),
    'on-error': getColor('neutral', 0),
    'on-info': getColor('neutral', 0)
  };
}

/**
 * BORDER COLORS - Recreate $border-colors from tokens/_semantic.scss
 */
function getBorderColors() {
  return {
    default: getColor('neutral', 200),
    subtle: getColor('neutral', 100),
    emphasis: getColor('neutral', 300),
    strong: getColor('neutral', 400),
    inverse: getColor('neutral', 700),
    
    // Interactive borders
    focus: getColor('primary', 500),
    error: getColor('error', 500),
    success: getColor('success', 500),
    warning: getColor('warning', 500)
  };
}

/**
 * INTERACTIVE COLORS - Recreate $interactive-colors from tokens/_semantic.scss
 */
function getInteractiveColors() {
  return {
    hover: colorAlpha(getColor('neutral', 900), 0.04),
    active: colorAlpha(getColor('neutral', 900), 0.08),
    focus: colorAlpha(getColor('primary', 500), 0.12),
    disabled: colorAlpha(getColor('neutral', 500), 0.12),
    
    // Overlay colors
    overlay: colorAlpha(getColor('neutral', 900), 0.6),
    backdrop: colorAlpha(getColor('neutral', 900), 0.8)
  };
}

/**
 * SPACING TOKENS - Recreate $spacing-tokens from tokens/_semantic.scss
 */
function getSpacingTokens() {
  return {
    // Component internal spacing
    'component-padding-sm': spacing(3),    // 12px
    'component-padding-md': spacing(4),    // 16px
    'component-padding-lg': spacing(6),    // 24px
    
    // Element spacing
    'element-gap-sm': spacing(2),          // 8px
    'element-gap-md': spacing(4),          // 16px
    'element-gap-lg': spacing(6),          // 24px
    
    // Layout spacing
    'layout-section-sm': spacing(8),       // 32px
    'layout-section-md': spacing(12),      // 48px
    'layout-section-lg': spacing(16),      // 64px
    
    // Form spacing
    'form-element-gap': spacing(4),        // 16px
    'form-group-gap': spacing(6),          // 24px
    'form-section-gap': spacing(8),        // 32px
    
    // Card spacing
    'card-padding-sm': spacing(4),         // 16px
    'card-padding-md': spacing(6),         // 24px
    'card-padding-lg': spacing(8),         // 32px
    'card-gap': spacing(4)                 // 16px
  };
}

/**
 * BUTTON COMPONENT TOKENS - Recreate $button-tokens from tokens/_semantic.scss
 */
function getButtonTokens() {
  const brandColors = getBrandColors();
  const textColors = getTextColors();
  const interactiveColors = getInteractiveColors();
  const borderColors = getBorderColors();
  
  return {
    // Primary button
    'primary-bg': brandColors.primary,
    'primary-bg-hover': brandColors['primary-hover'],
    'primary-bg-active': brandColors['primary-active'],
    'primary-bg-disabled': brandColors['primary-disabled'],
    'primary-text': textColors['on-primary'],
    'primary-text-disabled': textColors.disabled,
    
    // Secondary button
    'secondary-bg': 'transparent',
    'secondary-bg-hover': interactiveColors.hover,
    'secondary-bg-active': interactiveColors.active,
    'secondary-border': borderColors.default,
    'secondary-border-hover': borderColors.emphasis,
    'secondary-text': textColors.primary,
    'secondary-text-disabled': textColors.disabled,
    
    // Text button
    'text-bg-hover': interactiveColors.hover,
    'text-bg-active': interactiveColors.active,
    'text-color': brandColors.primary,
    'text-color-hover': brandColors['primary-hover'],
    'text-color-disabled': textColors.disabled
  };
}

/**
 * INPUT COMPONENT TOKENS - Recreate $input-tokens from tokens/_semantic.scss
 */
function getInputTokens() {
  const surfaceColors = getSurfaceColors();
  const borderColors = getBorderColors();
  const textColors = getTextColors();
  const semanticColors = getSemanticColors();
  
  return {
    bg: surfaceColors.surface,
    'bg-disabled': surfaceColors['surface-muted'],
    'bg-readonly': surfaceColors['surface-variant'],
    
    border: borderColors.default,
    'border-hover': borderColors.emphasis,
    'border-focus': borderColors.focus,
    'border-error': borderColors.error,
    'border-disabled': borderColors.subtle,
    
    text: textColors.primary,
    'text-disabled': textColors.disabled,
    placeholder: textColors.placeholder,
    
    label: textColors.secondary,
    'label-disabled': textColors.disabled,
    
    helper: textColors.tertiary,
    error: semanticColors.error
  };
}

/**
 * CARD COMPONENT TOKENS - Recreate $card-tokens from tokens/_semantic.scss
 */
function getCardTokens() {
  const surfaceColors = getSurfaceColors();
  const borderColors = getBorderColors();
  const tokens = getPrimitiveTokens();
  
  return {
    bg: surfaceColors.surface,
    'bg-hover': surfaceColors['surface-variant'],
    border: borderColors.subtle,
    'border-hover': borderColors.default,
    shadow: tokens.shadowSm,
    'shadow-hover': tokens.shadowMd
  };
}

/**
 * NAVIGATION COMPONENT TOKENS - Recreate $nav-tokens from tokens/_semantic.scss
 */
function getNavTokens() {
  const surfaceColors = getSurfaceColors();
  const borderColors = getBorderColors();
  const textColors = getTextColors();
  const brandColors = getBrandColors();
  const interactiveColors = getInteractiveColors();
  
  return {
    bg: surfaceColors.surface,
    border: borderColors.subtle,
    
    'item-text': textColors.secondary,
    'item-text-hover': textColors.primary,
    'item-text-active': brandColors.primary,
    'item-bg-hover': interactiveColors.hover,
    'item-bg-active': colorAlpha(brandColors.primary, 0.08),
    
    divider: borderColors.subtle
  };
}

/**
 * TAILWIND COLOR CONFIGURATION
 * Semantic-first color mapping for Tailwind CSS
 */
function getTailwindColors() {
  const brandColors = getBrandColors();
  const semanticColors = getSemanticColors();
  const surfaceColors = getSurfaceColors();
  const textColors = getTextColors();
  const borderColors = getBorderColors();
  const interactiveColors = getInteractiveColors();
  
  return {
    // SEMANTIC COLORS (Highest Priority - Use These First!)
    
    // Brand colors
    primary: {
      DEFAULT: brandColors.primary,
      hover: brandColors['primary-hover'],
      active: brandColors['primary-active'],
      disabled: brandColors['primary-disabled'],
      subtle: brandColors['accent-subtle']
    },
    
    secondary: {
      DEFAULT: brandColors.secondary,
      hover: brandColors['secondary-hover'],
      active: brandColors['secondary-active'],
      disabled: brandColors['secondary-disabled']
    },
    
    accent: {
      DEFAULT: brandColors.accent,
      subtle: brandColors['accent-subtle']
    },
    
    // State colors
    success: {
      DEFAULT: semanticColors.success,
      hover: semanticColors['success-hover'],
      subtle: semanticColors['success-subtle'],
      muted: semanticColors['success-muted']
    },
    
    warning: {
      DEFAULT: semanticColors.warning,
      hover: semanticColors['warning-hover'],
      subtle: semanticColors['warning-subtle'],
      muted: semanticColors['warning-muted']
    },
    
    error: {
      DEFAULT: semanticColors.error,
      hover: semanticColors['error-hover'],
      subtle: semanticColors['error-subtle'],
      muted: semanticColors['error-muted']
    },
    
    info: {
      DEFAULT: semanticColors.info,
      hover: semanticColors['info-hover'],
      subtle: semanticColors['info-subtle'],
      muted: semanticColors['info-muted']
    },
    
    // Surface colors
    background: surfaceColors.background,
    surface: {
      DEFAULT: surfaceColors.surface,
      variant: surfaceColors['surface-variant'],
      subtle: surfaceColors['surface-subtle'],
      muted: surfaceColors['surface-muted'],
      emphasis: surfaceColors['surface-emphasis'],
      inverse: surfaceColors['surface-inverse']
    },
    
    // Text colors (as color tokens)
    text: {
      primary: textColors.primary,
      secondary: textColors.secondary,
      tertiary: textColors.tertiary,
      disabled: textColors.disabled,
      placeholder: textColors.placeholder,
      inverse: textColors.inverse,
      'on-primary': textColors['on-primary'],
      'on-secondary': textColors['on-secondary'],
      'on-success': textColors['on-success'],
      'on-warning': textColors['on-warning'],
      'on-error': textColors['on-error'],
      'on-info': textColors['on-info']
    },
    
    // Border colors
    border: {
      DEFAULT: borderColors.default,
      subtle: borderColors.subtle,
      emphasis: borderColors.emphasis,
      strong: borderColors.strong,
      inverse: borderColors.inverse,
      focus: borderColors.focus,
      error: borderColors.error,
      success: borderColors.success,
      warning: borderColors.warning
    },
    
    // Interactive colors
    hover: interactiveColors.hover,
    active: interactiveColors.active,
    focus: interactiveColors.focus,
    disabled: interactiveColors.disabled,
    overlay: interactiveColors.overlay,
    backdrop: interactiveColors.backdrop,
    
    // Primitive color palettes (for advanced usage)
    primitive: createPrimitiveColorPalettes()
  };
}

/**
 * Create primitive color palettes from exported tokens
 */
function createPrimitiveColorPalettes() {
  const tokens = getPrimitiveTokens();
  const palettes = {};
  
  const colorNames = ['primary', 'secondary', 'neutral', 'success', 'warning', 'error', 'info'];
  const shades = [0, 25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 850, 900, 950];
  
  colorNames.forEach(colorName => {
    palettes[colorName] = {};
    shades.forEach(shade => {
      const tokenKey = shade === 0 ? `${colorName}0` : `${colorName}${shade}`;
      if (tokens[tokenKey]) {
        palettes[colorName][shade] = tokens[tokenKey];
      }
    });
  });
  
  return palettes;
}

/**
 * TAILWIND SPACING CONFIGURATION
 * Includes both primitive spacing and semantic spacing tokens
 */
function getTailwindSpacing() {
  const tokens = getPrimitiveTokens();
  const spacingTokens = getSpacingTokens();
  const spacing = {};
  
  // Add primitive spacing values
  Object.keys(tokens).forEach(key => {
    if (key.startsWith('spacing')) {
      // Convert spacingX_Y to X.Y format for Tailwind
      const spacingKey = key.replace('spacing', '').replace('_', '.');
      spacing[spacingKey] = tokens[key];
    }
  });
  
  // Add semantic spacing tokens with semantic names
  Object.keys(spacingTokens).forEach(key => {
    const semanticKey = key.replace(/-/g, '-');
    spacing[semanticKey] = spacingTokens[key];
  });
  
  return spacing;
}

/**
 * MAIN EXPORTS FOR TAILWIND CONSUMPTION
 */
module.exports = {
  // Tailwind configuration objects
  colors: getTailwindColors(),
  spacing: getTailwindSpacing(),
  
  // Semantic token categories (for advanced usage)
  semantic: {
    brand: getBrandColors(),
    semantic: getSemanticColors(),
    surface: getSurfaceColors(),
    text: getTextColors(),
    border: getBorderColors(),
    interactive: getInteractiveColors(),
    spacing: getSpacingTokens()
  },
  
  // Component token categories
  components: {
    button: getButtonTokens(),
    input: getInputTokens(),
    card: getCardTokens(),
    nav: getNavTokens()
  },
  
  // Raw primitive tokens
  primitive: getPrimitiveTokens(),
  
  // Utility functions
  getColor,
  spacing,
  colorAlpha
};

// ES module compatibility
module.exports.default = module.exports;