# JezeroX Design System
Date: 2026-01-24

## Design principles
- High-contrast, dark-first UI with electric accents.
- Product-style layout: clean grid, minimal ornament, clear hierarchy.
- Strong typographic rhythm with generous spacing.
- Motion is subtle, purposeful, and accessible.

## Tokens
### Color palette (base)
- Navy 950: #0B1220
- Navy 900: #111A2B
- Navy 800: #1F2A3A
- Navy 700: #2B3850
- Gray 500: #9AA3B2
- Gray 200: #E3E8F1
- Gray 100: #F5F7FB
- White: #FFFFFF
- Blue 600: #2F6CF0
- Blue 500: #3C7DFF
- Blue 400: #5A93FF
- Teal 600: #16B08F
- Teal 500: #1EC9A8
- Teal 400: #3BD9BA
- Warning: #F5B850
- Error: #F05C5C

### Color tokens (semantic)
- color.bg.page: #0B1220
- color.bg.surface: #111A2B
- color.bg.surface-2: #1F2A3A
- color.bg.elevated: #141E31
- color.text.primary: #F5F7FB
- color.text.secondary: #C9D2E3
- color.text.muted: #9AA3B2
- color.border.subtle: #27334A
- color.border.strong: #2B3850
- color.accent.primary: #3C7DFF
- color.accent.hover: #2F6CF0
- color.accent.pressed: #2456CF
- color.accent.soft: rgba(60, 125, 255, 0.12)
- color.success: #1EC9A8
- color.warning: #F5B850
- color.error: #F05C5C
- color.focus: #5A93FF
- color.overlay: rgba(11, 18, 32, 0.72)

### Typography
- Font families:
  - Heading: Space Grotesk
  - Body: Inter
  - Mono: JetBrains Mono
- Font weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- Type scale:
  - display-1: 56/64
  - display-2: 48/56
  - h1: 40/48
  - h2: 32/40
  - h3: 24/32
  - h4: 20/30
  - h5: 18/28
  - body: 16/24
  - body-sm: 14/20
  - caption: 12/16
- Letter spacing: -0.02em for display and h1, 0 for body

### Spacing
- 8px scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120
- Section spacing:
  - Desktop: 96 to 120
  - Tablet: 72
  - Mobile: 48

### Layout and grid
- 12-column grid, max width 1200 to 1320
- Gutter: 24 desktop, 16 mobile
- Container padding: 24 to 32
- Breakpoints: 640, 768, 1024, 1280, 1440

### Radius
- radius-sm: 8
- radius-md: 12
- radius-lg: 16
- radius-xl: 24
- radius-pill: 9999

### Shadows
- shadow-sm: 0 1px 2px rgba(5, 10, 20, 0.4)
- shadow-md: 0 8px 24px rgba(5, 10, 20, 0.35)
- shadow-lg: 0 16px 48px rgba(5, 10, 20, 0.45)

### Motion
- Duration: 150ms, 250ms, 350ms
- Easing: cubic-bezier(0.16, 1, 0.3, 1)
- Respect prefers-reduced-motion for all animations

## Component specs
### Buttons
- Base: radius-md, font weight 600, letter spacing 0.01em, transition 150ms
- Sizes:
  - sm: height 32, padding 8 12, text 14/20
  - md: height 40, padding 10 16, text 14/20
  - lg: height 48, padding 12 20, text 16/24
- Primary:
  - bg color.accent.primary, text color.text.primary, border color.accent.primary
  - hover: color.accent.hover, active: color.accent.pressed
  - disabled: 40 percent opacity, no shadow
- Secondary:
  - bg transparent, text color.accent.primary, border 1px color.accent.primary
  - hover: color.accent.soft, active: color.accent.pressed with text color.text.primary
- Ghost:
  - bg transparent, text color.text.primary, border transparent
  - hover: color.bg.surface-2
- Focus: 2px outline color.focus

### Cards
- Base: bg color.bg.surface, border 1px color.border.subtle, radius-lg, padding 24, shadow-sm
- Hover: border color.accent.soft or shadow-md
- Service card: icon 32, title h4, body text body
- Case study card: image top, meta row (industry + year), results highlight
- Post card: badge, title, excerpt, reading time

### Badges and pills
- Badge: height 24, padding 4 10, radius-pill, text 12/16, bg color.bg.surface-2
- Pill (filters/tags): height 32, padding 6 14, radius-pill, text 12/16

### Accordion (FAQ)
- Container: border-top and border-bottom color.border.subtle
- Item header: min height 56, text 16/24, icon 20
- Item body: text body, padding 16 0 24
- Interaction: 250ms expand and collapse

### Tabs and filters
- Tab: height 36, padding 6 14, radius-pill, border 1px color.border.subtle
- Active: bg color.bg.surface-2, border color.accent.primary, text color.text.primary
- Hover: bg color.bg.surface-2

### Forms
- Input:
  - height 48, padding 12 16, radius-md, bg color.bg.surface
  - border 1px color.border.subtle, text color.text.primary
  - placeholder color.text.muted
- Select: same as input with chevron icon 16
- Textarea: min height 120, padding 12 16
- Checkbox: 20x20, radius 4, border 1px color.border.subtle, check color.accent.primary
- Focus: 2px outline color.focus, border color.accent.primary
- Error: border color.error, helper text color.error
