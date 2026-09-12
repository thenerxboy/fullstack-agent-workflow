---
name: tech-stack
description: Universal AI agent skill for feature-first stack decomposition, 8-layer monorepo infrastructure evaluation, and dual-artifact generation of docs/03-tech-stack/app-features.md and docs/03-tech-stack/TECH-STACK.md.
---

# ⚡ Tech Stack & Monorepo Infrastructure Skill (`tech-stack`)

Universal AI agent skill for decomposing features derived from PRD research into explicit Turborepo monorepo packages, backend client schemas, and infrastructure layers.

---

## 📁 Document Path & Fallback Protocol

Agents MUST search for input context files and write output artifacts using this prioritized path resolution hierarchy:

| Document / Asset | Primary Input / Output Path | Fallback Path 1 | Fallback Path 2 |
| :--- | :--- | :--- | :--- |
| **Ingested App Brief** | `docs/01-app-brief/APP-BRIEF.md` | `docs/APP-BRIEF.md` | `./APP-BRIEF.md` |
| **Ingested System PRD** | `docs/02-prd-research/ARCH-PRD.md` | `docs/ARCH-PRD.md` | `./ARCH-PRD.md` |
| **Output Artifact 1 (Features)** | `docs/03-tech-stack/app-features.md` | `docs/app-features.md` | `./app-features.md` |
| **Output Artifact 2 (Tech Stack)** | `docs/03-tech-stack/TECH-STACK.md` | `docs/TECH-STACK.md` | `./TECH-STACK.md` |

---

## ⚡ Shortcut Commands & Help Triggers

| Command / Shortcut | Alias Flag | Action / Behavior |
| :--- | :--- | :--- |
| **`/tech-stack-help`** | `/tech-stack --help`, `/techstack-help` | Displays complete Phase 3 manual for 8-layer monorepo infrastructure evaluation. |
| **`/tech-stack-shortcuts`** | `/tech-stack --shortcuts` | Fast cheat-sheet list of tech-stack triggers. |
| **`tech-stack`** | `/tech-stack` | Launches Phase 3 (Feature-First Stack Decomposition & Monorepo Evaluation). |

---

## 📐 Monorepo Layer Architecture (8 Core Layers)

1. **Layer 1: Mobile Surface (`apps/native`)**: Expo Router, NativeWind/Tailwind, React Native Haptics, Just-in-Time permissions.
2. **Layer 2: Web Surface (`apps/web`)**: Next.js App Router, dynamic OpenGraph, web legal triad (`/privacy`, `/terms`, `/support`), account deletion.
3. **Layer 3: Design Tokens & Primitives (`packages/ui`)**: Shared cross-platform Tailwind primitives, custom icons, typography rules.
4. **Layer 4: Data Engine & Schemas (`packages/db`)**: Convex, Supabase, or InsForge database client, mutations, queries, and type schemas.
5. **Layer 5: Auth & Session Management (`packages/auth`)**: Clerk or Supabase Auth session helpers across mobile and web.
6. **Layer 6: State & Telemetry (`packages/analytics`)**: PostHog or Sentry error boundary logging and event tracking boundaries.
7. **Layer 7: Storage & Media Pipelines (`packages/storage`)**: Uploadthing or Supabase Storage for video, image, and asset uploads.
8. **Layer 8: Monorepo Infrastructure Tooling**: Turborepo `turbo.json`, pnpm workspaces, ESLint, TypeScript config.

---

- **Artifact 2 (`docs/03-tech-stack/TECH-STACK.md`)**: Full technical specification, DB schema proto definitions, package.json dependencies, and environment variable matrix.

---

## 🛡️ Pre-Flight Dependency & Version Audit Gate
Before locking any framework or package dependency (Expo SDK, React Native, Convex, Clerk, Supabase, NativeWind):
1. **Universal Proactive Executive Expert Mandate (UNRESTRICTED Tech Stack Proactivity)**: DO NOT act as a passive order-taker in Phase 3. Proactively conduct live web searches (`search_web`) for current framework releases, SDK compatibility matrices (e.g. matching Expo SDK to user's mobile device), package deprecations, security advisories, database indexing best practices, and monorepo layer boundaries BEFORE writing package specs.
2. **Real-Time Compatibility Audit**: Audit actual runtime SDK version compatibility (e.g. checking live Expo SDK matching user's mobile device) and search `docs/05-external-skills/` for cached documentation.
3. **Just-in-Time Skill Mapping**: Ensure all required external framework skills/docs are mapped in `docs/05-external-skills/` before generating package installation instructions.
4. **Universal Zero-Token Follow-Up Quality Gate**: On EVERY follow-up generation turn, internally audit draft responses against Turborepo layer boundaries, DB client schemas, and package rules before emitting output.
5. **Phase Boundary & Plan Isolation Rule**: Plan creation (`prompts/*.md`) and git commit proposals are STRICTLY RESTRICTED to Phase 5 Build (`fullstack-agent`). Phase 3 (`tech-stack`) MUST NOT generate `prompts/*.md` implementation plans or trigger code execution.
6. **Ecosystem Skill Suite Recommendation (`expo/skills`)**: When selecting Expo or major framework ecosystems, explicitly recommend `npx skills add expo/skills` (or ecosystem skill suites) in `TECH-STACK.md` so Phase 5 coding agents can selectively extract sub-skills and run skill-driven dependency installation (`npx expo install`).
