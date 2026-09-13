# 🛠️ Production Tech Stack & Architecture Skill (`tech-stack`)

Universal, agent-agnostic AI skill for feature-first stack decomposition, 8-layer monorepo infrastructure evaluation, and dual-artifact generation of `docs/03-tech-stack/app-features.md` and `docs/03-tech-stack/TECH-STACK.md`.

---

## ⚡ Features & Operational Guardrails

- **4 Universal Target Profiles**: Evaluates and structures Standalone Mobile Apps (Expo), Standalone Web Apps (Next.js), Standalone Landing Pages (Next.js), or Full-Stack Monorepos (Expo + Next.js + Shared Packages).
- **Non-Technical Interactive Stack Explanation Engine**: Outputs a beginner-friendly 3-part chat briefing (Target Profile, Free Tier Resources used like Vercel/Convex/Supabase/Clerk/Tailwind, and 1-liner run commands) with zero `AGENTS.md` bloat.
- **Phase 1 (Feature-by-Feature Stack Decomposition)**: Extracts every V1 feature from `ARCH-PRD.md` and maps exact npm dependencies, surface targets, selection rationales, integration strategies, and step-by-step implementation logic into `docs/03-tech-stack/app-features.md`.
- **Phase 2 (8 Sequential Infrastructure Layers)**: Guides you through 8 architectural layers quoting `ARCH-PRD.md` and asking 1–2 specific questions per layer.
- **Pre-Flight Dependency & Real-Time Version Audit Gate**: Conducts real-time web searches (`search_web`), recommends ecosystem skill suites (`npx skills add expo/skills`), and inspects `docs/05-external-skills/` before locking package versions.
- **Phase Boundary & Plan Isolation Rule**: Restricts implementation plan creation (`prompts/*.md`) and git commit proposals exclusively to Phase 5 Build (`fullstack-agent`). Phase 3 (`tech-stack`) MUST NOT generate implementation plans or execute code.
- **Dual-Artifact Delivery**: Generates both `docs/03-tech-stack/app-features.md` and `docs/03-tech-stack/TECH-STACK.md`.

---

## 🚀 Installation & Usage (1 Command Per Line)

#### Step 1: Add the workflow framework as a Git Submodule
```bash
git submodule add https://github.com/thenerxboy/fullstack-agent-workflow.git .agents/skills/fullstack-agent-workflow
```
*Links the fullstack-agent-workflow skill suite into `.agents/skills/` as a clean submodule.*

#### Step 2: Invoke the Skill in your AI assistant
```markdown
tech-stack
```
*Launches Phase 3 to evaluate 8-layer monorepo infrastructure and generate app-features.md & TECH-STACK.md.*

---

## 📄 License

MIT License. Free for open-source and commercial software development.
