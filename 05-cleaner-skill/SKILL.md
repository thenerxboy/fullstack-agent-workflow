---
name: repo-cleaner
description: Safe, interactive workspace repository cleanup skill (/clean, /repo-clean). Scans for temporary build bloat, old verification screenshots, superseded visual drafts, and dangling scratch files with strict dry-run audit gates and a protected never-touch list.
---

# 🧹 Workspace Repository Cleanup Skill (`repo-cleaner`)

Universal AI agent skill designed to safely audit and clean redundant build bloat, temporary verification logs, old visual diff screenshots, and superseded layout drafts from your project workspace without touching vital code or documentation.

> [!IMPORTANT]
> **SAFETY MANDATE**: The agent **MUST ALWAYS execute in Dry-Run Audit Mode first**. It is STRICTLY FORBIDDEN to delete any workspace files without displaying an **Audit Deletion Proposal Table** and obtaining explicit user approval ("yes", "approved", "clean").

---

## ⚡ Shortcut Commands & Trigger Flags

| Command / Shortcut | Alias Flag | Action / Behavior |
| :--- | :--- | :--- |
| **`/clean`** | `/repo-clean`, `/clean-workspace` | Runs 4-category workspace cleanup audit and presents interactive deletion proposal table. |
| **`/clean-help`** | `/repo-cleaner --help` | Displays manual, safety protocols, cleanable file categories, and exclusion rules. |
| **`/clean-shortcuts`** | `/repo-cleaner --shortcuts` | Fast reference list of cleanup trigger flags. |

---

## 🛡️ Strict Safety Protocol & Protected Exclusion List

### 🛑 NEVER-TOUCH EXCLUSION LIST (100% Protected)
The agent MUST NEVER suggest or delete files matching any of these patterns:
- **Application Source Code**: `apps/**/*`, `packages/**/*`, `src/**/*`, `components/**/*`, `app/**/*`, `pages/**/*`
- **Database & Schemas**: `packages/db/**/*`, `schema.ts`, `migrations/**/*`, `seed.ts`
- **Environment & Secret Files**: `.env`, `.env.local`, `.env.development`, `.env.production`
- **Configuration Files**: `package.json`, `tsconfig.json`, `turbo.json`, `app.json`, `next.config.js`
- **Authoritative Docs & Memory Files**: `docs/01-app-brief/`, `docs/02-prd-research/`, `docs/03-tech-stack/`, `docs/04-ui-design/DESIGN-MEMORY.md`, `docs/05-external-skills/`, `MEMORY.md`, `./AGENTS.md`
- **Active UI Assets**: `app-screens/prompts/*.md`, active `app-screens/*.png`
- **Project Design Systems**: `app_theme.json`, `design_catalog.json`

---

## 📂 4 Safe Cleanable File Categories

| Category | File Target Description | Safe Clean Rationale |
| :--- | :--- | :--- |
| **Category 1: Old Verification Screenshots** | `docs/04-ui-design/verification/*-actual.png` | Temporary screenshots generated during past Visual AI Diff loops. Safe to remove once diff passes. |
| **Category 2: Superseded Visual Drafts** | `app-screens/*_v1.png`, `app-screens/*_old.png` | Outdated layout screenshots superseded by current approved `.png` files. |
| **Category 3: Temporary Build & Package Cache** | `.turbo/cache/*`, `node_modules/.cache/*`, `.expo/web-build/*` | Standard temporary build artifact bloat. Safely regenerated on next build. |
| **Category 4: Dangling Scratch & Log Files** | `scratch/*`, `tmp/*`, `*.log` (excluding system logs) | Temporary debug output and one-off scripts created during troubleshooting. |

---

## 🔄 3-Step Execution Workflow

### Step 1: Workspace Scan & Dry-Run Audit
1. Inspect workspace root for candidate files in Categories 1–4.
2. Calculate total reclaimable disk space.
3. Validate every candidate file against the **Never-Touch Exclusion List**.

### Step 2: Interactive Proposal Table Output
Display the audit results directly in chat using this exact blueprint:

```markdown
🔍 **Workspace Cleanup Audit (Dry-Run Mode)**

I scanned your project workspace and identified **[N] temporary files** ([TOTAL_SIZE]) that can be safely cleaned:

| Category | File Path | File Size | Recommended Action |
| :--- | :--- | :--- | :--- |
| 📸 Category 1 | `docs/04-ui-design/verification/home-actual.png` | 420 KB | Delete (Old AI Diff Screenshot) |
| 🖼️ Category 2 | `app-screens/home_v1.png` | 850 KB | Delete (Superseded by home.png) |
| 🧹 Category 3 | `.turbo/cache/` | 14.2 MB | Clear Cache |

---

### 🛡️ Safety Verification:
- [x] ZERO application code files will be touched (`apps/`, `packages/`).
- [x] ZERO documentation or PRD files will be touched (`docs/`).
- [x] ZERO environment or secret keys will be touched (`.env*`).

**Do you approve deleting these files to free space?** (Type "yes" or "clean" to proceed).
```

### Step 3: Explicit User Approval Gate & Execution
1. Wait for explicit user approval ("yes", "approved", "clean").
2. Execute file removals safely using standard terminal commands or script.
3. Report final reclaimed space summary to user.
