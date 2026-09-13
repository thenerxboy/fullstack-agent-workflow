---
name: start-workflow
description: Interactive onboarding sitemap, phase navigator, and quick-start guide for the AI Full-Stack Workflow suite (/start-workflow).
---

# 🚀 Full-Stack Agent Workflow Onboarding & Sitemap Skill (`start-workflow`)

This skill acts as the interactive onboarding sitemap and phase navigator for the entire `fullstack-agent-workflow` suite.

> [!IMPORTANT]
> When the user types **`/start-workflow`**, asks *"Where do I start?"*, or requests help getting started with the workflow, the agent MUST output the interactive onboarding guide below and prompt the user to choose their starting phase.

---

## 🛡️ Git Submodule & Skill Pre-Flight Audit Gate

Before presenting the onboarding sitemap or executing workflow commands, the agent **MUST ALWAYS check the workspace Git, Submodule & Utility Skill status**:

1. **Submodule Check**: Check if current project root is a Git repository (`.git` exists) AND if `.agents/skills/fullstack-agent-workflow` is registered as a Git Submodule.
2. **Utility Skill Check (`find-skills`)**: Verify if `find-skills` is installed in `.agents/skills/find-skills` or global `~/.agents/skills/find-skills`.
   - **If Missing**: Run/instruct `npx skills add vercel-labs/skills` to install the `find-skills` discovery gateway during setup.
3. **If Validated**: Display status badge:
   `✅ App Workspace Initialized | ✅ Skills Submodule Linked | ✅ Skill Discovery Engine Ready (find-skills)`
4. **If NOT a Submodule (Warning Blueprint)**: If the workspace root is not a Git repo or if skills are cloned without submodule status, display this prominent warning before proceeding:

> ⚠️ **Git Submodule Pre-Flight Warning**: Your project folder is not set up with `fullstack-agent-workflow` as a Git Submodule.
> 
> **Why this matters**:
> - **Repo Isolation**: Guarantees your app code commits ONLY to your project repository (`my-app.git`).
> - **Workflow Updates**: Keeps your skill rules updated via `git submodule update` while app design catalog learnings stay isolated in your local repo.
> 
> **Run this 2-step setup in your project terminal to fix**:
> ```bash
> git init
> git submodule add https://github.com/thenerxboy/fullstack-agent-workflow.git .agents/skills/fullstack-agent-workflow
> npx skills add vercel-labs/skills
> ```

---

## 🤖 Base `AGENTS.md` Shell Generation Gate

When **`/start-workflow`** (or workspace setup) is initialized:
1. **Root Check**: Check if `./AGENTS.md` exists at the project root.
2. **If Missing**: Automatically create a lightweight, 20-line **Base `AGENTS.md` Shell** at the workspace root to enforce Pre-Flight Skill Routing and Clarification Mandates from Day 1 without UI/UX bloat:

```markdown
# 🤖 Project Agent Router (`AGENTS.md`)

> **AGENT MANDATE**: This project uses a 5-Phase AI Agent Workflow. You MUST follow the Pre-Flight Skill Router, Universal Proactive Executive Expert Mandate, and Native Mobile Target Alignment Protocol below before executing tasks or modifying code.

---

## 🛑 Pre-Flight Skill Router & Executive Intent Protocol

1. **Minimal Directory-Based Skill Router & Batched Approval Gate**:
   - **Zero-Bloat Rule**: NEVER enumerate skills one-by-one inside `AGENTS.md`. Search `.agents/skills/` (or `~/.agents/skills/`) to discover active skills.
   - **Batched Skill Proposal & User Approval Gate**: Group all external skills required for an upcoming feature into a single batched menu (Skill Name, Source, Purpose, User Choice Options) before installing.
   - **Ecosystem Skill Suite Ingestion (`expo/skills`)**: For frameworks like Expo, propose `npx skills add expo/skills`, inspect available sub-skills, and selectively pick only those needed for the active project.
   - **Skill-Guided Dependency Installation**: Use installed framework skills to drive dependency installation (`npx expo install nativewind react-native-reanimated`) for 100% version compatibility.
   - **Chat-Pasted Documentation Auto-Extraction Engine**: If the user pastes raw documentation or web links into chat, automatically parse and extract API guidelines into `.agents/skills/<library>/SKILL.md`.
   - **Universal Living `AGENTS.md` Dynamic Auto-Sync Protocol**: Whenever **ANYTHING** is added to the project or workflow (packages, framework tools, build scripts, databases, environment keys, or skills — whether added before or after `AGENTS.md` creation), automatically trigger a silent re-sync (`/init-agents --upgrade`) to keep `AGENTS.md` 100% updated with zero configuration drift.

2. **Universal Proactive Executive Expert Mandate (UNRESTRICTED Across ALL Domains, Screens, & Disciplines)**:
   - **Zero Passive Order-Taking**: NEVER act as a passive order-taker in ANY phase, task, or domain (Product Strategy, ASO, Tech Stack, UI/UX Design, Monorepo Architecture, Database, Security, Code Engineering, Performance, Legal, Store Compliance, or Debugging).
   - **Live Web Research (`search_web`)**: Proactively conduct live web searches for current live platform guidelines, market trends, ASO algorithms, framework releases, security advisories, and industry best practices BEFORE writing specs, UI, or code.
   - **Unrestricted Proactive Audit & Enhancement Engine**: Proactively audit and inject universal best practices, ergonomics, legal/store compliance, zero-trust security, defensive error handling, accessibility standards, retention loops, and performance optimizations across ALL screens, components, and APIs — going beyond basic user prompts to deliver production-ready, bulletproof software.

3. **Pre-Flight Dependency & External Skill Audit**:
   - Audit real-time SDK compatibility matrices (e.g. Expo SDK matching user's active mobile device) and search `docs/05-external-skills/<library>.md` BEFORE installing packages or writing integration code. Prompt the user for missing skills/docs first.

4. **Native Mobile Target Alignment Protocol**:
   - For mobile native apps (`apps/native`), Visual AI Diff testing MUST run against Native Mobile targets (Android `adb`, iOS `xcrun`, or mobile screenshots). Web verification (`--web`) is strictly forbidden as a substitute for native mobile UI screens.

5. **Universal Zero-Token Follow-Up Quality Gate**:
   - On EVERY follow-up turn across ALL phases, internally audit draft responses against all mandatory skill constraints (zero dummy text, embedded SVGs, Dual Prompts, TypeScript strictness) before emitting output.

7. **Informational Query vs. Execution Task Gate (Fast-Path Answer Mandate)**:
   - When the user asks a simple informational, diagnostic, or capability question (e.g. *"Can you access my emulator?"*, *"How do you test native mobile screens?"*, *"What database is supported?"*):
     a) **DO NOT** launch planning mode, write implementation plans, run multi-command loops, create test scripts, or execute heavy code.
     b) **FAST-PATH ANSWER**: Answer directly in 1–2 concise text paragraphs explaining capabilities, requirements, and exact CLI commands.
     c) **SINGLE-COMMAND CHECK (ONLY IF EXPLICITLY REQUESTED)**: If the user explicitly requests a status check (e.g. *"Check if my emulator is active right now"*), run **only a single 1-liner status command** (e.g. `adb devices` or `xcrun simctl list`) and return the output immediately.

8. **Architecture Decision Ingestion & 4 Universal Target Profiles Gate**:
   - The workspace architecture model (Profile 1: Standalone Mobile App, Profile 2: Standalone Web App, Profile 3: Standalone Landing Page, Profile 4: Full-Stack Monorepo) is determined in **Phase 2 (`ARCH-PRD.md`)** and **Phase 3 (`TECH-STACK.md`)**.
   - **Non-Technical Chat Briefing**: Before scaffolding code, the agent MUST present a simple 3-part chat briefing explaining the target profile, free resources used (Vercel, Convex, Supabase, Clerk, Tailwind), and 1-liner run commands (`npm run dev` or `npx expo start`). Zero `AGENTS.md` bloat.
   - Before scaffolding files or generating code in Phase 5 (`fullstack-agent`), the agent **MUST INSPECT `docs/02-prd-research/ARCH-PRD.md` and `docs/03-tech-stack/TECH-STACK.md`**:
     * If `ARCH-PRD.md` / `TECH-STACK.md` specifies a **Full-Stack Monorepo**, the agent builds inside `apps/` (`apps/native`, `apps/web`) and `packages/` (`packages/ui`, `packages/db`, `packages/auth`) with root script forwarding in `./package.json`.
     * If `ARCH-PRD.md` / `TECH-STACK.md` specifies a **Standalone App** (Mobile, Web, or Landing Page), the agent builds flat directly in `./`.
     * If unspecified in `docs/`, the agent presents the Non-Technical Interactive Architecture Discovery Menu in chat to let the user pick their target profile.
```

---

## 🗺️ Interactive Onboarding Response Blueprint

```markdown
👋 Welcome to **`fullstack-agent-workflow`**! I am your AI Lead Architect and product partner, ready to guide you step-by-step through taking your app concept from Vibe ──> PRD ──> UI ──> Codebase.

Here is our 5-Phase Production Journey:

1️⃣ **Phase 0: Market Research & 20 App Ideas Pitch** (`/app-idea`)
   - Researches micro-niches, competitor complaints, and search trends to pitch 20 data-backed app concepts.

2️⃣ **Phase 1: Creative Vibe Jamming & Brand Identity** (`/app-brief`)
   - Jams on identity, mascot, brand voice tone, copy personality, and target audience vibe.
   - Outputs: `docs/01-app-brief/APP-BRIEF.md`

3️⃣ **Phase 2: Product Strategy, ASO & System PRD Architecture** (`/prd`)
   - Executes an 8-question discovery loop for ASO keywords, web surface models, compliance triad, and V1 scope.
   - Outputs: `docs/02-prd-research/ARCH-PRD.md` & `aso_keywords.json`

4️⃣ **Phase 3: Monorepo Architecture & Feature-First Stack** (`tech-stack`)
   - Feature-first stack decomposition across 8 monorepo layers (Expo Router, Next.js, Convex/Supabase, Clerk).
   - Outputs: `docs/03-tech-stack/app-features.md` & `TECH-STACK.md`

5️⃣ **Phase 4: Design Tokens, Generative UI Prompts, App Icons & Screenshots** (`/ui-theme`, `/ui-flow`, `/app-icon`, `/app-screenshots`)
   - Enforces Component-First sequence (`/ui-theme` token lock -> Stage 3 Auth -> Stage 4 Paywall -> Stage 5 Core Screens). Outputs Lead Designer ChatGPT prompts in chat (never in `docs/04-ui-design/app-screens/`) and archives compiled Google Stitch screen prompt specs in `docs/04-ui-design/app-screens/prompts/<screen_id>.md`.
   - Outputs: `docs/04-ui-design/app-screens/*.png` (reference screens), `docs/04-ui-design/app-screens/prompts/<screen_id>.md` (Stitch specs ONLY), `docs/04-ui-design/DESIGN-MEMORY.md`

6️⃣ **Phase 5: Tailored AGENTS.md Setup & External Skills Mapping** (`/init-agents`)
   - Ingests `docs/` to generate a 100% project-tailored `./AGENTS.md` at project root.
   - Maps framework/dependency skills and caches docs in `docs/05-external-skills/`.

7️⃣ **Phase 5 (Build): Vibe Engineering & Visual AI Diff Micro-Loop** (`app-coder`)
   - Executes 8-step Vibe Engineering loop, writes plans to `prompts/<task>.md`, runs Visual AI Diff Loop (Build ──> Screenshot ──> Compare ──> Refine) against `docs/04-ui-design/app-screens/*.png`, and merges feature branch after CodeRabbit PR review.

---

### 🏁 Where would you like to start?

- Type **`/app-idea`** to research 20 data-backed app ideas for a specific niche.
- Type **`/app-brief`** if you already have an app idea and want to jam on the vibe, mascot, and brand identity!
- Type **`/prd`** if you have `APP-BRIEF.md` ready and want to build the System PRD.
- Type **`/ui-theme`** to lock color palettes, Google Fonts pairings, and visual asset requirements!
- Type **`/ui-flow`** if your PRD is locked and you want to generate Generative UI prompt blueprints!
- Type **`/init-agents`** if your design system and PRD are ready and you want to generate your tailored `./AGENTS.md` file!
```

---

## ⚡ Master Help & Shortcut Commands Directory

| Command / Shortcut | Alias Flag | Action / Description |
| :--- | :--- | :--- |
| **`/help`** | `/workflow-help` | **Master Directory**: Displays complete interactive help menu for ALL 5 skills. |
| **`/shortcuts`** | `/workflow-shortcuts` | **Master Shortcuts**: Fast cheat-sheet table of all available triggers across all 5 skills. |
| **`/workflow-guide-help`** | `/workflow-guide --help` | Displays help guide for `00-workflow-guide`. |
| **`/workflow-guide-shortcuts`** | `/workflow-guide --shortcuts` | Shortcut list for `00-workflow-guide`. |
| **`/start-workflow`** | N/A | Runs Submodule Pre-Flight Audit Gate & interactive onboarding sitemap. |
| **`/prd-skill-help`** | `/prd-skill --help`, `/prd-help` | Displays help guide for `01-prd-skill` (Phases 0, 1, 2). |
| **`/prd-skill-shortcuts`** | `/prd-skill --shortcuts` | Shortcut list for `01-prd-skill`. |
| **`/app-idea`** | N/A | Launches Phase 0 (20 App Ideas Pitch). |
| **`/app-brief`** | N/A | Launches Phase 1 (Creative Vibe Brief & Brand Identity). |
| **`/prd`** | N/A | Launches Phase 2 (System ARCH-PRD & ASO Keywords). |
| **`/tech-stack-help`** | `/tech-stack --help` | Displays help guide for `02-tech-stack` (Phase 3). |
| **`/tech-stack-shortcuts`** | `/tech-stack --shortcuts` | Shortcut list for `02-tech-stack`. |
| **`tech-stack`** | `/tech-stack` | Launches Phase 3 (Monorepo Infrastructure & DB Schemas). |
| **`/ui-help`** | `/ui-skill --help`, `/ui-help` | Displays help guide for `03-ui-skill` (Phase 4). |
| **`/ui-shortcuts`** | `/ui-skill --shortcuts`, `/ui-shortcuts` | Shortcut list for `03-ui-skill`. |
| **`/ui-theme`** | N/A | Locks color palettes, Google Fonts pairings, and visual asset requirements in `./app_theme.json`. |
| **`/ui-flow`** | N/A | Compiles Phase 4 UI screen prompt blueprints. |
| **`/app-icon`** | N/A | Generates Phase 4 App Icon & 20-Logo Exploration Matrix prompt. |
| **`/app-screenshots`** | N/A | Generates Phase 4 Dual-Prompt App Store marketing screenshots. |
| **`/ui-extract`** | N/A | Extracts screenshot into local catalog blueprint (`design_catalog.json`). |
| **`/fullstack-agent-help`**| `/fullstack-agent --help`, `/coder-help` | Displays help guide for `04-fullstack-agent` (Phase 5). |
| **`/fullstack-agent-shortcuts`**| `/fullstack-agent --shortcuts` | Shortcut list for `04-fullstack-agent`. |
| **`/init-agents`** | N/A | Ingests `docs/` and generates project-tailored `./AGENTS.md` file. |
| **`/vibe-loop <task>`** | `/build <task>`, `/code <task>`, `fullstack-agent build` | **Macro Build Loop**: Executes 8-Step Vibe Engineering Feature Build Lifecycle (Plan ──> Review ──> Branch ──> Build ──> Visual Diff ──> PR). |
| **`/diff-loop <screen_id>`** | `/visual-diff <screen_id>`, `/diff <screen_id>` | **Micro Visual Loop**: Executes Module 6 Visual AI Diff Screenshot Comparison Loop against `app-screens/<screen_id>.png` until 100% match. |
| **`fullstack-agent`** | `/code`, `/build`, `/plan` | Launches Phase 5 full-stack monorepo code generation on feature branch. |
| **`/clean`** | `/repo-clean`, `/clean-workspace` | **Utility Skill**: Runs 4-category workspace cleanup audit and presents interactive deletion proposal table. |
