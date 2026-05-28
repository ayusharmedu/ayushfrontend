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
