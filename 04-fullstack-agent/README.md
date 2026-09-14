# 💻 `fullstack-agent`

Universal AI Agent Coding Skill based on **Vibe Engineering** and **Practical Vibe Coding** principles for building production-grade mobile and web applications inside a Turborepo monorepo.

---

### 📖 Overview

`fullstack-agent` equips AI coding agents with procedural rules, autonomous project-tailored `AGENTS.md` generation (`/init-agents`), external skill/doc mapping engine (`docs/05-external-skills/`), mandatory `TECH-STACK.md` ingestion gates, feature-branch & CodeRabbit PR workflows, 8-step execution loops, 10-step build-in-order roadmaps, and hardcoded cheatsheets to build software feature-by-feature without unwanted rewrites, hallucinated imports, or security leaks.

---

### ⚡ Key Features & Operational Guardrails

- **Informational Query vs. Execution Task Gate (`Fast-Path Answer Mandate`)**: Direct text answers for simple informational or capability questions (*"Can you access my emulator?"*) without launching planning mode, script loops, or unnecessary code execution.
- **Surface Target Isolation Protocol & Hardcoded Emulator Rules**:
  - **`apps/native` (Expo Router)**: Strictly requires native mobile capture CLI commands (`adb exec-out screencap` for Android, `xcrun simctl io booted screenshot` for iOS) or physical handset fallback. Web `--web` Playwright checks are forbidden for native mobile screens.
  - **`apps/web` (Next.js)**: Executes Playwright web browser screenshot capture against `http://localhost:3000`.
- **Feature-Branch & CodeRabbit PR Review Protocol**: 7-step isolated Git lifecycle (Feature Branch $\rightarrow$ Build & Test $\rightarrow$ Stage & Commit $\rightarrow$ Push Branch $\rightarrow$ CodeRabbit PR AI Review $\rightarrow$ Merge to Main $\rightarrow$ Sync Local Main).
- **Pixel-Perfect Visual AI Diff Micro-Loop (Module 6)**: 4-step visual verification loop (Build $\rightarrow$ Screenshot $\rightarrow$ Compare $\rightarrow$ Refine) using `docs/04-ui-design/ui-screens/<screen_id>.png` (fallback `docs/04-ui-design/app-screens/<screen_id>.png` or `ui-screens/<screen_id>.png`) as target reference and a 10-Point Multimodal Comparison Matrix.
- **Mandatory `TECH-STACK.md` Ingestion Gate**: Compels agents to inspect `docs/03-tech-stack/TECH-STACK.md` before planning and record proof under `## 2. What It Read` in `prompts/<task-name>.md`.
- **Autonomous `AGENTS.md` & Minimum Environment Generator (`/init-agents`)**: Ingests `docs/` artifacts, generates a lean project-tailored `./AGENTS.md` at root using directory-based skill discovery (`.agents/skills/`) without enumerating skills line-by-line, verifies `find-skills` installation (`npx skills add vercel-labs/skills`), secures `.gitignore`, and sets up starting `.env.example`.
- **Progressive & Selective Skill Unlocking Engine (`docs/05-external-skills/`)**: Uses `find-skills` to discover third-party skills on demand and installs **ONLY task-relevant sub-skills Just-in-Time**, unlocking `.env` keys and framework docs as features progress.
- **8-Step Vibe Engineering Loop**: Read rules & tech stack $\rightarrow$ Accept focused prompt $\rightarrow$ Write implementation plan to `prompts/<task-name>.md` $\rightarrow$ Human review $\rightarrow$ Human approval ("yes") $\rightarrow$ Implement code on branch $\rightarrow$ Run Visual AI Diff Loop $\rightarrow$ CodeRabbit PR & Main Sync.
- **10-Step Build-in-Order Roadmap**: Design System ──> Core UI Screens ──> Auth (Clerk) ──> DB Schemas ──> Seed Data ──> Read Path ──> Core Engine ──> Intelligence ──> Automation ──> Deploy, Polish & Harden.

---

### 🚀 Installation & Usage (1 Command Per Line)

#### Step 1: Add the workflow framework as a Git Submodule
```bash
git submodule add https://github.com/thenerxboy/fullstack-agent-workflow.git .agents/skills/fullstack-agent-workflow
```
*Links the fullstack-agent-workflow skill suite into `.agents/skills/` as a clean submodule.*

#### Step 2: Generate your project-tailored AGENTS.md file
```markdown
/init-agents
```
*Autonomous Setup: Ingests completed docs/ artifacts to generate a project-tailored ./AGENTS.md at root.*

#### Step 3: View operational manuals and shortcuts
```markdown
/fullstack-agent-help
```
*Displays the complete Phase 5 manual & Vibe Engineering operational guide.*

```markdown
/fullstack-agent-shortcuts
```
*Displays fast cheat-sheet table of all coding agent shortcuts.*

#### Step 4: Execute Vibe Engineering build loop for a feature
```markdown
fullstack-agent
```
*Executes the 8-step build loop, writes implementation plan to prompts/<task>.md, and runs Visual AI Diff.*

---

### 📄 License

MIT License. Free for open-source and commercial software development.
