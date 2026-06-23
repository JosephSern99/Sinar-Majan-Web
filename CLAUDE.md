# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Sinar-Majan-Web** is a web application project initialized with the BMAD (Business Modeling and Analysis Design) framework v6.9.0. This is a business-driven collaborative approach to software development that emphasizes structured problem-solving, stakeholder alignment, and artifact-driven planning before implementation.

## Project Structure

```
.
├── _bmad/                    # BMAD framework configuration (managed by installer)
│   ├── config.toml           # Main configuration (regenerated on install, read-only)
│   ├── config.user.toml      # Personal overrides (gitignored)
│   ├── custom/               # Team and personal customizations
│   │   ├── config.toml       # Team overrides (committed)
│   │   └── config.user.toml  # Personal overrides (gitignored)
│   ├── bmm/                  # Business Modeling Module
│   │   └── config.yaml       # Planning artifact configuration
│   ├── core/                 # Core module configuration
│   ├── scripts/              # Utility scripts (memlog.py, etc.)
│   └── _config/              # Framework manifests and help
├── _bmad-output/             # Generated artifacts (planning, implementation)
├── docs/                     # Project knowledge and documentation
└── CLAUDE.md                 # This file
```

## BMAD Framework & Multi-Agent Collaboration

The project is configured with six specialized agent roles for collaborative development:

- **Mary (Business Analyst)** — Porter's strategic rigor, grounds findings in evidence, represents all stakeholder voices
- **Paige (Technical Writer)** — Masters documentation (CommonMark, DITA, OpenAPI), turns complexity into accessible prose
- **John (Product Manager)** — Jobs-to-be-Done focus, user value first, clarifies requirements through sharp questioning
- **Sally (UX Designer)** — Balances empathy with edge-case rigor, evolves designs through feedback and user research
- **Winston (System Architect)** — Favors boring stable technology, ties decisions to business value
- **Amelia (Senior Software Engineer)** — Test-first discipline (red/green/refactor), precision-focused implementation

### Using BMAD Agents

To invoke these agents, reference them by their module and name (e.g., "ask Mary to analyze this requirement"). They provide perspective aligned with their domain and can collaborate on planning artifacts, PRDs, technical designs, and implementation strategies.

## Memlog System

The project uses a chronological work log (`_bmad-output/.memlog.md`) to track the history of decisions, ideas, insights, and events across sessions. Each entry is append-only and immutable.

**Entry types include**: `idea`, `insight`, `question`, `decision`, `direction`, `assumption`, `gap`, `note`, `event`

Entries follow the format:
```
- (idea) user intuition: let users try with sample data before signup
- (insight) real data creates both "scary numbers" anxiety AND demonstrates value
- (decision) lead with one pre-categorized sample account; defer multi-account import
```

The memlog is NOT a deliverable—downstream artifacts (briefs, PRDs, design docs) are *derived* from it on demand.

## Key Directories

- **`_bmad-output/planning-artifacts/`** — Where planning documents, requirements, and design specifications are saved
- **`_bmad-output/implementation-artifacts/`** — Where implementation work, code reviews, and technical decisions are tracked
- **`docs/`** — Project documentation, knowledge base, and user-facing information

## Project Configuration

**Main config file**: `_bmad/config.toml` (do not edit directly; re-run installer to update)

**To customize durably**:
- **Team overrides** (`_bmad/custom/config.toml`) — Committed to repo, applies to all developers
- **Personal overrides** (`_bmad/custom/config.user.toml`) — Gitignored, personal preferences only

Examples of customization: override agent descriptions, add new agent roles, change output folder paths.

## Development Workflow

Since this is a newly initialized project with no source code yet:

1. **Establish project foundation** through BMAD planning:
   - Define business goals, user needs, and success criteria with the team
   - Use Mary (Analyst) to structure requirements
   - Use John (PM) to clarify user value proposition
   - Use Sally (UX Designer) for user flows and interaction design
   - Use Winston (Architect) for technology choices

2. **Document decisions** as they emerge:
   - Record in memlog as ideas/insights/decisions
   - Develop planning artifacts in `_bmad-output/planning-artifacts/`

3. **Create implementation artifacts**:
   - As coding begins, track technical decisions in `_bmad-output/implementation-artifacts/`
   - Store implementation guides, code patterns, and architecture notes

4. **Publish project knowledge**:
   - Maintain `docs/` as the source of truth for ongoing project knowledge
   - Link from there to BMAD artifacts for traceability

## No Build/Test Commands Yet

This project has not yet established source code, build systems, linting, or testing infrastructure. These will emerge from the planning phase and BMAD-driven design decisions.

When the technology stack is chosen and development begins, this CLAUDE.md should be updated with:
- Build and run commands
- Test execution (unit, integration, e2e)
- Linting and code style enforcement
- Deployment and staging environment commands
- Project-specific code patterns and conventions

## Further Reading

- **BMAD Installer**: Configures and manages the framework; re-run to update answers/defaults
- **Agent configuration**: See `_bmad/config.toml` under `[agents.*]` to understand each role's perspective
- **Memlog script**: `_bmad/scripts/memlog.py` provides chronological work tracking with atomic writes
