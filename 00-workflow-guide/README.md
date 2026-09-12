# 🚀 Onboarding Sitemap & Workflow Guide Skill (`start-workflow`)

Universal, agent-agnostic onboarding guide, phase navigator, and master shortcut directory for the `fullstack-agent-workflow` suite.

---

## ⚡ Shortcut Commands & Trigger Flags

- **`/start-workflow`**: Executes the **Git Submodule Pre-Flight Audit Gate**, creates Base `./AGENTS.md` Shell (if missing), and launches the interactive 5-Phase onboarding sitemap.
- **`/help`** *(alias: `/workflow-help`)*: Master directory of ALL commands across all 5 workflow skills.
- **`/shortcuts`** *(alias: `/workflow-shortcuts`)*: Fast cheat-sheet table of all shortcuts.

---

## 🛡️ Pre-Flight Submodule Audit & Base AGENTS.md Shell Generator

1. **Git Submodule Audit & Utility Skill Verification**: Ensures `.agents/skills/fullstack-agent-workflow` is registered as a Git Submodule and verifies `find-skills` (`npx skills add vercel-labs/skills`) is installed as the universal external skill discovery engine.
2. **Base `./AGENTS.md` Shell Generator**: Automatically creates a lightweight, 20-line `./AGENTS.md` shell at project root if missing, establishing:
   - **Minimal Directory-Based Skill Router**: Searches `.agents/skills/` without enumerating skills line-by-line, keeping `AGENTS.md` lean. Uses `find-skills` to discover third-party skills on demand.
   - **Proactive Executive Expert Mandate**: Enforces Apple HIG, Material 3, WCAG 2.2 accessibility ($\ge 44\times44\text{pt}$ touch targets), legal compliance triad (`/privacy`, `/terms`, `/support`, account deletion), and account toggles.
   - **Informational Query vs. Execution Task Gate (`Fast-Path Answer Mandate`)**: Direct text answers for simple informational questions without planning mode or code execution loops.
   - **Surface Target Isolation Protocol**: Mobile native targets (`apps/native`) use `adb`/`xcrun`; web targets (`apps/web`) use Playwright.
   - **Interactive Learning Clarification Mandate**: Displays Interactive Learning Menus for multi-engine or ambiguous requests.

---

## 🚀 Installation & Usage (1 Command Per Line)

#### Step 1: Add the workflow framework as a Git Submodule & install skill discovery gateway
```bash
git submodule add https://github.com/thenerxboy/fullstack-agent-workflow.git .agents/skills/fullstack-agent-workflow
npx skills add vercel-labs/skills
```

#### Step 2: Launch the interactive guide in your AI assistant
```markdown
/start-workflow
```

#### Step 3: Access master help or shortcuts at any time
```markdown
/help
```
```markdown
/shortcuts
```

---

## 📄 License

MIT License. Free for open-source and commercial software development.
