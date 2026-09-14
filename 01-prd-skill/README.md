# 🚀 Product Ideation & PRD Architecture Skill (`prd-skill`)

Universal, agent-agnostic AI skill combining 20-idea market research, creative vibe brief drafting, product positioning, ASO keyword research, competitor audits, and 15-section system PRD architecture into `docs/01-project-brief/PROJECT-BRIEF.md` (fallback `APP-BRIEF.md`) and `docs/02-prd-research/SYSTEM-PRD.md` (fallback `ARCH-PRD.md`).

---

## ⚡ Shortcut Commands & Trigger Flags

You can invoke `prd-skill` at any stage using these shortcut commands:

- **`/project-idea`** *(aliases: `/app-idea`, `/idea`)*: Launches **Phase 0** (Researches market trends, YouTube resources, competitor gaps, and pitches **20 data-backed project ideas**).
- **`/project-brief`** *(aliases: `/app-brief`, `/brief`, `/vibe-brief`)*: Launches **Phase 1** (Creative Vibe Jamming for brand identity, mascot quirks, sensory personality, copy tone, and `PROJECT-BRIEF.md`).
- **`/prd`**: Launches **Phase 2** (Ingests `PROJECT-BRIEF.md` or `APP-BRIEF.md`, executes the 8-question discovery loop, locks V1 feature scope, and generates `SYSTEM-PRD.md`).

---

## 🛡️ Core Operating Principles & Universal Guardrails

- **Universal Proactive Executive Expert Mandate**: NEVER act as a passive order-taker. Proactively conduct web searches (`search_web`) and audit/inject universal best practices, ergonomics, legal/store compliance, accessibility, security, and retention mechanisms across all phases and screens.
- **Phase Boundary & Plan Isolation Rule**: Restricts implementation plan creation (`prompts/*.md`) and git commit proposals exclusively to Phase 5 Build (`fullstack-agent`). Phase 0–2 skills MUST NOT generate implementation plans or execute code.
- **Pure Product Strategy Protocol**: Focuses 100% on product positioning, target audience, brand voice/personality, V1 feature scoping, ASO keywords, user flows, copy, and PRD requirements.
- **Hand-Off to Stage 4 (`ui-skill`)**: Hand-off to Stage 4 for precise HEX color selections, Google Fonts pairing previews, asset moodboarding, and component styling.

---

## 🔄 Sequential Phase Progression & File Proposals
- **Phase 0 ──> Phase 1**: When you select a project concept in `/project-idea`, the agent automatically proposes launching `/project-brief`.
- **Phase 1 ──> File Generation**: When creative jamming is complete, the agent proposes generating `docs/01-project-brief/PROJECT-BRIEF.md`.
- **Phase 1 ──> Phase 2**: Upon approving `PROJECT-BRIEF.md`, the agent automatically proposes launching `/prd`.
- **Phase 2 ──> File Generation**: When the 8-question discovery loop is complete, the agent proposes generating `docs/02-prd-research/SYSTEM-PRD.md`.

---

## 🚀 Installation & Usage (1 Command Per Line)

#### Step 1: Add the workflow framework as a Git Submodule
```bash
git submodule add https://github.com/thenerxboy/fullstack-agent-workflow.git .agents/skills/fullstack-agent-workflow
```
*Links the fullstack-agent-workflow skill suite into `.agents/skills/` as a clean submodule.*

#### Step 2: Invoke the Skill in your AI assistant
```markdown
/project-idea
```
*Launches Phase 0 to research market trends and pitch 20 data-backed project ideas.*

```markdown
/project-brief
```
*Launches Phase 1 to jam on brand identity, mascot voice, and create PROJECT-BRIEF.md.*

```markdown
/prd
```
*Launches Phase 2 to execute the 8-question discovery loop and generate SYSTEM-PRD.md.*

---

## 📄 License

MIT License. Free for open-source and commercial software development.
