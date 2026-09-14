# 🧹 Workspace Repository Cleanup Skill (`repo-cleaner`)

Universal, agent-agnostic AI workspace cleanup skill designed to safely audit and remove redundant build bloat, old verification diff screenshots, and superseded layout drafts with a mandatory interactive dry-run approval gate.

---

## ⚡ Shortcut Commands & Trigger Flags

- **`/clean`**: Launches 4-category workspace cleanup audit and presents interactive deletion proposal table.
- **`/clean-help`**: Displays complete manual, safety protocols, cleanable file categories, and exclusion rules.
- **`/clean-shortcuts`**: Fast reference list of cleanup trigger flags.

---

## 🛡️ Strict Safety Protocol & Protected Exclusion List

- **100% Protected Never-Touch List**: Application source code (`apps/`, `packages/`), database schemas, environment keys (`.env*`), configuration files (`package.json`, `turbo.json`), memory files (`MEMORY.md`, `AGENTS.md`), authoritative docs (`docs/`), active UI prompts (`ui-screens/prompts/`, `app-screens/prompts/`), and design tokens (`project_theme.json`, `app_theme.json`, `design_catalog.json`).
- **Interactive Dry-Run Approval Gate**: Mandatory 2-step process (Scan & Audit Proposal Table $\rightarrow$ Wait for explicit user "yes" approval before deleting anything).

---

## 🚀 Installation & Usage (1 Command Per Line)

#### Step 1: Add the workflow framework as a Git Submodule
```bash
git submodule add https://github.com/thenerxboy/fullstack-agent-workflow.git .agents/skills/fullstack-agent-workflow
```

#### Step 2: Invoke the Skill in your AI assistant
```markdown
/clean
```
*Launches workspace cleanup audit and displays reclaimable space table.*

---

## 📄 License

MIT License. Free for open-source and commercial software development.
