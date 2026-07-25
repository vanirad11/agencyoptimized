# NorthPeak Digital — Optimization Changelog

## Changes made

### 1. Removed remote Google Fonts dependency
- **Changed:** Removed the Google Fonts stylesheet and preconnects; the site now uses a system font stack.
- **Benefit:** Eliminates a third-party render-blocking request and font download, reducing connection overhead and improving first paint / LCP reliability.

### 2. Added a keyboard-accessible skip link
- **Changed:** Added a visible-on-focus “Skip to content” link.
- **Benefit:** Improves keyboard navigation and accessibility for users who navigate with a keyboard or assistive technology.

### 3. Added visible focus states
- **Changed:** Added `:focus-visible` outlines to navigation links, buttons, the brand link, and other interactive controls.
- **Benefit:** Makes keyboard focus obvious and improves WCAG-style keyboard usability.

### 4. Improved navigation control semantics
- **Changed:** Added `type="button"` to the mobile navigation toggle.
- **Benefit:** Prevents accidental form-submit behavior if the control is ever placed inside a form and makes the control's intent explicit.

### 5. Added reduced-motion support
- **Changed:** Added a `prefers-reduced-motion: reduce` media query.
- **Benefit:** Respects user motion preferences and removes unnecessary smooth scrolling / hover transitions for users who request reduced motion.

### 6. Improved anchor scrolling around the sticky header
- **Changed:** Added `scroll-padding-top` to the document.
- **Benefit:** Prevents anchored sections from being hidden behind the sticky navigation bar.
