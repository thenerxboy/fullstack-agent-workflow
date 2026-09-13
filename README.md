# 🚀 `fullstack-agent-workflow`

Universal, Enterprise-Grade 5-Phase AI Agent Workflow for Building Applications across 4 Target Profiles: Standalone Mobile Apps (Expo), Standalone Web Apps (Next.js), Standalone Landing Pages (Next.js), and Full-Stack Monorepos (Expo + Next.js + Shared Packages).

---

## ⚡ Quick-Start Installation (Step-by-Step, 1 Command Per Line)

To install the workflow skills into your app workspace while keeping your application codebase 100% clean and decoupled, execute these commands one line at a time in your terminal:

#### Step 1: Create your app project directory
```bash
mkdir my-app
```
*Creates a new directory named `my-app` for your application.*

#### Step 2: Navigate into your app project directory
```bash
cd my-app
```
*Enters your newly created app project directory.*

#### Step 3: Initialize Git in your app project
```bash
git init
```
*Initializes a fresh Git version control repository for your application.*

#### Step 4: Add the workflow framework as a Git Submodule & install skill discovery gateway
```bash
git submodule add https://github.com/thenerxboy/fullstack-agent-workflow.git .agents/skills/fullstack-agent-workflow
npx skills add vercel-labs/skills
```
*Links the fullstack-agent-workflow skill suite into `.agents/skills/` as a clean submodule and installs `find-skills` for dynamic external skill search.*

---

### 🔄 Submodule Maintenance & Updates (1 Command Per Line)

#### Option A: Clone an existing project with all workflow submodules initialized
```bash
git clone --recursive <your-app-repo-url>
```
*Clones the repository and automatically fetches all embedded skill submodules in a single step.*

#### Option B: Initialize submodules if you already cloned a repository without submodules
```bash
git submodule update --init --recursive
```
*Fetches and checks out missing submodules for an existing workspace.*

#### Option C: Update the workflow skills to the latest version at any time
```bash
git submodule update --remote --merge
```
*Pulls and merges the latest updates from the main workflow repository into your project.*

---

### 🏁 Launching the Workflow in Your AI Agent

Open your project in Antigravity, Claude Code, Cursor, or Windsurf and type:

```markdown
/start-workflow
```
*Triggers the Submodule Pre-Flight Audit Gate, creates Base `./AGENTS.md` Shell (if missing), and launches the interactive 5-phase sitemap.*

---

## 🗺️ 5-Phase Sequential Workflow Map

```
+-----------------------------------------------------------------------------------+
| Phase 0: Market Research & 20 App Ideas Pitch (/app-idea)                          |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
+-----------------------------------------------------------------------------------+
| Phase 1: Creative Vibe Jamming & Brand Identity (/app-brief)                      |
| Outputs: docs/01-app-brief/APP-BRIEF.md                                           |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
+-----------------------------------------------------------------------------------+
| Phase 2: Product Strategy, ASO & System PRD Architecture (/prd)                    |
| Outputs: docs/02-prd-research/ARCH-PRD.md & aso_keywords.json                    |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
+-----------------------------------------------------------------------------------+
| Phase 3: Monorepo Architecture & Feature-First Stack (tech-stack)                 |
| Outputs: docs/03-tech-stack/app-features.md & TECH-STACK.md                       |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
+-----------------------------------------------------------------------------------+
| Phase 4: Design Tokens, Generative UI Prompts, Dual App Icons (/ui-theme, /ui-flow)|
| Outputs: docs/04-ui-design/app-screens/*.png, docs/04-ui-design/app-screens/prompts/, docs/04-ui-design/DESIGN-MEMORY |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
+-----------------------------------------------------------------------------------+
| Phase 5: Autonomous Tailored AGENTS.md & External Skills Mapping (/init-agents)   |
| Outputs: ./AGENTS.md, docs/05-external-skills/<library>.md                        |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
+-----------------------------------------------------------------------------------+
| Phase 5 (Build): Vibe Engineering & Visual AI Diff Micro-Loop (fullstack-agent)   |
| Feature Branch ──> Surface-Specific Screenshot Diff ──> CodeRabbit PR ──> Merge   |
+-----------------------------------------------------------------------------------+
```

---

| Phase / Trigger | Shortcut Command | Action / Description | Output Artifact / Standard |
| :--- | :--- | :--- | :--- |
| **Universal Help** | **`/help`** *(alias: `/workflow-help`)* | Master Directory of ALL commands across all 5 skills. | Complete Help Menu |
| **Universal Shortcuts** | **`/shortcuts`** | Fast cheat-sheet list of all skill shortcuts. | Shortcut Table |
| **Onboarding** | **`/start-workflow`** | Runs Submodule Pre-Flight Audit Gate, Base `./AGENTS.md` Shell generator & interactive sitemap. | Interactive Guide |
| **Phase 0** | **`/app-idea`** | Researches market trends, competitor gaps, YouTube transcripts, and pitches 20 data-backed app ideas. | 20 App Ideas Table |
| **Phase 1** | **`/app-brief`** | Creative vibe jamming for brand identity, mascot quirks, sensory personality, and copy tone. | `docs/01-app-brief/APP-BRIEF.md` |
| **Phase 2** | **`/prd`** | Executes 8-question discovery loop for ASO keywords, web surface models, compliance triad, and V1 scope. | `docs/02-prd-research/ARCH-PRD.md` |
| **Phase 3** | **`tech-stack`** | Feature-first stack decomposition across 8 Turborepo monorepo layers and DB client schemas. | `docs/03-tech-stack/TECH-STACK.md` |
| **Phase 4** | **`/ui-theme`** | Ingests PRD & App Brief, locks 2-3 color palettes and Google Fonts pairings, audits visual assets in `./app_theme.json`. | **Design System Token Lock** |
| **Phase 4** | **`/ui-flow`** | Enforces Component-First sequence (`/ui-theme` token lock -> Stage 3 Auth -> Stage 4 Paywall -> Stage 5 Core Screens) and compiles UI screen prompt blueprints. | **Generative UI Screen Prompts** |
| **Phase 4** | **`/app-icon`** | Generates 20-icon app logo exploration matrix prompt across 4 rows × 5 columns (1080x1080 \| 100% 2D vector). | **20-Icon Matrix Prompt (ChatGPT / Midjourney)** |
| **Phase 4** | **`/app-screenshots`** | Generates 5 panoramic App Store marketing screenshots + 1 Next.js web storefront hero screen. | **Dual-Prompt Standard** (Vector Spec + Midjourney) |
| **Phase 5 (Setup)** | **`/init-agents`** | Ingests `docs/` and autonomously generates a 100% project-tailored `./AGENTS.md` file at the root. | Tailored `./AGENTS.md` |
| **Phase 5 (Build)** | **`fullstack-agent`** | Executes Vibe Engineering 8-step loop, Feature-Branch & CodeRabbit PR workflow, and builds monorepo TypeScript code. | `prompts/<task>.md` & Code |

---

## 📂 Repository Directory Structure

```
fullstack-agent-workflow/
├── README.md                          <── Root Documentation & Quick-Start Guide
│
├── 00-workflow-guide/                 <── Interactive Onboarding Skill (/start-workflow, /help)
│   ├── SKILL.md
│   └── README.md
│
├── 01-prd-skill/                      <── Phase 0, 1, 2: Ideation, Vibe Brief & PRD (/app-idea, /app-brief, /prd, /prd-skill-help)
│   ├── SKILL.md
│   └── README.md
│
├── 02-tech-stack/                     <── Phase 3: Monorepo Stack & DB Schemas (tech-stack, /tech-stack-help)
│   ├── SKILL.md
│   └── README.md
│
├── 03-ui-skill/                       <── Phase 4: Generative UI Prompts, App Icons & Screenshots (/ui-theme, /ui-flow, /ui-help)
│   ├── SKILL.md
│   ├── README.md
│   └── scripts/                        <── CLI Prompt Formatter & Blueprint Extractor Helper Scripts
│
└── 04-fullstack-agent/                <── Phase 5: Codebase Builder & AGENTS.md Generator (/init-agents, fullstack-agent, /fullstack-agent-help)
    ├── SKILL.md
    └── README.md
```

---

## 🎨 Key Features & Operational Guardrails

- **Git Submodule Pre-Flight Audit Gate**: `/start-workflow` automatically verifies that `.agents/skills/fullstack-agent-workflow` is connected as a Git Submodule, guaranteeing zero repo clashes between app code (`my-app.git`) and workflow skills.
- **Informational Query vs. Execution Task Gate (`Fast-Path Answer Mandate`)**: Direct text answers for simple informational or capability questions without launching planning mode, script loops, or unnecessary code execution.
- **Surface Target Isolation Protocol**: Strictly isolates screenshot verification targets. `apps/native` Expo Router screens run native CLI commands (`adb exec-out screencap` for Android, `xcrun simctl io booted screenshot` for iOS); `apps/web` Next.js screens run Playwright.
- **Universal Proactive Executive Expert Mandate**: NEVER acts as a passive order-taker. Proactively conducts web searches (`search_web`) and audits/injects universal best practices, ergonomics, legal/store compliance, accessibility, zero-trust security, defensive error handling, and performance optimizations across all phases, components, and screens.
- **Phase Boundary & Plan Isolation Rule**: Restricts `prompts/*.md` implementation plan creation and git commit proposals exclusively to Phase 5 Build (`fullstack-agent`).
- **Interactive Learning Clarification Engine**: Displays explicit Interactive Learning Menus for multi-engine or underspecified requests, showing exact shortcut commands.
- **Project-Local UI Catalog**: `design_catalog.json` lives in your app workspace root (`./design_catalog.json`), keeping app extractions 100% isolated with zero submodule commit clutter.
- **Feature-Branch & CodeRabbit PR Protocol**: 7-step isolated Git lifecycle (Feature Branch $\rightarrow$ Build & Test $\rightarrow$ Stage & Commit $\rightarrow$ Push Branch $\rightarrow$ CodeRabbit PR AI Review $\rightarrow$ Merge to Main $\rightarrow$ Sync Local Main).
- **Pixel-Perfect Visual AI Diff Micro-Loop (Module 6)**: 4-step visual verification loop (Build $\rightarrow$ Screenshot $\rightarrow$ Compare $\rightarrow$ Refine) using `docs/04-ui-design/app-screens/<screen_id>.png` (fallback `app-screens/<screen_id>.png`) as target reference and a 10-Point Multimodal Comparison Matrix.
- **Mandatory `TECH-STACK.md` Ingestion Gate**: Compels agents to inspect `docs/03-tech-stack/TECH-STACK.md` before planning and record proof under `## 2. What It Read` in `prompts/<task-name>.md`.
- **Autonomous `AGENTS.md` Generator (`/init-agents`)**: Compiles a 100% project-tailored `./AGENTS.md` at the project root by ingesting completed `docs/` artifacts.
- **External Skill & Doc Mapping Engine (`docs/05-external-skills/`)**: Maps required framework/dependency skills (Clerk, Convex, Expo, Stripe, Supabase), checks local cache, guides developer on missing skills/docs, and stores doc snippets for permanent future reference.
- **Zero Memory Collision Policy**: Tracks UI design system locks, registered SVG icons, and screen versions in `docs/04-ui-design/DESIGN-MEMORY.md` to guarantee zero collisions with main agent memory.
- **Canonical Turborepo Monorepo Architecture**: Enforces `apps/native` (Expo Router), `apps/web` (Next.js App Router), `packages/ui`, `packages/db`, and `packages/auth`.

---

## 📄 License

MIT License. Free for open-source and commercial software development.
