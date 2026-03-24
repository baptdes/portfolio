````markdown
# Design System Document: The Architect’s Blueprint

## 1. Overview & Creative North Star

The Creative North Star for this design system is **"The Systems Architect."**

Unlike generic "hacker" aesthetics that rely on raw code and neon-on-black tropes, this system is inspired by the precision of modern architecture and the high-performance feel of premium developer tools (like Linear or Vercel). We are moving away from the "template" look by embracing **intentional asymmetry**, high-contrast typography scales, and tonal depth. The goal is to present AI engineering not as a mystery, but as a refined, organized, and powerful discipline.

Through the use of "Soft Tech" principles—glassmorphism, subtle gradients, and stacked surfaces—we create a UI that feels both technical and premium.

---

### 2. Colors & Surface Philosophy

The palette is built on a foundation of deep, layered charcoals, punctuated by a surgical application of a vibrant lime accent.

- **Primary Accent (`primary`: #d3fe43):** This is your high-voltage signal. Use it sparingly for primary CTAs, critical status indicators, and subtle highlights. It should feel like a laser-cut precision tool.
- **The "No-Line" Rule:** To achieve a high-end editorial feel, **prohibit 1px solid borders for sectioning.** Boundaries must be defined solely through background color shifts or subtle tonal transitions. For example, a `surface-container-low` section sitting against a `surface` background provides all the separation needed without the visual clutter of lines.
- **Surface Hierarchy & Nesting:** Treat the UI as a series of physical layers.
  - Use `surface_dim` (#0c0f0f) for the primary application canvas.
  - Use `surface_container_low` for secondary content areas.
  - Use `surface_container_highest` (#222727) for nested cards or interactive elements to create a natural, "raised" feel.
- **The "Glass & Gradient" Rule:** To move beyond flat UI, use backdrop-blur effects on floating elements (like Navbars or Modals) using semi-transparent `surface_variant` colors.
- **Signature Textures:** For primary CTAs, do not use flat hex codes. Apply a subtle linear gradient transitioning from `primary` (#d3fe43) to `primary_container` (#a8d000) at a 135-degree angle to provide "visual soul."

---

### 3. Typography

The typography strategy creates a dialogue between architectural structure and technical precision.

- **Display & Headlines (`spaceGrotesk`):** Used for high-impact editorial moments. The geometric nature of Space Grotesk mirrors the structural lines of modern architecture. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) to create an authoritative, "monolithic" feel in Hero sections.
- **Body & Labels (`manrope`):** Manrope provides a clean, modern sans-serif experience that ensures high readability for technical documentation. While it isn't a true monospace, its rhythmic spacing maintains a "technical hint" without the "raw code" fatigue.
- **Hierarchy as Brand Identity:** Use extreme contrast in scale. Pair a `display-sm` headline with `label-md` metadata to emphasize the "Orchestrator" vibe—the professional who manages both the big picture and the minute details.

---

### 4. Elevation & Depth

Depth in this system is achieved through **Tonal Layering** rather than traditional drop shadows.

- **The Layering Principle:** Stack your containers. Place a `surface_container_highest` card on a `surface_container_low` background. This creates a soft, natural lift that feels integrated into the environment.
- **Ambient Shadows:** When a floating effect is required (e.g., a dropdown or a floating action button), use an extra-diffused shadow.
  - _Shadow Specs:_ Blur: 24px-40px, Opacity: 6%, Color: Tinted with `surface_tint`. This mimics natural light reflecting off a dark surface.
- **The "Ghost Border" Fallback:** If a border is required for accessibility, it must be a **Ghost Border**. Use the `outline_variant` (#464848) at 20% opacity. Never use 100% opaque, high-contrast borders.
- **Glassmorphism:** Apply a `backdrop-filter: blur(12px)` to elements using `surface_container` with 80% opacity. This allows the background colors to "bleed" through, making the layout feel fluid and high-performance.

---

### 5. Components

- **Buttons:**
  - **Primary:** Gradient from `primary` to `primary_container`. Text color `on_primary`. Radius `md` (0.375rem).
  - **Secondary:** Ghost Border (`outline_variant` @ 20%) with a subtle `surface_bright` hover state.
- **Cards:** Forbid the use of divider lines. Separate content using `spacing-6` (2rem) or shifts in surface color tiers. Use `xl` (0.75rem) roundedness for a "soft tech" feel.
- **Chips:** Use `surface_container_highest` for the background with `label-md` typography. For "active" states, use a 2px left-border of `primary` instead of a full color change.
- **Input Fields:** Use `surface_container_low` as the base. On focus, transition the Ghost Border to 100% opacity of the `primary` color.
- **Terminal/Code Snippets:** Use `surface_container_lowest` (#000000) to create a "void" effect that recedes into the page, contrasting with the lighter `surface_container` layers.
- **Metric Cards:** (Specific to AI Engineering) Use `display-sm` for the value and `label-sm` for the unit, aligned in an asymmetrical layout to mimic high-end dashboard telemetry.

---

### 6. Do’s and Don’ts

**Do:**

- **Use Asymmetry:** Place a large headline on the left and a small technical detail on the right to create "architectural tension."
- **Leverage Whitespace:** Use `spacing-16` (5.5rem) or `spacing-20` (7rem) between major sections to let the design breathe.
- **Tint your Grays:** Ensure your dark backgrounds feel "rich" by using the provided `surface` tokens which have a slight cool/teal undertone.

**Don’t:**

- **Don't use pure Black (#000):** Except for the `surface_container_lowest` in specific code/terminal contexts. Use the `surface` tokens to maintain depth.
- **Don't use standard Dividers:** Horizontal rules (HR tags) are prohibited. Use spatial gaps (`spacing-8`) or tonal shifts.
- **Don't over-use the Accent:** If the `primary` lime green covers more than 5% of the screen, the "sophisticated" vibe is lost. Use it for precision, not decoration.
- **Don't use Default Shadows:** Avoid the "fuzzy gray" look. Shadows should be wide, faint, and tinted.

---

**Director's Final Note:**
Remember, this system is about **restraint**. The power of an AI Engineer is in their ability to organize complexity. Every pixel, every spacing value (`spacing-2` vs `spacing-3`), and every surface shift must feel like it was placed with surgical intent.```
````
