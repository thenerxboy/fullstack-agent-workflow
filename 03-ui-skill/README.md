# 🎨 `ui-skill` (Generative UI & Design System Skill)

Universal AI Agent UI Design System & Prompt Compilation Framework for ChatGPT, Midjourney, and Generative UI Workflows.

---

### 📖 Overview

`ui-skill` is an enterprise-grade, agent-agnostic UI design system framework designed for mobile app developers and AI design agents. It standardizes design token kits, 20-icon logo exploration matrices, visual layout extraction, color-agnostic blueprint cataloging, brand design token injection, mathematical SVG vector icon locking, and multi-stage generative prompts for App Icons, Core UI Screens, and App Store Marketing Screenshots.

---

### ⚡ Shortcut Commands & Trigger Flags

You can invoke `ui-skill` in any AI assistant (Antigravity, Claude Code, Cursor, Windsurf, ChatGPT) using these shortcut commands:

| Command / Shortcut | Action / Behavior | Output Format |
| :--- | :--- | :--- |
| **`/ui-help`** | Displays complete manual overview, file schemas, workflow phases, CLI flags, and rules. | Summary Text |
| **`/ui-shortcuts`** | Displays fast reference list of all available `/ui-*` shortcut triggers. | Summary Text |
| **`/ui-theme`** | Ingests `PROJECT-BRIEF.md` (or `APP-BRIEF.md`) & `SYSTEM-PRD.md` (or `ARCH-PRD.md`), proposes 2–3 Color Palettes & Google Fonts pairings, audits visual assets (mascot/logo/SVGs), and locks `./app_theme.json`. | **Design System Token Lock** |
| **`/ui-flow`** | Compiles UI screen prompt blueprints organized by user flow (Onboarding & Auth, Activation & Paywall, Main App Tabs, Happy Path Core Loop). Ingests `docs/` for real copy. | **Dual-Engine Standard** (Google Stitch + ChatGPT) |
| **`/app-icon`** | Generates 20-icon app logo exploration matrix prompt across 4 rows × 5 columns (1080x1080 \| 100% 2D vector). | **20-Icon Matrix Prompt (ChatGPT / Midjourney)** |
| **`/app-screenshots`** | Generates 5 panoramic App Store marketing screenshots + 1 Next.js web storefront hero mockup screen (`shots.so` framing). | **Dual-Prompt Standard** (Variant A: Google Stitch Screenshot Spec + Variant B: ChatGPT / Midjourney) |
| **`/ui-init`** | Auto-creates `app_theme.json`, project-local `design_catalog.json`, Base `AGENTS.md` Shell (if missing), `app-screens/` folder, and `docs/04-ui-design/DESIGN-MEMORY.md`. | Workspace Bootstrap |
| **`/ui-extract`** | Extracts attached reference screenshot into color-agnostic JSON blueprint via `scripts/add_catalog_blueprint.js` and appends to local `design_catalog.json`. | Local Catalog JSON |
| **`/ui-compile`** | Compiles a Google Stitch prompt for a specific screen from local `design_catalog.json` with domain adaptation (`node scripts/ui_formatter.js --app_domain`). | **Google Stitch Prompt Blueprint** |
| **`/ui-sync`** | Batch compiles & updates ALL archived screen prompts in `app-screens/` to reflect global theme changes (`node scripts/ui_formatter.js --all`). | Formatter Sync |
| **`/ui-approve`** | Saves current approved Google Stitch prompt into `app-screens/prompts/<screen_id>.md` and updates `docs/04-ui-design/DESIGN-MEMORY.md`. | Markdown File Archive |

---

### 🎨 Key Capabilities & Guardrails

1. **Universal Proactive Executive Expert Mandate (Guardrail #15)**:
   - Proactively conducts web searches (`search_web`) and audits/injects universal best practices, ergonomics, legal/store compliance, accessibility, zero-trust security, defensive error handling, and performance optimizations across all screens.
2. **Follow-Up Rule Re-Verification Mandate (Zero-Token Quality Gate, Guardrail #16)**:
   - Re-verifies embedded mathematical SVG path data and Dual Prompt specifications on every follow-up turn.
3. **Phase Boundary & Plan Isolation Rule (Guardrail #17)**:
   - Plan creation (`prompts/*.md`) and git commit proposals are strictly restricted to Phase 5 Build (`fullstack-agent`). Phase 4 UI compilation MUST NOT generate `prompts/*.md` plans.
4. **App Icon 20-Logo Exploration Matrix (`/app-icon`)**:
   - Generates a 20-icon logo exploration matrix prompt (4 Rows × 5 Columns | 1080x1080 canvas) for ChatGPT / Midjourney.
5. **PRD Content Extraction Mandate (Zero Dummy Text Rule)**:
   - Ingests real copy, titles, feature names, mascot voice snippets, and CTA microcopy directly from `docs/`.
   - Zero tolerance for placeholder strings ("Lorem Ipsum", "John Doe", "$99", "Sample User").
6. **Dedicated UI Memory Log (`docs/04-ui-design/DESIGN-MEMORY.md`)**:
   - Tracks active screen versions (`home_v1.md`), active brand themes, approved Google Fonts pairings, locked stadium pill navbar specs, and registered SVG icons with **zero collisions** against main agent memory.
7. **Central SVG Icon Registry (`app_theme.json.svg_registry`)**:
   - Single source of truth for raw mathematical SVG geometries (`<svg viewBox="..." ...><path d="..."/></svg>`).
8. **Exclusive Google Stitch Screen Prompt Archiving Mandate (`docs/04-ui-design/app-screens/prompts/`)**:
   - `docs/04-ui-design/app-screens/prompts/` (fallback `app-screens/prompts/`) is strictly reserved for Google Stitch screen prompt specs (`<screen_id>.md`) and rendered screenshots (`<screen_id>.png`). Image generation prompts output in chat are NEVER stored here.

---

### 🚀 Installation & Usage (1 Command Per Line)

#### Step 1: Initialize Git in your project root
```bash
git init
```

#### Step 2: Add the workflow framework as a Git Submodule
```bash
git submodule add https://github.com/thenerxboy/fullstack-agent-workflow.git .agents/skills/fullstack-agent-workflow
```

#### Step 3: Invoke UI Skill commands in your AI assistant
```markdown
/ui-theme
```
```markdown
/ui-flow
```
```markdown
/app-icon
```
```markdown
/app-screenshots
```

---

### 📄 License

MIT License. Free for open-source and commercial applications.
