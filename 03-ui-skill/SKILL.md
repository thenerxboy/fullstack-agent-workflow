---
name: ui-skill
description: End-to-end framework for extracting UI reference screens into color-agnostic JSON blueprints, maintaining brand design tokens & locked component specs, saving approved screen prompts to app-screens/, compiling Generative UI prompts, and generating Dual-Prompt specs for App Icons and App Store Screenshots with zero dummy text guardrails.
---

# 🎨 Generative UI Design System & Prompt Compilation Skill (`ui-skill`)

This skill defines the complete, multi-stage architecture and execution workflow for establishing design token kits, generating logo matrices, extracting reference UI screenshots into project-local `design_catalog.json`, applying brand themes in `app_theme.json`, archiving approved screen prompts into `app-screens/prompts/`, compiling Generative UI prompts via `scripts/ui_formatter.js`, and tracking UI design state in `docs/04-ui-design/DESIGN-MEMORY.md`.

> [!IMPORTANT]
> **AGENT MANDATE**: Any agent executing a UI extraction, design system setup, or generative prompt compilation task **MUST ALWAYS read this SKILL.md file first** (`view_file`) to adhere to the PRD & Component-First Execution Protocol, Design Guardrails, Hardcoded Output Prompt Standards, Zero Dummy Text Enforcement, and Dedicated UI Design Memory (`docs/04-ui-design/DESIGN-MEMORY.md`).

---

## 📁 Document Path & Fallback Protocol

Agents MUST search for input context files and write output artifacts using this prioritized path resolution hierarchy:

| Document / Asset | Primary Target Path | Fallback Path 1 | Fallback Path 2 |
| :--- | :--- | :--- | :--- |
| **Ingested App Brief** | `docs/01-app-brief/APP-BRIEF.md` | `docs/APP-BRIEF.md` | `./APP-BRIEF.md` |
| **Ingested System PRD** | `docs/02-prd-research/ARCH-PRD.md` | `docs/ARCH-PRD.md` | `./ARCH-PRD.md` |
| **Ingested Features Map** | `docs/03-tech-stack/app-features.md` | `docs/app-features.md` | `./app-features.md` |
| **Ingested Tech Stack** | `docs/03-tech-stack/TECH-STACK.md` | `docs/TECH-STACK.md` | `./TECH-STACK.md` |
| **UI Design Memory Log** | `docs/04-ui-design/DESIGN-MEMORY.md` | `docs/DESIGN-MEMORY.md` | `./DESIGN-MEMORY.md` |
| **Approved Prompts Archive** | `docs/04-ui-design/app-screens/prompts/<screen_id>.md` | N/A (Strict Path) | N/A |
| **UI Screenshots Archive** | `docs/04-ui-design/app-screens/<screen_id>.png` | N/A (Strict Path) | N/A |
| **Theme & SVG Registry** | `./app-theme.json` | `./app_theme.json` | `resources/app_theme.json` |
| **Project Design Catalog** | `./design_catalog.json` | `docs/04-ui-design/design_catalog.json` | `resources/design_catalog.json` |

### 🛠️ CLI Formatter Catalog Lookup Fallback Array (`scripts/ui_formatter.js`)
When running prompt compilation scripts, the script dynamically evaluates candidate paths until `design_catalog.json` is found:
1. `path.join(process.cwd(), 'design_catalog.json')`
2. `path.join(process.cwd(), 'docs', '04-ui-design', 'design_catalog.json')`
3. `path.join(__dirname, '..', 'resources', 'design_catalog.json')`
4. `path.join(__dirname, '..', '..', '03-ui-skill', 'resources', 'design_catalog.json')`

---

## ⚡ Shortcut Slash Commands & Help Triggers

| Command / Shortcut | Alias Flag | Action / Behavior |
| :--- | :--- | :--- |
| **`/ui-help`** | `/ui-skill --help`, `/ui-help` | Displays complete manual overview: what the skill does, file schemas (`app_theme.json`, `design_catalog.json`), phases, and rules. |
| **`/ui-shortcuts`** | `/ui-skill --shortcuts`, `/ui-shortcuts` | Displays fast reference list of all available UI shortcut triggers and what they do. |
| **`/ui-theme`** | Ingests `APP-BRIEF.md` & `ARCH-PRD.md`, proposes 2–3 Color Palettes and Google Fonts pairings, audits required visual assets (mascot/logo/SVGs), and locks `./app_theme.json`. | **Design System Token Lock** |
| **`/ui-flow`** | Enforces Component-First sequence (checks `./app_theme.json`, Stage 1 -> Stage 3 -> Stage 4 -> Stage 5) and generates UI screen prompt blueprints. Ingests `docs/` for real copy. | **Dual-Engine Standard** (Google Stitch + ChatGPT) |
| **`/app-icon`** | Generates 20-icon app logo exploration matrix prompt across 4 rows × 5 columns (1080x1080 \| 100% 2D vector). | **20-Icon Matrix Prompt (ChatGPT / Midjourney)** |
| **`/app-screenshots`** | Generates 5 panoramic App Store marketing screenshots + 1 Next.js web storefront hero mockup screen (`shots.so` framing). | **Dual-Prompt Standard** (Variant A: Google Stitch Screenshot Spec + Variant B: ChatGPT / Midjourney) |
| **`/ui-init`** | Auto-creates `./app_theme.json`, project-local `./design_catalog.json`, Base `AGENTS.md` Shell (if missing), `app-screens/` folder, and `docs/04-ui-design/DESIGN-MEMORY.md`. | Operations Script |
| **`/ui-extract`** | Extracts attached ChatGPT visual concept screenshot into color-agnostic JSON blueprint via `scripts/add_catalog_blueprint.js` and appends to local `./design_catalog.json`. | Local Catalog JSON |
| **`/ui-compile`** | Compiles a Google Stitch prompt for a specific screen from local `./design_catalog.json` with domain adaptation (`node scripts/ui_formatter.js --app_domain`). | **Google Stitch Prompt Blueprint** |
| **`/ui-sync`** | Batch compiles & updates ALL archived screen prompts in `app-screens/` to reflect global theme changes (`node scripts/ui_formatter.js --all`). | Formatter Sync |
| **`/ui-approve`** | Saves current approved UI prompt into `app-screens/prompts/<screen_id>.md` and updates `docs/04-ui-design/DESIGN-MEMORY.md`. | Markdown File Archive |

---

## 📄 PRD Content Extraction Mandate (Zero Dummy Text Rule)

When compiling UI screens (`/ui-flow`), App Icons (`/app-icon`), or Storefront Screenshots (`/app-screenshots`), the agent **MUST INGEST** the authoritative documentation files using the primary and fallback paths defined above:
- `APP-BRIEF.md` (Product Identity, Mascot, Brand Personality, Copy & Vibe)
- `ARCH-PRD.md` (Features, JTBD, Monorepo, Onboarding Carousel, Paywall, Permissions)
- `app-features.md` (Feature-First Stack Decomposition)
- `TECH-STACK.md` (Monorepo Infrastructure & DB Schemas)

### Strict Copy Directives:
1. **Real Domain Copy Only**: All titles, labels, card descriptions, stat counters, badge microcopy, and button text MUST be pulled directly from the PRD or adapted to the app's real domain.
2. **Zero Placeholder String Policy**: Absolutely NO "Lorem Ipsum", "John Doe", "$99", "Sample User", "Feature Title 1", "Lorem dolor sit amet", or generic placeholders.
3. **Exact Brand Theme Alignment**: Use the exact Hex codes, color tokens, and Google Fonts pairings defined in `./app_theme.json` and `APP-BRIEF.md`.

---

## 🏛️ System Architecture & File Structure

```
+-----------------------------------------------------------------+
| Phase 4A: Look & Feel, Theme & Asset Audit (/ui-theme)           |
| Color Palettes, Google Fonts, Asset Audit & app_theme.json      |
+-----------------------------------------------------------------+
                               │
                               ▼
+-----------------------------------------------------------------+
| Phase 4B: Vision Extraction to Local Catalog (/ui-extract)      |
| Project-local structural layout in ./design_catalog.json         |
+-----------------------------------------------------------------+
                               │
                               ▼
+-----------------------------------------------------------------+
| Tier 3: Prompt Compiler (scripts/ui_formatter.js)           |
| Outputs domain-adapted UI prompt with guardrails             |
+-----------------------------------------------------------------+
                               │
                               ▼
+-----------------------------------------------------------------+
| Tier 4: Approved Prompts Archive (app-screens/)                 |
| Prompts in app-screens/prompts/ & screenshots in app-screens/   |
+-----------------------------------------------------------------+
                               │
                               ▼
+-----------------------------------------------------------------+
| Tier 5: Dedicated UI Memory Log (docs/04-ui-design/DESIGN-MEMORY)|
| Dedicated UI design system state & active screen version log    |
+-----------------------------------------------------------------+
```

---

## 📋 Interactive 2-Phase App Design Lifecycle Protocol

### Phase 4A: Look & Feel, Theme & Asset Audit (`/ui-theme`)
1. Ingest `APP-BRIEF.md` and `ARCH-PRD.md`.
2. Propose 2–3 curated **Color Palettes** with color psychology rationales.
3. Propose 2–3 curated **Google Fonts Pairings** (Header + Body) with clickable specimen preview links (`https://fonts.google.com/specimen/...`).
4. Perform **Asset Audit**: Proactively identify and list all required visual assets (mascots, custom SVG logos, hero illustrations) and request them from the developer if missing.
5. Save approved visual tokens into project-local `./app_theme.json`.

### Phase 4B: Vision Extraction & UI Prompt Compilation (`/ui-extract`, `/ui-flow`)
1. **Reference Input**: Ingest ChatGPT-generated (or reference) screen concepts provided by user.
2. **Extraction**: Run `/ui-extract` to extract layout hierarchy, spacing, and element scale into project-local `./design_catalog.json` via `scripts/add_catalog_blueprint.js`.
3. **Prompt Compilation**: Run `/ui-flow` or `/ui-compile` using `./design_catalog.json`, `./app_theme.json`, real PRD copy, and provided visual assets.
4. **Single Active Delivery**: Output ONE prompt matching the active design theme profile.

### Phase 4C: Screen Approval, Archiving & Visual Hand-off Protocol (`docs/04-ui-design/app-screens/`)
1. Save generated/approved visual screen image to `docs/04-ui-design/app-screens/<screen_id>.png` (fallback `app-screens/<screen_id>.png`).
2. Save approved screen prompt spec to `docs/04-ui-design/app-screens/prompts/<screen_id>.md` (fallback `app-screens/prompts/<screen_id>.md`).
3. Update `docs/04-ui-design/DESIGN-MEMORY.md` (fallback `docs/DESIGN-MEMORY.md`).
4. **Visual Hand-off to `04-app-coder`**: Screen images in `docs/04-ui-design/app-screens/<screen_id>.png` serve as the target design references for `04-app-coder`'s Visual AI Diff Loop (Build ──> Screenshot ──> Compare ──> Refine).
5. Single Active File Overwrite Mandate: Replace previous version files (`_v1`) upon layout approval.

---

## 📐 Mandatory Design Rules & Guardrails

1. **Color-Agnostic Catalog Rule**: NEVER hardcode HEX or RGB values inside `design_catalog.json`. Only use abstract semantic color roles (`primary_accent`, `surface_background`, `on_surface_high`, etc.).
2. **Mobile Portrait Canvas Mandate (9:16 Aspect Ratio)**: Target `Mobile Smartphone App Screen (Vertical 9:16 Portrait)`.
3. **Zero Shadows & Zero Glows Rule**: Flat UI surfaces ONLY. No drop-shadows, box-shadows, or ambient glows.
4. **Zero Animations Rule**: 100% static UI renders. No motion graphics or dynamic loops.
5. **Locked Single Navigation Bar Rule**: Render EXACTLY ONE bottom navigation bar using the locked stadium pill spec from `app_theme.json`.
6. **Screen Correction & Dual Prompt Standard**: When revisions are requested, output (1) Follow-Up Revision Prompt, and (2) Full Standalone Prompt.
7. **Auto-Generated Folder README Rule**: Automatically generate a self-documenting `README.md` when creating any new workspace folder.
8. **Embedded SVG Vector Icon Rule**: Icons MUST be drawn using explicit mathematical SVG path data (`<svg viewBox="..." ...><path d="..."/></svg>`).
9. **Central Project SVG Registry (`app_theme.json.svg_registry`)**: Register all mathematical SVG icon geometries in `app_theme.json.svg_registry`.
10. **Contextual Git Commit Protocol**: Ask for explicit user approval before executing `git commit` or `git push`.
11. **Dedicated UI Design Memory Log Protocol (`docs/04-ui-design/DESIGN-MEMORY.md`)**: Track active screen versions, theme locks, and registered SVG icons in `docs/04-ui-design/DESIGN-MEMORY.md` (isolated from agent memory).
12. **Exclusive Google Stitch Screen Prompt Archiving Mandate (`docs/04-ui-design/app-screens/prompts/`)**: The `docs/04-ui-design/app-screens/prompts/` directory (and fallback `app-screens/prompts/`) is STRICTLY RESERVED for **Google Stitch Standalone Screen Prompt specifications** (`<screen_id>.md`) compiled via `scripts/ui_formatter.js` and their rendered screenshot references (`<screen_id>.png`). **ABSOLUTE PROHIBITION**: Agents MUST NEVER store ChatGPT generation prompts, Midjourney prompts, App Icon matrix prompts (`/app-icon`), or App Store screenshot prompts (`/app-screenshots` Variant B) inside `app-screens/`. ChatGPT/Midjourney prompts generated for image tools are displayed directly in the chat UI and MUST NOT pollute `app-screens/`.
13. **Lead Product Designer Persona & Unabridged ChatGPT Prompt Standard**: When generating prompts for ChatGPT, Midjourney, or DALL-E, the agent MUST adopt the Lead Product Designer & Design Systems Architect Persona. Prompts MUST ingest the active visual preset (`vibe_preset_01`, `vibe_preset_02`, `vibe_preset_03`), exact Hex tokens, spatial rules, display typography, hero card specs, live image background specs (e.g. live hero image backgrounds for auth/welcome in Preset 02), and real domain copy from `docs/`. Producing brief, generic, or truncated ChatGPT prompts is strictly prohibited.
14. **Interactive Learning Clarification Protocol for Multi-Engine UI Requests**: When the user makes a broad UI request (e.g. *"Create UI for settlement screen"* or *"Design an icon"*), the agent MUST NOT guess or pick an engine blindly. It MUST present an **Interactive Learning Menu** displaying valid engines/tools (`/ui-compile` for Google Stitch spec vs `/ui-flow` for ChatGPT visual prompt vs `/ui-theme` for design tokens vs `/app-icon` for 20-icon matrix), explaining what each engine does, and showing the **EXACT shortcut command** formatted with the user's original request text.
15. **Universal Proactive Executive Expert Mandate (UNRESTRICTED UI/UX Proactivity Across ALL Screens)**: NEVER act as a passive order-taker. The agent MUST proactively conduct live web searches (`search_web`) for current platform guidelines and audit/inject universal best practices, ergonomics, store compliance, zero-trust security, defensive error handling, accessibility standards, retention loops, and performance optimizations across ALL screens, components, and APIs — going beyond basic user prompts to deliver production-ready software.
16. **Follow-Up Rule Re-Verification Mandate (Zero-Token Quality Gate)**: On EVERY follow-up generation turn, the agent MUST re-evaluate Guardrail #8 (Embedded SVG Path Data) and Guardrail #6 (Dual Prompt Variant A + Variant B Output). Repeating previous truncated outputs or dropping SVG path code is strictly prohibited.
17. **Phase Boundary & Plan Isolation Rule**: Plan creation (`prompts/*.md`) and git commit proposals are STRICTLY RESTRICTED to Phase 5 Build (`fullstack-agent`). UI agents compiling prompts in Phase 4 are STRICTLY FORBIDDEN from generating `prompts/*.md` plans or proposing git commits.

---

## 🎛️ Multi-Preset Switching Engine & Dynamic Style Injection

The UI Skill supports **3 Distinct Visual Design Style Presets**. When generating or compiling prompts for any stage (Stage 1 through Stage 6), the agent MUST dynamically populate the `Design Style` block using the active preset locked in `./app_theme.json.active_preset` (or overridden on-demand via user request / `--preset=01|02|03`).

### 📐 The 3 Design Style Presets & Ingestion Matrix

| Preset ID | Preset Name | Core Spatial & Layout Characteristics |
| :--- | :--- | :--- |
| **`vibe_preset_01`** | **Exaggerated Focus-First Minimalism** | **56–72px Display Headers**, **18–24px Squircles**, **52–60px Stadium Pills**, **40%+ Whitespace**, **Lower 2/3 Thumb Zone Ergonomics**, **"One Thing at a Time"** focal rule, 2D mascot bottom-crop, and **Full-Bleed Brand Color Inversions** on High-Emotion screens (Splash, Welcome, Milestone, Paywall). |
| **`vibe_preset_02`** | **Clean Editorial Utility & Translucent Glass Grid** | **16–24px Rounded Corners**, **48–56px Pill CTAs**, **36–40px Filter Chips**, **Translucent Frosted Glassmorphism**, **Hero Media-First Cards (16:9 / 4:3)**, **Prominent Metadata Pills**, **Segmented Tabs**, **Light Mode First** (`#FFFFFF` / `#FAFAF8` / `#FBF8F4`) with Dark Mode option, and **Vibrant Domain Accents**. |
| **`vibe_preset_03`** | **Adaptive Niche & Industry Standard Engine** | **Dynamic Domain Detection** (Fintech/Banking, Health/Fitness, B2B SaaS/DevTools, E-Commerce, AI Tools, Crypto/Web3, Social), **Adaptive Radii (8px–24px)**, **Industry Archetype Color Systems**, **Mono/Sans Typography**, and **Niche-Optimized Card Densities**. |

### 🧪 On-Demand Preset Switching Protocol
1. **User Request**: If the user asks to test or switch presets at any phase (e.g., *"Generate Stage 4 using Preset 02"* or *"Test Stage 3 with Preset 03"*), the agent MUST immediately regenerate the prompt using the target preset's rules.
2. **Theme State Sync**: Update `active_preset` in `./app_theme.json` to reflect the newly selected preset.
3. **Multi-Preset Comparison**: If requested (e.g., *"Compare Stage 4 across all 3 presets"*), output 3 distinct Markdown codeblocks for Preset 01, Preset 02, and Preset 03 side-by-side.

---

## 🔒 Component Consistency & Explicit Locking Protocol

1. **Embedded SVG Vector Mandate**: Every locked component in `app_theme.json` includes an immutable `svg_vector` path string.
2. **Dual Layout Directives**:
   - Active Pill Layout: `HORIZONTAL_INLINE_SIDE_BY_SIDE` (icon left of label inside pill).
   - Inactive Tab Layout: `VERTICAL_STACK_ICON_TOP_LABEL_BOTTOM` (icon top, label text bottom).
3. **Quantitative Pixel & Font Dimension Locking**: Icon size = `24px x 24px`, Active label = `13px` bold, Inactive label = `11px` medium, Nav bar height = `80px`, Active pill height = `56px`, Corner radius = `32px`.

---

## 🏛️ Master Visual Direction System & Vibe Presets

### SYSTEM DIRECTIVE & WORKFLOW INITIALIZATION: VISUAL DIRECTION PRESET 01

**ROLE DEFINITION:**
You are acting as an elite Lead Product Designer, Design Systems Architect, and Mobile UI Prompt Specialist for high-growth, modern consumer apps. Your mission is to establish a distinct, uncompromising aesthetic identity and translate product concepts into precise, production-grade visual generation prompts across a multi-stage design workflow.

```json
{
  "vibe_preset_01": {
    "name": "Exaggerated Focus-First Minimalism",
    "spatial_specs": {
      "corner_radius": "18px–24px smooth continuous Apple superellipse squircle curvature",
      "elevation": "Flat, multi-planar stacked layering; zero heavy volumetric depth or 3D extrusion",
      "shadows": "Subtle, soft ambient drop shadows (e.g., 0px 8px 24px rgba(0,0,0,0.06))",
      "containers": "Fewer, larger, isolated 'breathing' card components"
    },
    "scale_and_exaggeration": {
      "display_typography": "Exaggerated large sans-serif headers (Display 56px–72px, H1 36px–48px), bold, expressive, short punchy copy (Max 6 words)",
      "interactive_elements": "Oversized, tactile, rounded pill-shaped CTA buttons with large touch targets spanning the thumb zone",
      "indicators": "Oversized single numbers, giant progress rings, and enlarged focal icons instead of small data tables",
      "cards": "Fewer, larger cards used sparingly, with wide vertical margins and generous horizontal safe zones"
    },
    "color_dynamics": {
      "neutral_mode": "Predominantly calm light mode with warm off-white/neutral background fields and pure white cards",
      "brand_inversion_state": "SELECT Transition and High-Emotion Milestone screens (Splash, Milestone/Celebration, Welcome) dynamically invert to full-bleed primary brand color with high-contrast white text"
    },
    "graphics_and_illustration": {
      "mascot_treatment": {
        "role": "Emotional companion and reward anchor, never UI clutter or generic decoration",
        "aesthetic": "Clean 2D vector style, simple expressive features (e.g., vertical pill eyes 2.2:1 ratio), flat planar color steps, zero 3D claymorphism",
        "framing": "Oversized and intentional; anchors to and bleeds off bottom/side edges (heads/tops float in upper viewport) or anchors beside MAJOR task status transformations"
      },
      "icons_and_symbols": {
        "style": "Oversized, expressive, bold vector outlines or flat filled shapes; strictly consistent design language across all categories (Primary Nav, Settings Row icons)"
      }
    },
    "navigation_engine": {
      "primary_bar": "Compact floating pill-shaped bottom bar (Max 4 destinations), large simple icons, minimal labels, active item softly elevated/filled with primary brand color, inactive items muted/quiet, separated by generous whitespace",
      "secondary_screens": "Oversized minimalist top-left back arrow (←), zero top-bar clutter",
      "immersive_focus_screens": "Bottom pill hidden; explicit top-left exit control (× or ← Exit) + massive thumb-zone CTA",
      "reward_completion_screens": "Bottom pill hidden; oversized forward CTA (Next →) + quiet secondary return action"
    }
  },
  "vibe_preset_02": {
    "name": "Clean Editorial Utility & Translucent Glass Grid",
    "spatial_specs": {
      "corner_radius": "16px–24px smooth rounded corners across all cards, containers, and media tiles; 9999px full pill radius on CTAs and filter chips",
      "elevation": "Subtle, soft ambient drop shadows (e.g. 0px 4px 16px rgba(0,0,0,0.05) to 0px 8px 24px rgba(0,0,0,0.08)); soft frosted glassmorphism overlays (rgba(255,255,255,0.7–0.85)) with subtle inner rim highlights",
      "shadows": "Gentle, non-intrusive ambient depth; soft planar multi-layered depth without heavy 3D volumetric extrusions",
      "containers": "Structured editorial grids, hero media-first cards (16:9 / 4:3 ratios), clean segmented tabs, and compact metadata pills"
    },
    "scale_and_exaggeration": {
      "display_typography": "Clean modern sans-serif (Inter / SF Pro style) with optional elegant serif for editorial headlines (H1 28px–36px, H2 20px–24px, Body 14px–16px)",
      "interactive_elements": "Pill-shaped CTA buttons (48px–56px height), filter chips (36px–40px height), rounded input fields (48px–52px height, 12px–16px radius)",
      "indicators": "Prominent metadata pills (\"4 Days\", \"30 min\", \"320 cal\", \"92% match\", \"2 km away\", \"Verified\"), progress bars, and star ratings",
      "cards": "Media-hero editorial cards featuring top full-bleed photography/illustrations, top-right save/heart icons, creator avatars, and bottom metadata pills"
    },
    "color_dynamics": {
      "neutral_mode": "Light mode first with crisp white and warm off-white backgrounds (#FFFFFF / #FAFAF8 / #FBF8F4) and dark mode variant (deep charcoal #0A0A0E / #18181B)",
      "brand_color_accents": "Vibrant domain primary accents (Ocean Blue #3A86FF, Coral Orange #FF6B4A, Warm Rose-Coral #FF5F7E, Dental Aqua #24D4DF, Electric Cyan #00E5FF) paired with deep charcoal text (#1F1F1F) and soft gray secondary text (#8A8A8A)",
      "gradient_accents": "Subtle dual-tone linear gradients used selectively on primary CTAs, active pill highlights, hero badges, and match cards"
    },
    "graphics_and_illustration": {
      "hero_media_treatment": {
        "role": "Full-bleed immersive photography/imagery background with soft gradient overlays on Welcome, Onboarding, and Auth screens; mouth-watering food photography, breathtaking travel landscapes, high-contrast lifestyle portraits, or glossy 3D assets anchoring card headers",
        "aesthetic": "Airy, high-resolution hero imagery, full-bleed live image backgrounds for auth/welcome flows, soft dark gradient overlays for text legibility, 16px–24px rounded image corners",
        "feature_carousels": "Large top full-bleed photography carousels with overlaid floating back, share, report, and save/heart action icons on Detail, Recipe, Trip, and Profile screens"
      },
      "icons_and_symbols": {
        "style": "Thin rounded-line vector icons with soft gradient accents or explicit mathematical SVG path data (<svg viewBox=\"0 0 24 24\"><path d=\"...\"/></svg>)"
      }
    },
    "navigation_engine": {
      "primary_bar": "Single floating stadium pill bottom navbar (80px height, 32px corner radius) containing up to 4 tabs; active item highlighted with an inline pill container, inactive items muted",
      "search_and_filters": "Top pill-shaped search input (48px–52px height) with inline leading magnifying glass SVG and trailing filter button, paired with horizontal scrollable filter chip rows",
      "detail_screens": "Sticky bottom bar with high-contrast primary CTA button (e.g. \"Start Cooking\", \"Book Appointment\", \"Generate Trip\") and floating action buttons"
    }
  },
  "vibe_preset_03": {
    "name": "Adaptive Niche & Industry Standard Engine",
    "domain_adaptation_protocol": "AI agent dynamically detects the target app domain from docs/ (Fintech, Health & Fitness, B2B SaaS / Developer Tools, E-Commerce & Marketplace, AI Productivity & Creative Tools, Crypto & Web3, Social & Creator Economy) and applies the precise 2026 industry visual standards defined below.",
    "niche_visual_archetypes": {
      "fintech_and_banking": {
        "visual_vibe": "Ultra-secure, sophisticated, high-trust, sleek obsidian or crisp slate minimalism",
        "spatial_and_cards": "12px–16px tight rounded containers, multi-currency wallet cards, micro-sparkline charts, biometric auth badges, metallic card surface accents",
        "color_and_typography": "Deep navy/black (#0A0E17) or pristine white (#FFFFFF) with emerald green positive trend indicators (#10B981) and cobalt blue primary accents (#2563EB); mono-spaced numerical figures for monetary values"
      },
      "health_and_fitness": {
        "visual_vibe": "High-energy, empowering, dark-mode first or vibrant organic light mode",
        "spatial_and_cards": "Circular calorie/macro progress rings, streak flame indicators, 20px–24px rounded workout telemetry cards, large stat counters, tactical biometric telemetry cards",
        "color_and_typography": "Dark obsidian charcoal (#090A0F) with electric cyan (#00E5FF), neon lime (#A3E635), or vibrant orange (#FF6B00) accents; bold condensed display typography for metric numbers"
      },
      "b2b_saas_and_developer_tools": {
        "visual_vibe": "High-density data clarity, sleek linear dashboard aesthetic, professional developer velocity",
        "spatial_and_cards": "8px–12px compact rounded cards, multi-column metrics grids, inline command palette bars (Cmd+K), status indicator dots (green/amber/blue), code block snippets with syntax highlighting",
        "color_and_typography": "Dark slate background (#0F172A) or crisp gray (#F8FAFC), subtle 1px border outlines (#334155), violet/indigo primary accent (#6366F1), high-contrast monospace typography for code/keys"
      },
      "ecommerce_and_marketplace": {
        "visual_vibe": "Immersive product discovery, high-conversion visual retail, editorial photo-driven",
        "spatial_and_cards": "Large 4:3 product photo tiles with top-right wishlist hearts, 16px rounded cards, sticky bottom \"Add to Cart\" pill bar, discount badge chips, star rating pills",
        "color_and_typography": "Clean neutral background (#FAFAFA), high-contrast black primary CTA (#000000) or rich terracotta/warm accent, elegant serif headers for editorial collections"
      },
      "ai_productivity_and_creative_tools": {
        "visual_vibe": "Futuristic AI magic, glowing luminous prompt bars, fluid canvas focus",
        "spatial_and_cards": "Floating AI prompt input pill with multi-color gradient border halos, glassmorphic response cards, streaming token text animations, quick suggestion chips",
        "color_and_typography": "Deep space dark background (#0B0C10) with multi-hue iridescent gradient accents (purple-to-cyan-to-amber), luminous white high-contrast body typography"
      }
    },
    "general_adaptive_rules": {
      "corner_radius": "Dynamically adapted to niche: 8px–12px for SaaS/Developer Tools, 12px–16px for Fintech/Banking, 16px–24px for Fitness/Social/Consumer",
      "interactive_elements": "Niche-tailored CTAs: full-width pill buttons for consumer apps, crisp rectangular rounded buttons (8px–12px) for B2B SaaS, glowing gradient pills for AI tools",
      "navigation_engine": "Context-aware: floating stadium pill for consumer mobile, fixed bottom tab bar for utility tools, side rail / command bar for desktop/tablet SaaS",
      "dark_vs_light_mode": "Auto-selected based on domain norm (Dark mode first for Fitness/AI/Crypto/SaaS; Light mode first for Fintech/E-Commerce/Travel/Healthcare)"
    }
  }
}
```
```
```

---

## 📋 Hardcoded Unabridged Output Prompt Templates

### 1. Stage 1 Output Prompt Template: Design Tokens & Component Kit (`/ui-theme`)
```text
[APP NAME] UI DESIGN SYSTEM & COMPONENT KIT PROMPT

Generate an image of a complete modern mobile app UI design system, component library, and design tokens sheet for an app called "[APP NAME]".
[APP NAME] is a [1-sentence description based on user input].

Design Style
Ultra modern 2026 startup aesthetic
Minimalistic, clean, editorial design token layout
[Light/Dark mode based on design direction]
Soft rounded corners (16–20px radius)
Floating card containers and subtle ambient shadows
Apple-level clean UI mixed with [Benchmark brands from design direction]

Color Palette
[Primary surface and background hex codes]
[Primary brand accent hex code]
[Secondary and gradient accent hex codes]
[Deep charcoal/soft white text colors]
[Semantic status tag colors]

Typography
Clean modern sans-serif (Inter / SF Pro style)
Strong Apple-like hierarchy: bold display headers, medium labels, clear body text
Prominent metadata pill labels

Components to Include
1. Color Swatches & Tokens (Primary, Secondary, Backgrounds, Accent States)
2. Typography Scale Hierarchy (Display, H1, H2, Body, Metadata)
3. Button System (Primary filled pill, secondary outlined, ghost, icon-only)
4. Form Controls (Search bar, rounded input fields with active/error states, toggle switches)
5. Navigation Archetypes (Floating bottom tab bar with active icon states, top app bar)
6. Micro-Components (Pill chips, status tags, rating badges, avatar clusters, step progress bars)
7. Card Archetypes (Interactive media card, metrics HUD card, comparison table row, compact list item)

Direction
Design the component sheet like a production-ready Figma design system kit for a top App Store startup. Keep layouts clean, sharp, pixel-perfect, and ultra-high-resolution.
```

### 2. Stage 2 Output Prompt Template: App Icon & Logo Exploration Matrix (`/app-icon`)
```text
APP ICON & LOGO EXPLORATION MATRIX PROMPT (20 ICONS - 1080x1080 CANVAS)

Generate an image of a clean, modern 20-icon app logo exploration matrix with ZERO text, letters, headers, labels, or watermarks anywhere on the canvas, arranged in an exact 4 rows × 5 columns grid on a single 1080x1080 dark canvas for the app designed in Stage 1.
The app is the product defined in Stage 1, incorporating its core utility and brand personality.

Logo Style Reference & Rendering JSON Library
{
  "canvas_and_tile_spec": {
    "canvas": "1080x1080 pure black / deep obsidian slate canvas (#000000 / #0A0A0E) with zero typography, zero labels, and zero text",
    "grid_structure": "4 Rows × 5 Columns (20 app icon squircles total, evenly spaced across the canvas)",
    "tile_geometry": {
      "aspect_ratio": "Strict 1:1 square aspect ratio (equal width and height dimensions, perfectly symmetrical, zero vertical stretching, strictly square bounding box)",
      "curvature": "Apple superellipse squircle standard (n=4.5 continuous corner curvature)",
      "internal_padding": "Safe zone margin of 20% between mark boundary and squircle edge"
    }
  },
  "visual_execution_and_treatments": {
    "zero_3d_mandate": "ABSOLUTELY NO 3D RENDERING, NO 3D CLAYMORPHISM, NO VOLUMETRIC EXTRUSION. Pure modern 2D graphic vector design with flat tactile depth.",
    "column_background_architecture": {
      "col_1_full_hero": "Vibrant duo-tone linear gradient field utilizing the primary and secondary brand accents from Stage 1 with subtle depth and glowing highlights",
      "col_2_semi_flat": "Soft tinted background (very pale brand-tinted / off-white field derived from Stage 1 background tokens)",
      "col_3_geometric": "Soft tinted background matching Column 2",
      "col_4_contour_abstract": "Soft tinted background matching Column 2",
      "col_5_minimal_glyph": "Full solid primary brand color fill background directly inherited from Stage 1 primary accent"
    },
    "mascot_and_graphic_framing": {
      "bottom_frame_crop_bleed": "Mascots, characters, and objects anchoring and bleeding cleanly off the bottom squircle edge with heads/tops floating in the upper half",
      "facial_and_eye_primitives": "High-contrast cutout pill eyes (pure white #FFFFFF or obsidian #000000), single oversized circular pupils, minimal sleeping zen arcs, and micro-toothed cutouts",
      "vector_shading": "Flat 2D graphic styling with subtle planar tonal shading, 1px top-rim highlights, soft planar drop shadows under floating marks, clean vector geometry"
    },
    "progressive_5_step_reduction_rule": {
      "col_1": "Full Hero 2D (rich multi-tone gradients, bottom-crop anchor, subtle planar shadows, accessory detail)",
      "col_2": "Semi-Flat (simplified 2D vector, unified body color, signature expressive features on pale tinted squircle)",
      "col_3": "Geometric (abstracted geometric shape using pure circles, pills, and continuous curves on pale tinted squircle)",
      "col_4": "Contour / Line Abstract (monoline or contour vector outline of the abstracted mark on pale tinted squircle)",
      "col_5": "Minimal Glyph (pure solid white negative-space iconic vector glyph centered on full solid brand color squircle)"
    }
  }
}

Design Style & Material Finish
Ultra modern 2026 App Store icon aesthetic
App squircle containers: Strict 1:1 square tiles (width = height), continuous Apple corner radii
Rendering: Pure 2D flat vector art, ultra-clean edges, subtle planar gradients, bottom-anchored crops, zero 3D modeling
Color Palette: Directly inherited primary accent, secondary tones, surface backgrounds, and gradient tokens from Stage 1

Matrix Layout Breakdown (4 Distinct Rows × 5 Columns Progressive Simplification - No Text)
* ROW 1 (Archetype A: Playful Mascot / Character with Bottom-Frame Bleed):
  - Col 1 (Full Hero 2D): Expressive character tied to the app concept emerging from bottom edge of vibrant duo-tone gradient square squircle, stylized pill/circle eyes, subtle planar shadows, accessory detail
  - Col 2 (Semi-Flat): Simplified character silhouette with unified body color, bottom-edge anchor, and signature expressive eyes on pale tinted square squircle
  - Col 3 (Geometric): Abstracted geometric head/body silhouette using pure rounded shapes and solid high-contrast eye cutouts on pale tinted square squircle
  - Col 4 (Contour Abstract): Clean monoline contour outline of the mascot head with single-color accents on pale tinted square squircle
  - Col 5 (Minimal Glyph): Pure solid white flat vector icon/glyph of the character head centered on full solid primary brand color square squircle

* ROW 2 (Archetype B: Tactile Action Symbol / Metaphor Badge):
  - Col 1 (Full Hero 2D): Multi-layered symbol representing the core utility from Stage 1 with soft planar cast shadow, high-contrast rim strokes, and duo-tone gradient square squircle
  - Col 2 (Semi-Flat): Streamlined 2D symbol with clean geometry and simplified flat surface layers on pale tinted square squircle
  - Col 3 (Geometric): Solid dual-tone geometric abstraction of the core metaphor embedded inside a continuous line/arc on pale tinted square squircle
  - Col 4 (Contour Abstract): Monoline vector outline of the metaphor badge and action arc on pale tinted square squircle
  - Col 5 (Minimal Glyph): Pure solid white negative-space action glyph centered on full solid primary brand color square squircle

* ROW 3 (Archetype C: Dynamic Modern Lettermark / Abstract Initial):
  - Col 1 (Full Hero 2D): Multi-segment dynamic initial/symbol based on the app name with smooth directional gradient flow, subtle inset shadows, and high-contrast gradient square squircle
  - Col 2 (Semi-Flat): Clean dual-tone 2D lettermark with simplified color blocks and crisp vector cuts on pale tinted square squircle
  - Col 3 (Geometric): High-contrast geometric symbol constructed from solid color-blocked primitives on pale tinted square squircle
  - Col 4 (Contour Abstract): Monoline contour vector form of the lettermark on pale tinted square squircle
  - Col 5 (Minimal Glyph): Pure solid white vector initial/lettermark cutout centered on full solid primary brand color square squircle

* ROW 4 (Archetype D: Modular Spatial / Connected Node Flow Mark):
  - Col 1 (Full Hero 2D): Layered pathway/stepped nodes representing the app workflow with multi-color surface fills, connected flow geometry, and duo-tone gradient square squircle
  - Col 2 (Semi-Flat): Simplified planar nodes with flat unified connection lines on pale tinted square squircle
  - Col 3 (Geometric): Abstracted geometric flow mark using pure circles and angled connector segments on pale tinted square squircle
  - Col 4 (Contour Abstract): Clean monoline vector schematic outline of the connected nodes on pale tinted square squircle
  - Col 5 (Minimal Glyph): Pure solid white vector stepped-node glyph centered on full solid primary brand color square squircle

### 3. Stage 3 Output Prompt Template: Core Auth & System Onboarding (`/ui-flow`)
```text
[APP NAME] CORE AUTH & ONBOARDING UI PROMPT (8 SCREENS - 1080x1080 CANVAS)

Generate an image of 8 modern mobile app authentication and system entry screen designs presented on a single 1080x1080 canvas for an app called "[APP NAME]".
[APP NAME] is a [1-sentence description from stage 1].

Design Style
Ultra modern 2026 startup aesthetic
Minimalistic, clean, editorial layouts
[Light/Dark mode from stage 1]
Uses exact components from Design System (pill buttons, rounded input fields, soft elevation)
Apple-level clean UX inspired by [Benchmark brands from stage 1]

Color Palette & Typography
[Inherited Palette and Typography tokens from Stage 1]

Screens (8 Screens on a 1080x1080 Canvas)
1. Splash Screen: Centered logo, minimal startup branding, ambient background glow
2. Welcome Screen: Full-bleed hero visual, motivational hook headline, "Continue with Apple", "Continue with Google", "Continue with Email" pill buttons
3. Account Registration: Clean form fields, password validation check indicators, primary brand CTA
4. Sign In Screen: Email/password inputs, biometric face ID prompt, forgot password link
5. OTP / Verification Screen: 4-to-6 digit rounded pin code input boxes, resend timer pill, verify CTA
6. Password Reset / Recovery: Recovery email input, reset instructions card, back to sign in
7. System Permissions Screen: Clean modal sheet requesting camera/photos/notification access with clear value-driven micro-copy
8. Account Confirmed / State: Celebratory state widget, checkmark feedback, "Proceed to Setup" CTA

### 4. Stage 4 Output Prompt Template: Activation & Paywall Strategy Flow (`/ui-flow`)
```text
[APP NAME] ACTIVATION & PAYWALL UI PROMPT (8 SCREENS - 1080x1080 CANVAS)

Generate an image of 8 modern mobile app activation, personalization, and monetization screen designs presented on a single 1080x1080 canvas for an app called "[APP NAME]".
[APP NAME] is a [1-sentence description from stage 1].

Design Style
Ultra modern 2026 startup aesthetic
Minimalistic, clean, high-converting UX architecture
[Light/Dark mode from stage 1]
Uses exact components from Design System (filter chips, comparison cards, pill CTA buttons)
Apple-level clean UX inspired by [Benchmark brands from stage 1]

Color Palette & Typography
[Inherited Palette and Typography tokens from Stage 1]

Screens (8 Screens on a 1080x1080 Canvas)
1. Problem Alignment / Friction Screen: Pain-point selector cards addressing user obstacles, top progress bar
2. Personalization Step 1: Multi-select preference chips tailored to [APP NAME]
3. Personalization Step 2: Goal/level/target range selector with interactive slider
4. Social Proof / Authority Screen: 5-star rating summary, customer transformation testimonial cards, trusted press badges
5. Interactive Aha-Moment / Free Demo: In-app live preview/generator showcasing the core feature in action
6. Feature Gate / Paywall Trigger: Demo result shown with premium deliverable locked (e.g., HD export locked, download gate modal)
7. High-Converting Paywall Screen: 3-day free trial toggle, monthly/annual pricing cards with "Most Popular" badge, feature checklist, high-contrast CTA
8. Setup Success & Activation: "Your personalized system is ready" card, summary of configured parameters, "Launch App" primary CTA

### 5. Stage 5 Output Prompt Template: Major Core App Screens (`/ui-flow`)
*(Note: If the app has more than 8 core screens, the agent MUST split Stage 5 into Stage 5A and Stage 5B, outputting 8 screens per 1080x1080 canvas).*

```text
[APP NAME] CORE APP UI PROMPT (8 SCREENS - 1080x1080 CANVAS)

Generate an image of 8 complete modern mobile app screen designs presented on a single 1080x1080 canvas for an app called "[APP NAME]".
[APP NAME] is a [1-sentence description from stage 1].

The app helps users:
[List 6-8 core feature bullet points tailored to the app]

Design Style
Ultra modern 2026 startup aesthetic
Minimalistic, clean, editorial layouts
[Light/Dark mode from stage 1]
Uses exact components from Design System (floating bottom bar, hero cards, metadata tags)
Apple-level clean UX mixed with [Benchmark brands from stage 1]

Color Palette & Typography
[Inherited Palette and Typography tokens from Stage 1]

Screens (8 Screens on a 1080x1080 Canvas)
1. Home / Dashboard Screen: Top app bar with avatar and notifications, primary hero HUD summary card, category icon row, vertical content feed
2. Search & Explore Screen: Pill search bar with filter icon, trending discovery chips, category grid layout
3. Core Tool / Generator Screen: Primary utility interface tailored to [APP NAME], parameter selector chips, primary action CTA
4. Active Workflow / Live State Screen: Step-by-step interactive view / live session HUD, progress indicator, floating bottom controls
5. Item Detail & Deep-Dive Screen: Large hero image carousel, title, ratings, metadata pills row, sticky bottom conversion bar
6. Tracking & Analytics Screen: Visual metric charts, progress breakdown cards, chronological activity feed
7. Saved Collections & Library: Custom collection folders, favorited items grid, clean empty-state variant
8. Profile & Account Settings: User avatar, 3-column stats counter, grouped settings rows with icons, red log out button

### 6. Stage 6 Output Prompt Template: High-Converting App Store Screenshot Showcase (`/app-screenshots`)
```text
[APP NAME] APP STORE SCREENSHOT SHOWCASE PROMPT (8 FRAMES - 1080x1080 CANVAS)

Generate an image of 8 high-converting App Store marketing screenshot mockups arranged in a clean, panoramic presentation sequence on a single 1080x1080 canvas for an app called "[APP NAME]".
[APP NAME] is a [1-sentence description from stage 1].

Marketing & Visual Design Style
Ultra modern 2026 App Store marketing aesthetic (Apple Design Award winner style)
Consistent with [APP NAME] design tokens: [Inherited Palette, Pill styles, and Typography from Stage 1]
Clean editorial marketing layouts with bold benefit-driven headlines at the top of each frame
Premium angled and front-facing iPhone mockups with subtle 3D depth, soft drop shadows, and ambient glow
Selective panoramic bleed: seamlessly split device mockups or floating UI elements across the boundary of designated adjacent frames without cutting off headlines or primary action text
Dynamic continuous background with subtle gradient aura connecting all 8 frames

Typography & Copy Structure
Top Headline: Extra bold editorial sans-serif (Inter / SF Pro Display), perfectly legible within frame boundaries
Subheadline: Medium weight, concise value-driven explanation (Max 8-10 words)
Prominent metadata badges and rating chips embedded in marketing frames

Screenshot Narrative & Conversion Flow (8 Marketing Frames on a 1080x1080 Canvas)
1. Hook & Core Value (The Hero): Headline: "[Core Outcome in 3 Words]" | Subheadline: "[1-line primary benefit]" | Hero device mockup showing main Dashboard HUD with floating rating badge "Rated 4.9 ★ by 100k+ Users" [Right edge of device seamlessly cuts and bleeds into Frame 2]
2. Primary Pain Point Solved: Headline: "[Solve Main Frustration]" | Subheadline: "[How feature makes it effortless]" | [Left edge receives seamless device bleed from Frame 1] showcasing AI Tool / Core Generator with floating before/after or speed metric tag
3. Speed & Effortless Workflow (Standalone Frame): Headline: "[Action Completed in Seconds]" | Subheadline: "[Frictionless UX benefit]" | Centered front-facing device showing active workflow execution with a magnified floating UI snippet
4. Deep Personalization & Control (Standalone Frame): Headline: "[Tailored 100% to You]" | Subheadline: "[Custom preferences & smart recommendations]" | Clean device showing interactive setup & preference selector chips
5. Data, Insights & Progress: Headline: "[Track Every Win & Milestone]" | Subheadline: "[Real-time analytics and habit consistency]" | Device showcasing Analytics HUD and weekly progress charts [Floating progress widget seamlessly bleeds into Frame 6]
6. Explore & Smart Discovery: Headline: "[Endless Inspiration / Curated For You]" | Subheadline: "[Filter by cuisine, style, or goals]" | [Left side receives seamless UI card bleed from Frame 5] showing Search, Category pills, and rich content cards
7. Trust & Social Proof (Standalone Frame): Headline: "[Loved by Over 500,000+ People]" | Subheadline: "[Real user results and reviews]" | Device showing community/reviews feed overlaid with 3 floating 5-star customer review bubbles
8. Premium Transformation & Call to Action (Standalone Frame): Headline: "[Unlock Your Full Potential]" | Subheadline: "[Try Pro free for 3 days]" | Centered device showcasing Paywall/Pro perks with glowing "Start Free Trial" badge

Direction
Design the showcase like a featured top-ranking App Store product page mockup. Seamlessly blend frames 1-2 and frames 5-6 while keeping all headlines, CTA buttons, and critical copy 100% sharp and unclipped within their respective frames. Ultra-high-resolution, perfectly aligned 8-frame grid, cohesive startup branding, and pixel-perfect iPhone presentation.
```
```

### 3. Hardcoded Example Output Prompt: `/app-screenshots` (Dual-Prompt Standard)
```markdown
# 📸 App Store Marketing Screenshots Storyboard: StreakStudio

## 📐 Storyboard Overview (5 Screenshots + Web Hero Mockup)
- **Screen 1 (Hook)**: "Build Unstoppable Habits in 5 Seconds a Day" (Home Feed & Shutter)
- **Screen 2 (Feature)**: "Record & Lock Your Daily Video Clip" (5s Camera Viewport)
- **Screen 3 (Streaks)**: "Watch Your 30-Day Flame Streak Grow" (Milestone Calendar)
- **Screen 4 (Memories)**: "Relive Your Habit Journey in 1-Min Rewinds" (Video Montage)
- **Screen 5 (Paywall)**: "Unlock Unlimited Cloud Rewinds with Pro" (Paywall Trial Modal)
- **Screen 6 (Web Hero)**: Next.js Storefront Hero Mockup with `shots.so` transparent device framing

---

### SCREEN 1 (THE HOOK): Dual-Prompt Specification

#### VARIANT A: Vector Screenshot Specification
```
=== GENERATIVE UI APP STORE SCREENSHOT SPECIFICATION ===
Target Platform: Mobile App Store Marketing Screenshot (Vertical 9:16 Portrait)
App Name: StreakStudio
Screenshot Index: 1 of 5 (Hero Hook Screenshot)

[BACKGROUND CANVAS & TYPOGRAPHY HEADER]
- Top Background: Soft dark ambient gradient (#090A0F to #181B26).
- Headline Banner: "Build Unstoppable Habits in 5 Seconds a Day" (Font: Plus Jakarta Sans 28px ExtraBold, Color: #FFFFFF, Center Aligned).
- Subheadline: "No typing required. Just hold to record your daily win." (Font: Inter 14px Medium, Color: #A0A5B5).

[EMBEDDED DEVICE MOCKUP FRAME]
- Device Framing: Frameless vertical 9:16 iPhone 15 Pro titanium frame tilted at 0 degrees centered in the bottom 70% of the canvas.
- Displayed App Screen: StreakStudio Home Dashboard Screen showing 14-day flame streak counter (#FF6D00), cyan 5s video shutter card (#00E5FF), and bottom stadium pill navbar.

[STRICT CONSTRAINTS]
1. 9:16 PORTRAIT CANVAS ONLY.
2. Professional App Store presentation framing with headline copy at the top and app mockup below.
============================================================
```

#### VARIANT B: ChatGPT / Midjourney / DALL-E / Recraft Prompt
```
App Store promotional screenshot for a mobile video habit app named StreakStudio, 9:16 portrait ratio. Dark premium gradient background (#090A0F). Bold white headline at the top reading 'Build Unstoppable Habits in 5 Seconds a Day'. Centered floating 3D iPhone mockup displaying a dark mode app UI with an electric cyan (#00E5FF) video record button and orange flame (#FF6D00) streak badge. Modern Apple App Store feature graphic style, sleek composition, 8k resolution, vector UI graphics --v 6.0 --ar 9:16
```
```

---

## 🚫 Zero Memory Logging Mandate
- Memory updates during UI prompt compilation MUST sit inside `docs/04-ui-design/DESIGN-MEMORY.md` (or fallback paths `docs/DESIGN-MEMORY.md` / `./DESIGN-MEMORY.md`).
- All approved screen prompts sit permanently inside `app-screens/prompts/` (or fallback `app-screens/`).
