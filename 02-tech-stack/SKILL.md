---
name: tech-stack
description: Universal AI agent skill for 4 Universal Target Profiles (Mobile, Web Apps, Landing Pages, Monorepos), free resource tier integration (Vercel, Convex, Supabase, Clerk, Tailwind), and generating docs/03-tech-stack/TECH-STACK.md.
---

# ⚡ Tech Stack & Universal Architecture Skill (`tech-stack`)

Universal AI agent skill for evaluating 4 Universal Target Profiles (Standalone Mobile App, Standalone Web App, Standalone Landing Page, or Full-Stack Monorepo), feature-first stack decomposition, free resource tier integration (Vercel, Convex, Supabase, Clerk, Tailwind), and generating `docs/03-tech-stack/app-features.md` and `docs/03-tech-stack/TECH-STACK.md`.

---

## 📁 Document Path & Fallback Protocol

Agents MUST search for input context files and write output artifacts using this prioritized path resolution hierarchy:

| Document / Asset | Primary Input / Output Path | Fallback Path 1 | Fallback Path 2 |
| :--- | :--- | :--- | :--- |
| **Ingested Project Brief** | `docs/01-project-brief/PROJECT-BRIEF.md` | `docs/01-app-brief/APP-BRIEF.md` | `docs/PROJECT-BRIEF.md` |
| **Ingested System PRD** | `docs/02-prd-research/SYSTEM-PRD.md` | `docs/02-prd-research/ARCH-PRD.md` | `./SYSTEM-PRD.md` |
| **Output Artifact 1 (Features)** | `docs/03-tech-stack/project-features.md` | `docs/03-tech-stack/app-features.md` | `./project-features.md` |
| **Output Artifact 2 (Tech Stack)** | `docs/03-tech-stack/TECH-STACK.md` | `docs/TECH-STACK.md` | `./TECH-STACK.md` |

---

## ⚡ Shortcut Commands & Help Triggers

| Command / Shortcut | Alias Flag | Action / Behavior |
| :--- | :--- | :--- |
| **`/tech-stack-help`** | `/tech-stack --help`, `/techstack-help` | Displays complete Phase 3 manual for 4 Universal Target Profiles and 8-layer monorepo infrastructure evaluation. |
| **`/tech-stack-shortcuts`** | `/tech-stack --shortcuts` | Fast cheat-sheet list of tech-stack triggers. |
| **`tech-stack`** | `/tech-stack` | Launches Phase 3 (Feature-First Stack Decomposition & Target Profile Evaluation). |

---

## 🌐 4 Universal App Target Profiles

1. **Profile 1: Standalone Mobile App** (`./` or `apps/native`):
   - **Stack**: Expo (React Native), NativeWind/Tailwind, Expo Router, AsyncStorage.
   - **Best For**: Pure mobile application targeting iOS & Android app stores without a web app.

2. **Profile 2: Standalone Web App** (`./`):
   - **Stack**: Next.js App Router, Tailwind CSS, shadcn/ui primitives, Convex or Supabase PostgreSQL DB, Clerk Auth.
   - **Best For**: Dedicated web applications, SaaS dashboards, or browser-based tools hosted free on Vercel.

3. **Profile 3: Standalone Landing Page** (`./`):
   - **Stack**: Next.js App Router, Tailwind CSS, Lucide icons, Framer Motion, free Vercel hosting.
   - **Best For**: Product marketing sites, waitlists, app landing pages, and lead generation.

4. **Profile 4: Full-Stack Monorepo** (`apps/native` + `apps/web` + `packages/`):
   - **Stack**: Expo Mobile (`apps/native`), Next.js Web (`apps/web`), Shared UI (`packages/ui`), DB (`packages/db`), Auth (`packages/auth`).
   - **Best For**: Cross-platform apps launching both mobile apps and web storefronts simultaneously.

---

## 💡 Non-Technical Interactive Stack Explanation Engine (Chat Output — Zero `AGENTS.md` Bloat)

Whenever the agent evaluates or proposes a tech stack (even when `SYSTEM-PRD.md` / `ARCH-PRD.md` and `TECH-STACK.md` are present), it **MUST present a beginner-friendly 3-part chat briefing**:

1. **What We Are Building**: Plain-English explanation of the selected Target Profile (e.g. *"Standalone Next.js Web App"* or *"Expo Mobile App"*).
2. **Free Resources Used**: Transparent list of free-tier services used (Vercel free hosting, Convex free tier, Supabase free tier, Clerk free tier, Tailwind CSS).
3. **How to Run Commands**: Exact 1-liner terminal commands (`npm run dev` or `npx expo start`) with zero pathing errors.

> ⚠️ **Zero `AGENTS.md` Bloat Rule**: This non-technical educational briefing is rendered in chat and saved in `docs/03-tech-stack/TECH-STACK.md`. `AGENTS.md` only stores a 2-line target profile pointer, keeping `AGENTS.md` lean (~25–30 lines).

---

## 🛡️ Pre-Flight Dependency & Version Audit Gate
Before locking any framework or package dependency (Expo SDK, Next.js, Convex, Clerk, Supabase, NativeWind):
1. **Universal Proactive Executive Expert Mandate (UNRESTRICTED Tech Stack Proactivity)**: NEVER act as a passive order-taker in Phase 3. Proactively conduct live web searches (`search_web`) for current framework releases, SDK compatibility matrices, package deprecations, security advisories, database indexing best practices, and layer boundaries BEFORE writing package specs.
2. **Real-Time Compatibility Audit**: Audit actual runtime SDK version compatibility and search `docs/05-external-skills/` for cached documentation.
3. **Just-in-Time Skill Mapping**: Ensure all required external framework skills/docs are mapped in `docs/05-external-skills/` before generating package installation instructions.
4. **Universal Zero-Token Follow-Up Quality Gate**: On EVERY follow-up generation turn, internally audit draft responses against layer boundaries, DB client schemas, and package rules before emitting output.
5. **Phase Boundary & Plan Isolation Rule**: Plan creation (`prompts/*.md`) and git commit proposals are STRICTLY RESTRICTED to Phase 5 Build (`fullstack-agent`). Phase 3 (`tech-stack`) MUST NOT generate `prompts/*.md` implementation plans or trigger code execution.
6. **Ecosystem Skill Suite Recommendation (`expo/skills`)**: When selecting Expo or major framework ecosystems, explicitly recommend `npx skills add expo/skills` (or ecosystem skill suites) in `TECH-STACK.md` so Phase 5 coding agents can selectively extract sub-skills and run skill-driven dependency installation (`npx expo install`).
