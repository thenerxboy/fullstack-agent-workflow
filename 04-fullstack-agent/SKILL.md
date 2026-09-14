---
name: fullstack-agent
description: Monorepo code generation, Expo Router mobile components, Next.js App Router storefronts, Convex/Supabase client DB schemas, tailored AGENTS.md generator (/init-agents), external skills & doc mapper (docs/05-external-skills/), mandatory TECH-STACK.md ingestion gate, feature-branch & CodeRabbit PR workflow, Vibe Engineering loop, and full-stack codebase builder.
---

# 💻 Full-Stack Monorepo Code Generation & Delivery Skill (`fullstack-agent`)

Universal, agent-agnostic AI coding skill based on **Vibe Engineering** and **Practical Vibe Coding** principles. It equips AI coding agents with procedural rules, autonomous project-tailored `AGENTS.md` generation (`/init-agents`), external skill/doc mapping (`docs/05-external-skills/`), mandatory `TECH-STACK.md` ingestion gates, feature-branch & CodeRabbit PR workflows, 8-step execution loops, 10-step build-in-order roadmaps, and hardcoded cheatsheets to build production-ready software inside an enterprise Turborepo monorepo.

> [!IMPORTANT]
> **AGENT MANDATE**: Any agent executing a feature build, code generation, refactoring, or bug fix task **MUST ALWAYS read this SKILL.md file first** (`view_file`). The agent must follow the 8-Step Vibe Engineering Loop: write an implementation plan to `prompts/<task-name>.md` first, inspect `docs/03-tech-stack/TECH-STACK.md` for real schemas, check `docs/05-external-skills/` for dependency docs, execute on a dedicated feature branch, run typecheck/lint checks, handle CodeRabbit PR reviews, and sync local `main`.

---

## 📁 Document Path & Fallback Protocol

Agents MUST search for input context files and write output artifacts using this prioritized path resolution hierarchy:

| Ingested / Generated Asset | Primary Target Path | Fallback Path 1 | Fallback Path 2 |
| :--- | :--- | :--- | :--- |
| **Project Rules & Conventions** | `./AGENTS.md` | `docs/AGENTS.md` | `docs/00-workflow-guide/AGENTS.md` |
| **Project Brief** | `docs/01-project-brief/PROJECT-BRIEF.md` | `docs/01-app-brief/APP-BRIEF.md` | `docs/PROJECT-BRIEF.md` |
| **System ARCH-PRD** | `docs/02-prd-research/ARCH-PRD.md` | `docs/ARCH-PRD.md` | `./ARCH-PRD.md` |
| **App Features Map** | `docs/03-tech-stack/app-features.md` | `docs/app-features.md` | `./app-features.md` |
| **Tech Stack Spec (MANDATORY)** | `docs/03-tech-stack/TECH-STACK.md` | `docs/TECH-STACK.md` | `./TECH-STACK.md` |
| **UI Design Memory** | `docs/04-ui-design/DESIGN-MEMORY.md` | `docs/DESIGN-MEMORY.md` | `./DESIGN-MEMORY.md` |
| **Google Stitch Screen Prompts** | `docs/04-ui-design/app-screens/prompts/<screen_id>.md` | N/A (Strict Path) | N/A |
| **UI Reference Screens** | `docs/04-ui-design/app-screens/<screen_id>.png` | N/A (Strict Path) | N/A |
| **AI Implementation Plans** | `prompts/<task_name>.md` | `docs/prompts/<task_name>.md` | `./prompts/<task_name>.md` |

---

## ⚡ Shortcut Commands & Help Triggers

| Command / Shortcut | Alias Flag | Action / Behavior |
| :--- | :--- | :--- |
| **`/fullstack-agent-help`** | `/fullstack-agent --help`, `/coder-help` | Displays complete Phase 5 manual: Vibe Engineering loop, `./AGENTS.md` rules, feature branch PRs, and Visual AI Diff. |
| **`/fullstack-agent-shortcuts`** | `/fullstack-agent --shortcuts` | Fast cheat-sheet list of all Phase 5 trigger shortcuts. |
| **`/init-agents`** | N/A | Ingests `docs/` (App Brief, PRD, Tech Stack, UI Design Memory) and generates a 100% project-tailored `./AGENTS.md` file at root. |
| **`/vibe-loop <task>`** | `/build <task>`, `/code <task>`, `fullstack-agent build` | **Macro Build Loop**: Executes the 8-Step Vibe Engineering Feature Build Lifecycle (Plan ──> Review ──> Branch ──> Build ──> Visual Diff ──> PR). |
| **`/diff-loop <screen_id>`** | `/visual-diff <screen_id>`, `/diff <screen_id>` | **Micro Visual Loop**: Executes Module 6 Visual AI Diff Screenshot Comparison Loop against `app-screens/<screen_id>.png` until 100% match. |
| **`fullstack-agent`** | `/code`, `/build`, `/plan` | Launches Phase 5 (Full-Stack Monorepo Code Generation & Feature Building on dedicated branch). |

---

## 🔄 Loop Terminology Disambiguation Protocol

To prevent any AI confusion when the user mentions "loop" or "loop feature":
1. **Macro Build Loop (`/vibe-loop <task>`)**: Refers to the complete 8-step Vibe Engineering process (creating implementation plan `prompts/<task>.md`, feature branch `feature/<task>`, building code, visual verification, and PR review).
2. **Micro Visual Verification Loop (`/diff-loop <screen_id>`)**: Refers strictly to Module 6 Visual AI Diff screenshot comparison (taking native `adb`/`xcrun` screenshot, comparing against `app-screens/<screen_id>.png`, and refining code until 100% match).
3. **Disambiguation Rule**: When asked about the "loop feature", the agent MUST state both loops clearly with their specific trigger commands (`/vibe-loop` vs `/diff-loop`) so the user can select their exact intent.

---

## 🛡️ Mandatory `TECH-STACK.md` Ingestion & Anti-Drift Engine

To ensure the AI agent **NEVER ignores `TECH-STACK.md` or forgets it exists**:

1. **Mandatory Ingestion Gate**: Before drafting ANY implementation plan in `prompts/<task-name>.md`, the agent **MUST ALWAYS read and inspect `docs/03-tech-stack/TECH-STACK.md` and `docs/03-tech-stack/app-features.md`**.
2. **Proof of Read in Implementation Plans**: In `prompts/<task-name>.md`, the agent MUST explicitly record:
   ```markdown
   ## 2. What It Read
   - [x] `docs/03-tech-stack/TECH-STACK.md` (Inspected Section X: Data Model & Package Rules)
   - [x] `docs/03-tech-stack/app-features.md` (Inspected Feature Y Monorepo Mapping)
   ```
   *If `docs/03-tech-stack/TECH-STACK.md` is missing from "What It Read", the user MUST reject the plan!*
3. **Anti-Drift Tech Stack Constraint Line**:
   > *"Do NOT reach for unapproved libraries or alternative patterns from training data. All backend schemas, package boundaries, and allowed tools MUST strictly match `docs/03-tech-stack/TECH-STACK.md`."*
5. **Informational Query vs. Execution Task Gate (Fast-Path Answer Mandate)**:
   - When the user asks a simple informational, diagnostic, or capability question (e.g. *"Can you access my emulator?"*, *"How do you test native mobile screens?"*, *"What database is supported?"*):
     a) **DO NOT** launch planning mode, write implementation plans, run multi-command loops, create test scripts, or execute heavy code.
     b) **FAST-PATH ANSWER**: Answer directly in 1–2 concise text paragraphs explaining capabilities, requirements, and exact CLI commands.
     c) **SINGLE-COMMAND CHECK (ONLY IF EXPLICITLY REQUESTED)**: If the user explicitly requests a status check (e.g. *"Check if my emulator is active right now"*), run **only a single 1-liner status command** (e.g. `adb devices` or `xcrun simctl list`) and return the output immediately.

---

## 🌿 Feature-Branch & CodeRabbit PR Review Protocol

For EVERY feature or bug fix, the agent MUST follow this 7-step isolated Git lifecycle:

```
[1. Feature Branch] ➔ [2. Build & Test] ➔ [3. Stage & Commit] ➔ [4. Push Branch] ➔ [5. CodeRabbit PR Review] ➔ [6. Merge to Main] ➔ [7. Sync Local Main]
```

1. **Step 1: Feature Branch Isolation**: Create and check out a dedicated branch named after the feature (e.g. `feature/profile-legal-pages` or `git checkout -b feature/<task-name>`). Never write code directly on `main` / `master`!
2. **Step 2: Local Feature Build & Automated Checks**: Implement feature code strictly scoped to the plan. Execute `npx tsc --noEmit` (TypeScript typecheck) and `npm run lint`.
3. **Step 3: Stage & Structured Commit**: Stage changes (`git add .`) and create a concise commit message (e.g. `feat(profile): implement profile & web legal pages`).
4. **Step 4: Push Branch to GitHub**: Propose pushing the feature branch to GitHub (`git push -u origin feature/<task-name>`).
5. **Step 5: CodeRabbit AI PR Review Gate**:
   - Create a Pull Request (PR) on GitHub.
   - When **CodeRabbit AI** scans the PR diffs and posts inline review comments (flagging edge cases, missing error handlers, security risks, or type mismatches), inspect CodeRabbit's feedback.
   - Write a targeted fix prompt, update the feature branch locally, push the fixes, and confirm CodeRabbit's re-check passes.
6. **Step 6: Merge PR into `main`**: Confirm merge on GitHub to integrate the feature into remote `main`. Option to delete remote feature branch.
7. **Step 7: Sync Local Workspace `main`**: Return to terminal and run:
   ```bash
   git checkout main
   git pull origin main
   ```
#### 📍 App Code Commit Specification:
- **Target Execution Directory**: `./` (App Workspace Root)
- **Target Repository**: `https://github.com/your-username/my-app.git` (Your Project Repo)
- **Target Branch**: `feature/<task-name>`

```bash
git checkout -b feature/<task-name>
git add .
git commit -m "feat(scope): implement feature name"
git push -u origin feature/<task-name>
```
*Note: This commits ONLY application code to your project repository.*

---

## 🌟 Feature A: Autonomous Tailored `AGENTS.md` Generator (`/init-agents`)

The agent—NOT the human—generates the project-level `./AGENTS.md` file by ingesting the completed project artifacts from earlier workflow stages.

### Execution Workflow for `/init-agents`:
1. **Ingest Documentation**: Read `docs/01-project-brief/PROJECT-BRIEF.md` (fallback: `docs/01-app-brief/APP-BRIEF.md`), `docs/02-prd-research/ARCH-PRD.md`, `docs/03-tech-stack/TECH-STACK.md` & `app-features.md`, and `docs/04-ui-design/DESIGN-MEMORY.md`.
2. **Extract Real Attributes**: Extract the app's real name, tagline, core features (In Scope), explicit out-of-scope defense list, monorepo package paths, database schemas, approved Google Fonts pairings, and locked stadium pill navbar specs.
3. **GitHub Remote Verification Gate**: Check if workspace root has an active remote origin (`git remote get-url origin`). If NO remote is set up yet, guide the user using their locked real product name:
   > 🚀 **Phase 5 GitHub Remote Setup**:
   > Now that we have locked your product name as **[PRODUCT_NAME]**, let's link your workspace to GitHub before creating feature branches:
   > 1. Create repository `[product-name]` on GitHub.
   > 2. Run in terminal: `git remote add origin https://github.com/your-username/[product-name].git`
4. **Minimum Environment Bootstrap**:
   - Generate / Upgrade `./AGENTS.md`: Preserve the top **Pre-Flight Skill Router & Intent Protocol** block (with minimal directory-based router and `find-skills` gateway), and append the comprehensive Monorepo Code Architecture, Database Schemas, Monorepo Package Paths, and Visual AI Diff Loop rules below it.
   - **Utility Skill Check (`find-skills`)**: Ensure `find-skills` is installed (`npx skills add vercel-labs/skills`) in `.agents/skills/find-skills` so the project has universal skill search capabilities.
   - **Root Proxy Scripts Generator**: Generate `./scripts/ui_formatter.js` and `./scripts/capture-screen.js` proxy files at workspace root forwarding calls to `.agents/skills/fullstack-agent-workflow/scripts/` so root CLI execution works seamlessly.
   - Ensure clean `.gitignore` (protecting `.env`, `.env.local`, `node_modules/`, `.expo/`, `.next/`).
   - Generate starting `.env.example` with bare minimum starting vars (`EXPO_PUBLIC_APP_NAME`, `EXPO_PUBLIC_DEV_URL`).
   - Create initial `docs/00-workflow-guide/ENVIRONMENT-CHECKLIST.md` tracking initial setup status.
5. **File Generation Proposal**: Ask gatekeeper question: *"I am ready to generate your project-tailored `./AGENTS.md` and starting environment files. Do you approve?"*
6. **File Output**: Upon user approval, write the files to the project root.

---

## 🌟 Feature B: Progressive Environment, Ecosystem Suites (`expo/skills`), & Chat-Doc Extraction Engine (`docs/05-external-skills/`)

Environment variables and external framework skills (`clerk`, `convex`, `stripe`, `supabase`, `expo-camera`, `expo-router`) are **NEVER dumped all at once**. They are unlocked, proposed, and installed **Just-in-Time, Selectively, and with Explicit Batched Human Approval**:

### 1. Interactive Batch Skill Proposal & User Approval Gate
Before running `npx skills add ...` or installing external skills, the agent **MUST ALWAYS present a single Batched Skill Proposal** in chat detailing all skills required for the upcoming feature/milestone:

For each skill in the batch proposal, the agent presents:
- **Skill Name & Registry Source**: (e.g. `expo-router` from `https://skills.sh/expo/skills` or `vercel-labs/skills`).
- **Purpose & Justification**: Exact feature/task requiring this skill (e.g. *"Setting up Expo Router tab navigation in `apps/native`"*).
- **Discovery Status**: Indicates if the skill was found online via `find-skills` or requires user guidance/chat-pasted docs.
- **Batched User Choice Options**:
  * **`[1] Approve & Auto-Install Batch`**: Agent executes CLI commands (`npx skills add expo/skills`) automatically.
  * **`[2] Manual Terminal Install`**: Displays exact terminal commands for the user to run manually.
  * **`[3] Paste Raw Docs in Chat`**: User pastes documentation text or web links directly in chat for auto-extraction.

### 2. Ecosystem Skill Suite Ingestion (`expo/skills`) & Selective Sub-Skill Picking
When setting up a framework suite (e.g. **Expo**):
- The agent proposes `npx skills add expo/skills` (pulling from `skills.sh/expo/skills`).
- The agent inspects `expo/skills` and **selectively picks ONLY the sub-skills required for this project** (e.g. `expo-router`, `nativewind`, `reanimated`), presenting them in the batched proposal menu.

### 3. Skill-Guided Dependency Installation (`npx expo install ...`)
Once the user approves the proposed skills:
- The agent **MUST use the installed Expo skills to guide dependency installation** (e.g. executing `npx expo install nativewind react-native-reanimated` according to official Expo skill rules) so package versions match perfectly without peer-dependency errors.

### 4. Chat-Pasted Documentation Auto-Extraction Engine
If the user selects option `[3]` or pastes raw documentation text/links into the chat:
- The agent parses the pasted text, extracts API rules, docstrings, code patterns, and constraints.
- Automatically compiles and saves a structured skill file at `.agents/skills/<library_name>/SKILL.md`.
- Caches reference docs at `docs/05-external-skills/<library_name>.md`.
- Crosses off completed items in `docs/00-workflow-guide/ENVIRONMENT-CHECKLIST.md`.

### 5. Universal Living `AGENTS.md` Dynamic Auto-Sync Engine
Whenever **ANYTHING** is added or initialized in the project (whether added before or after `AGENTS.md` creation — e.g. Expo, NativeWind, Convex, Supabase, Tailwind, build scripts, test runners, or new skills):
- The agent detects the build delta during pre-flight checks (`package.json`, `turbo.json`, `scripts/`, `.agents/skills/`, `.env.example`, `docs/`).
- Automatically triggers a silent re-sync (`/init-agents --upgrade`) to update `AGENTS.md`, `docs/03-tech-stack/TECH-STACK.md`, and `docs/00-workflow-guide/ENVIRONMENT-CHECKLIST.md`.
- Guarantees `AGENTS.md` is a living document mirroring the true live setup of the project with zero configuration drift.

---

## 📐 Canonical Turborepo Monorepo Architecture

- **`apps/native`**: Expo Router mobile app (iOS & Android) with NativeWind/Tailwind styling, Expo Router native tabs `(tabs)/_layout.tsx`, and haptics/sensors.
- **`apps/web`**: Next.js App Router marketing landing page, legal triad (`/privacy`, `/terms`, `/support`), and operator dashboard.
- **`packages/ui`**: Shared cross-platform design primitives & tailwind design tokens.
- **`packages/db`**: Database client, queries, and schemas (Convex, Supabase, or InsForge).
- **`packages/auth`**: Cross-platform authentication session helpers (Clerk or Supabase Auth).

---

## 🔄 The 8-Step Vibe Engineering Execution Loop

For EVERY feature or code generation task, the AI agent MUST execute this exact loop:

```
[1. Read Rules & Stack] ➔ [2. Short Task] ➔ [3. Write Plan to prompts/] ➔ [4. Human Review] ➔ [5. Human Approval] ➔ [6. Build on Branch] ➔ [7. Visual AI Diff Loop] ➔ [8. Typecheck & CodeRabbit PR]
```

1. **Read Rules & Tech Stack**: Read `./AGENTS.md`, `docs/03-tech-stack/TECH-STACK.md`, `docs/04-ui-design/DESIGN-MEMORY.md`, and named skills (`app-coder`, `ui-skill`, `tech-stack`).
2. **Receive Short Prompt**: Accept a single-feature prompt with a defined scope.
3. **Write Detailed Implementation Plan**: Write the complete plan file to `prompts/<task-name>.md` (including Proof of Read & External Skills mapping).
4. **Human Review**: Hit pause and ask the user to review `prompts/<task-name>.md`.
5. **Human Approval**: Wait for explicit user approval ("yes", "approved", "go ahead").
6. **AI Build on Feature Branch**: Create feature branch (`git checkout -b feature/<name>`) and implement code.
7. **Visual AI Diff Loop (Module 6)**: Capture simulator/browser screenshot, perform 10-point multimodal visual comparison against `docs/04-ui-design/app-screens/<screen_id>.png` (fallback `app-screens/<screen_id>.png`), and refine until 100% pixel-perfect.
8. **CodeRabbit PR & Main Sync**: Run `tsc`/`lint`, push branch, review CodeRabbit feedback on PR, merge to `main`, and run `git checkout main && git pull origin main`.

---

## 🔮 Module 6: The Pixel-Perfect Refresh-First Visual AI Diff & Verification Micro-Loop

For all UI components, screens, and layout changes, the agent MUST NOT ask *"Does this look right?"*. It MUST execute the mandatory 5-Step Refresh-First Visual Verification Loop:

```
╔═════════════╗      ╔══════════════════════════╗      ╔══════════════════════╗      ╔═══════════════════════╗      ╔════════════════════════╗
║   1. BUILD  ║ ───> ║ 2. REFRESH TARGET SURFACE║ ───> ║ 3. TAKE SCREENSHOT   ║ ───> ║ 4. COMPARE TO DESIGN  ║ ───> ║ 5. IDENTICAL? (100%)   ║
╚═════════════╝      ╚══════════════════════════╝      ╚══════════════════════╝      ╚═══════════════════════╝      ╚════════════════════════╝
       ▲                                                                                                                        │
       │                                                      ❌ NO (Print 1-Line Status & Refine Code)                           │
       └────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
                                                                                                                                │
                                                                                                                        ✅ YES (100% Match)
                                                                                                                                │
                                                                                                                                ▼
                                                                                                                     [CodeRabbit PR & Merge]
```

### 🔄 Mandatory Refresh-First & Step-by-Step Transparency Rules:

1. **Step 1: Save Code Changes**: Implement component/layout code updates on feature branch.
2. **Step 2: FORCE REFRESH / RELOAD TARGET SURFACE (MANDATORY)**:
   - **Android Emulator / Device**: Run `adb shell input keyevent 82` (or reload key event) to force Expo to re-render the fresh bundle on screen.
   - **iOS Simulator Target**: Force simulator focus and app bundle reload before capture.
   - **Web Surface Target**: Trigger browser page reload on `http://localhost:3000` before running Playwright capture.
3. **Step 3: Capture Fresh Screenshot**: Save fresh surface render to `docs/04-ui-design/verification/<screen_id>-actual.png`.
4. **Step 4: 10-Point Visual Comparison**: Compare target `docs/04-ui-design/app-screens/<screen_id>.png` (fallback `app-screens/<screen_id>.png`) vs `docs/04-ui-design/verification/<screen_id>-actual.png`.
5. **Step 5: Visible Progress Status Output (NO SILENT LOOPS)**:
   - **STRICT MANDATE**: The agent MUST NOT run silent loops in the background. On EVERY iteration, emit a short, 1-line progress update:
     > 📸 **Visual Diff Iteration N**: Surface reloaded. Captured fresh screenshot. Score: **X% Match**. (Applying targeted fix to: [Element Name]).
6. **Completion Gate**:
   - If 100% Match $\rightarrow$ Print `🎉 Visual Diff Passed (100% Match)` and proceed to PR review.
   - If <100% Match $\rightarrow$ Apply targeted fix, force refresh, capture, and compare again.

### 📸 Surface-Specific Screenshot Capture Protocol & Hardcoded Emulator Rules

> ⚠️ **SURFACE TARGET ISOLATION MANDATE**: The agent MUST inspect the active project surface type before running verification:
> - **Mobile App Surface (`apps/native` Expo Router)**: MUST execute native mobile emulator capture (`adb` or `xcrun`). Web Playwright verification is STRICTLY FORBIDDEN as a substitute for mobile screens.
> - **Web App / Landing Surface (`apps/web` Next.js)**: MUST execute web browser capture against the Next.js server (`http://localhost:3000`).

#### Hardcoded Autonomous CLI Capture Commands:

1. **Android Emulator / Connected Device Target**:
   ```bash
   adb exec-out screencap -p > docs/04-ui-design/verification/<screen_id>-actual.png
   ```
   *Auto-checks `adb devices` to confirm a booted Android emulator/device exists.*

2. **iOS Simulator Target (macOS)**:
   ```bash
   xcrun simctl io booted screenshot docs/04-ui-design/verification/<screen_id>-actual.png
   ```
   *Auto-checks `xcrun simctl list devices` to confirm a booted iOS simulator exists.*

3. **Web Surface Target (`apps/web` Next.js)**:
   ```bash
   node scripts/capture-screen.js http://localhost:3000/<route> docs/04-ui-design/verification/<screen_id>-actual.png
   ```

4. **Physical Mobile Device Fallback (Expo Go on Handset)**:
   If no emulator/simulator CLI is booted and testing on a physical phone:
   > *"Native UI build complete. Please take a quick screenshot on your phone and save it to `docs/04-ui-design/verification/<screen_id>-actual.png` so I can run the visual AI diff check."*

### 📋 10-Point Multimodal Visual Comparison Matrix
During Step 3 (Compare to Design), evaluate `docs/04-ui-design/app-screens/<screen_id>.png` (Target, fallback `app-screens/<screen_id>.png`) vs `docs/04-ui-design/verification/<screen_id>-actual.png` (Actual) across:
1. **Layout & Spacing**: Container padding, item margins, vertical/horizontal gap alignment.
2. **Typography**: Font size, font weight (bold/medium/regular), line height, letter spacing.
3. **Colors & Gradients**: Hex code accuracy, background contrast, gradient direction & opacity.
4. **Button Styles**: Height, padding, label centering, active/pressed states.
5. **Input Fields**: Border color, placeholder text position, field height, icon padding.
6. **Border Radius**: Corner curvature matching across cards, buttons, and inputs.
7. **Shadows & Depth**: Elevation, shadow color blur, spread radius, soft drop-shadows.
8. **Icons & Imagery**: Asset scaling, icon size, aspect ratio, image cropping.
9. **Alignment**: Flexbox/grid alignment (left, center, space-between).
10. **Visual Hierarchy**: Primary vs. secondary element prominence, overall layout balance.

*If any item scores <100% match, apply visual fixes, update code, capture a new screenshot, and repeat until 100% identical.*

---

## 🐛 Dedicated Bug Diagnostic Engine (`/debug`)

When the user triggers **`/debug`** or reports an unexpected error, build crash, or missing feature:

1. **Raw Log Inspection Mandate**: The agent MUST NOT form diagnostic hypotheses or write code without reading un-truncated runtime terminal logs, build outputs, or stack traces (`view_file` on log files or running diagnostic log commands).
2. **Zero Superficial Symptom Patching**: Absolutely NO masking errors with silent `try/catch` blocks, returning dummy fallbacks, or deleting failing assertions. Identify and fix the true root cause upstream.
3. **Traceback Justification**: Every edit made during debugging MUST be justified by explicit log line evidence.
4. **Automated Fix Verification**: After applying fixes, execute TypeScript typecheck (`npx tsc --noEmit`) and capture a fresh native mobile screenshot to confirm clean resolution.
5. **Universal Proactive Software Engineer Mandate**: DO NOT act as a passive order-taker. Proactively enforce clean architecture, defensive programming (defensive null-checks, error boundary wrappers), WCAG accessibility props (`accessibilityLabel`), and web search audits (`search_web`) for current live framework patterns.
6. **Universal Zero-Token Follow-Up Quality Gate**: On EVERY follow-up generation turn, internally audit draft code against TypeScript strictness, Monorepo package rules, and Native Mobile target constraints before emitting output.

---

## 🗺️ The 10-Step Build-in-Order Roadmap

Order matters. Building out of order creates UI decisions before data exists or wires integrations before dependencies exist. Execute features in this exact order:

```markdown
1. Design System        ──> Colors, typography, spacing, base primitives (NativeWind / packages/ui).
2. Core UI Screens     ──> Build screens on placeholder data to shape UX early without waiting for backend.
3. Authentication      ──> Add Clerk / Supabase Auth once screens exist so protected routes are clear.
4. Database & Schemas  ──> Lock DB tables, fields, Zod schemas, and required validation rules.
5. Seed / Config Data  ──> Add initial starting rows (categories, settings, defaults).
6. Read Path           ──> Bind UI to real stored data, replacing placeholders (expect empty states).
7. Core Engine         ──> Main business logic, processing, scraping, or generation pipelines.
8. Intelligence        ──> AI analysis, search, or recommendation layers on top of stored data.
9. Automation          ──> Background jobs, cron schedulers, push notifications (after manual flow works).
10. Deploy & Harden    ──> EAS Build, secret scanning, TestFlight (iOS) and Google Play internal testing.
```

---

## 📄 Hardcoded Cheatsheet 1: Tailored `AGENTS.md` Template (`/init-agents`)

```markdown
# AGENTS.md — Master Project Rules & Conventions

You are a principal-level software engineer building [PRODUCT_NAME], a [ONE_LINE_DESCRIPTION].
Your job: understand the request, inspect relevant code, read docs/03-tech-stack/TECH-STACK.md, read named skills in docs/05-external-skills/, write a detailed implementation plan to prompts/<task-name>.md, get human approval, then implement on a feature branch.

## 1. Pre-Flight Skill Router & Executive Intent Protocol
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
3. **Pre-Flight Dependency & Version Audit Gate**: Audit real-time SDK compatibility matrices and inspect `docs/05-external-skills/` BEFORE installing packages.
4. **Native Mobile Target Alignment Protocol**: For mobile native (`apps/native`), screenshot verification MUST use native targets (`adb` or `xcrun`). Web `--web` Playwright verification is strictly forbidden as a substitute for native screens.
5. **Universal Zero-Token Follow-Up Quality Gate**: Internally audit draft responses against all mandatory skill constraints before emitting output.
6. **Interactive Learning Clarification Mandate**: For multi-engine or underspecified requests, STOP & ASK using an Interactive Learning Menu showing exact shortcut commands.
7. **Informational Query vs. Execution Task Gate (Fast-Path Answer Mandate)**:
   - For simple informational or diagnostic questions (*"Can you access my emulator?"*, *"How does X work?"*): DO NOT launch planning mode, write implementation plans, or run heavy code loops. Immediately answer directly in concise text (1–2 paragraphs). Run a 1-liner status check (`adb devices`) ONLY if explicitly asked.
8. **Architecture Decision Ingestion & 4 Universal Target Profiles Gate**:
   - The workspace architecture model (Profile 1: Standalone Mobile, Profile 2: Standalone Web App, Profile 3: Standalone Landing Page, Profile 4: Full-Stack Monorepo) is determined in **Phase 2 (`ARCH-PRD.md`)** and **Phase 3 (`TECH-STACK.md`)**.
   - **Non-Technical Chat Briefing**: Before scaffolding code, the agent MUST present a simple 3-part chat briefing explaining the target profile, free resources used (Vercel, Convex, Supabase, Clerk, Tailwind), and 1-liner run commands (`npm run dev` or `npx expo start`). Zero `AGENTS.md` bloat.
   - Before scaffolding files or generating code in Phase 5 (`fullstack-agent`), the agent **MUST INSPECT `docs/02-prd-research/ARCH-PRD.md` and `docs/03-tech-stack/TECH-STACK.md`**:
     * If `ARCH-PRD.md` / `TECH-STACK.md` specifies a **Full-Stack Monorepo**, the agent builds inside `apps/` (`apps/native`, `apps/web`) and `packages/` (`packages/ui`, `packages/db`, `packages/auth`) with root script forwarding in `./package.json`.
     * If `ARCH-PRD.md` / `TECH-STACK.md` specifies a **Standalone App** (Mobile, Web, or Landing Page), the agent builds flat directly in `./`.
     * If unspecified in `docs/`, the agent presents the Non-Technical Interactive Architecture Discovery Menu in chat to let the user pick their target profile.

## 2. Execution Workflow (Phase 5 Build)
1. Read `AGENTS.md`, `docs/03-tech-stack/TECH-STACK.md`, and relevant skills first before writing code.
2. Check `docs/05-external-skills/` for cached dependency documentation.
3. Inspect relevant existing files.
4. Ask a focused question ONLY if there is real ambiguity.
5. Write a detailed implementation plan to `prompts/<task-name>.md`.
6. Ask: "I prepared the implementation prompt at prompts/<task-name>.md. Good to execute?"
7. Implement ONLY after human approval on a dedicated feature branch (`feature/<name>`).
8. For UI tasks: Execute Visual AI Diff Loop against `docs/04-ui-design/app-screens/<screen_id>.png` (fallback `app-screens/<screen_id>.png`) using surface-specific screenshot CLI commands (`adb` for Android, `xcrun` for iOS, `capture-screen.js` for web) until 100% match.
9. Run typecheck (`tsc`) and lint checks.
10. App Code Commit: Push branch from `./` (App Root) to project repo (`my-app.git`), handle CodeRabbit PR review, merge to main, and sync local main (`git checkout main && git pull`).
11. Design Token Sync: If `./app_theme.json` or `./design_catalog.json` were updated, ensure they are committed to your local app repository (`my-app.git`).

## 2. Product Scope
- **In Scope**: [REAL_FEATURE_LIST_FROM_PRD]
- **Out of Scope (CRITICAL DEFENSE)**: [REAL_OUT_OF_SCOPE_LIST_FROM_PRD] (Do NOT overbuild or invent unrequested features!)

## 3. Architecture
- `apps/native`: Expo Router mobile app screens and routes.
- `apps/web`: Next.js App Router landing page and web legal triad.
- `packages/ui`: Shared cross-platform primitives (NativeWind).
- `packages/db`: Backend client, queries, and Zod schemas (Convex/Supabase).
- `packages/auth`: Clerk authentication session helpers.

## 4. Tech Stack & Don'ts
- **Framework**: Expo (React Native) + Next.js (App Router)
- **Language**: TypeScript (Strict mode, zero `any`)
- **Styling**: NativeWind (Tailwind CSS)
- **Typography**: [APPROVED_GOOGLE_FONTS_PAIRING]
- **State**: Zustand (global client state) + AsyncStorage (persistence)
- **Database**: Convex / Supabase PostgreSQL (Strictly match `docs/03-tech-stack/TECH-STACK.md`)
- **Auth**: Clerk (Do NOT build custom auth!)
- **Analytics**: PostHog
- **DO NOT USE**: Custom auth solutions, inline StyleSheet (unless on exception list), unapproved state libraries.

## 5. Security & Secrets
- NEVER expose service-role keys, admin secrets, or API tokens to the client browser or mobile bundle.
- API calls, model calls, scraping, and database writes MUST run on server routes / backend functions.

## 6. Code Standards & Fallback Rule
- Small functions, explicit types, no `any`, no over-engineering.
- **Fallback Rule**: When unsure, keep it small, ask ONE focused question, write a plan to `prompts/<task-name>.md`, get approval, then build.
```

---

## 📄 Hardcoded Cheatsheet 2: Implementation Plan Template (`prompts/<task-name>.md`)

Every implementation plan generated by `app-coder` MUST use this exact template:

```markdown
# 📋 Implementation Plan: [TASK_NAME]

## 1. Goal
[One sentence describing what this task accomplishes.]

## 2. What It Read
- [x] `docs/03-tech-stack/TECH-STACK.md` (Inspected Section X: Data Model & Package Rules)
- [x] `docs/03-tech-stack/app-features.md` (Inspected Feature Y Monorepo Mapping)
- [x] `@.agents/skills/fullstack-agent-workflow/04-fullstack-agent`
- [ ] `docs/05-external-skills/<library>.md`

## 3. External Skills & Documentation Status
- [ ] Loaded from `docs/05-external-skills/<library>.md`
- [ ] MISSING: [Library Name] ──> Run `npx skills add <library>/skills` or paste docs into `docs/05-external-skills/<library>.md`

## 4. Assumptions & Resolved Ambiguities
- [Explicit list of any ambiguous decisions resolved on its own for review]

## 5. Files That Will Change
- [NEW] `apps/native/components/FeatureCard.tsx`
- [MODIFY] `apps/native/app/(tabs)/index.tsx`

## 6. Implementation Requirements
- [Concrete requirement 1]
- [Concrete requirement 2]

## 7. Security & Server/Client Boundaries
- [State server vs client boundaries and how secrets are kept safe]

## 8. Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2

## 9. Checks to Run
- `npx tsc --noEmit`
- `npm run lint`

## 10. How to Verify It
- [Exact step-by-step manual testing steps for human review]
- [x] Visual AI Diff Loop Status: Compare target docs/04-ui-design/app-screens/[screen_id].png (fallback app-screens/[screen_id].png) vs captured docs/04-ui-design/verification/[screen_id]-actual.png across 10-Point Matrix until 100% match.
```

---

## 📄 Hardcoded Cheatsheet 3: The 4-Part Prompt Structure & Everyday Templates

Every prompt written or executed follows these 4 parts in order:
1. **Anchor**: Read `AGENTS.md` / `TECH-STACK.md` first and follow it strictly.
2. **Task**: One feature, one screen, or one integration. Not three.
3. **Constraints**: Protected files and rules not to break.
4. **Reference**: Attached design image, PRD excerpt, or loaded doc from `docs/05-external-skills/`.

### Template 1: Pixel-Perfect UI Re-creation & Visual AI Diff Trigger Prompt
```markdown
Read AGENTS.md and TECH-STACK.md first and follow them strictly.

Build the [screen_name] screen by closely recreating the UI from docs/04-ui-design/app-screens/[screen_id].png.
Your goal is to match the reference design as accurately as possible, including:
- Layout and spacing
- Typography, font sizes, and font weights
- Colors and gradients
- Button styles & state styling
- Input fields & padding
- Border radius
- Shadows and depth
- Icons (embedded mathematical SVG)
- Alignment and padding
- Overall visual hierarchy

Use the existing project structure and styling system (NativeWind). Do not redesign or improvise unless something is missing from the reference.

After implementing the first version, execute Module 6 Visual Verification:
1. Capture simulator/browser screenshot to docs/04-ui-design/verification/[screen_id]-actual.png.
2. Compare the captured screenshot against docs/04-ui-design/app-screens/[screen_id].png across the 10-Point Visual Matrix.
3. Identify all visual differences (margins, font sizes, colors, alignment).
4. Update the implementation code.
5. Capture another simulator screenshot and compare again.
6. Repeat until the implemented screen and reference design are visually identical (100% match).
```
Be strict with the comparison. Pay attention to small details like spacing, text positioning, button height, shadows, image cropping, and color accuracy.
Do not stop after the first implementation. Keep refining until the screenshot and reference design look nearly identical.
```

---

## 🔒 Code Quality Rules & Constraint Library

### 1. Centralized Image Imports (`constants/images.ts`)
- ALL image assets MUST be imported centrally in `constants/images.ts`:
  ```typescript
  import mascot from "@/assets/images/mascot.png";
  export const images = { mascot };
  ```
- Usage in components: `<Image source={images.mascot} />`
- **STRICT RULE**: Never import image assets directly inside individual screens or components!

### 2. NativeWind Styling & StyleSheet Exception List
- Use NativeWind `className="..."` for all styling.
- **StyleSheet Exception List**: Use inline styles or `StyleSheet.create` ONLY for:
  1. `SafeAreaView` (`className` unsupported on some platforms)
  2. `KeyboardAvoidingView` (behavior props)
  3. `Modal` (visible, transparent props)
  4. `Animated.View` (dynamic animated values)
  5. Dynamic runtime calculated style values
  6. Platform-specific conditional overrides (`Platform.OS === 'ios'`)
  7. `Pressable` / `TouchableOpacity` pressed state objects

### 3. State Management Rules
- **Global State**: Zustand (`packages/db` or `store/`).
- **Local State**: `useState` / `useReducer` for temporary UI toggles (modals, dropdowns).
- **Persistence**: `@react-native-async-storage/async-storage` for client persistence.

### 4. Constraint Library (Lines to drop into prompts)
- `"Do not change the screen design."`
- `"Preserve existing UI exactly."`
- `"Keep existing [feature] flow intact."`
- `"Do not expose any secrets in the client app."`
- `"Do not introduce new major libraries without asking."`
- `"Do not modify files outside [folder]."`
- `"Do not refactor existing unrelated code."`
- `"All backend schemas and tools MUST strictly match docs/03-tech-stack/TECH-STACK.md."`

---

## 🚫 Common Mistakes to Avoid

- ❌ **Ignoring TECH-STACK.md**: Never write code without reading `docs/03-tech-stack/TECH-STACK.md`.
- ❌ **Direct Commits to Main**: Never code directly on `main` / `master`. Always use feature branches.
- ❌ **Skipping Visual AI Diff**: Never declare UI complete without screenshot comparison against `app-screens/<screen_id>.png`.
- ❌ **Bundling Multiple Features**: Never attempt 3 features in 1 prompt.
- ❌ **Full App Generation**: Never ask for an entire app in a single prompt.
- ❌ **Over-Engineering**: Never add unrequested abstractions, extra helpers, or unrequested libraries.
- ❌ **Unverified Output**: Never declare success without running `tsc` typecheck and linting.

---

## 🎯 The 60-Second Pre-Build Checklist

Before saying "yes" to build a feature, verify:
- [ ] Is the feature defined clearly enough to direct, not script?
- [ ] Are project rules defined in `./AGENTS.md` (via `/init-agents`)?
- [ ] Did the AI inspect `docs/03-tech-stack/TECH-STACK.md` and list it under "What It Read"?
- [ ] Are external library skills/docs checked in `docs/05-external-skills/`?
- [ ] Did the AI create a feature branch (`feature/<name>`)?
- [ ] Did the AI save a detailed plan to `prompts/<task-name>.md` and ask for approval?
- [ ] Will the AI execute the Visual AI Diff Loop (Build ──> Screenshot ──> Compare ──> Refine) against `app-screens/<screen_id>.png`?
- [ ] Are server/client boundaries and secrets handled safely?

*If all eight are yes, approve the plan and let it build!*
