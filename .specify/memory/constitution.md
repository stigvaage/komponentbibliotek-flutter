<!--
  Sync Impact Report
  ==================
  Version change: (new) → 1.0.0
  Modified principles: N/A (initial ratification)
  Added sections:
    - Core Principles (7 principles)
    - Technology Stack & Constraints
    - Development Workflow
    - Governance
  Removed sections: None
  Templates requiring updates:
    - .specify/templates/plan-template.md — ✅ no changes needed (Constitution Check is dynamic)
    - .specify/templates/spec-template.md — ✅ no changes needed (generic template)
    - .specify/templates/tasks-template.md — ✅ no changes needed (generic template)
    - .specify/templates/checklist-template.md — ✅ no changes needed (generic template)
    - .specify/templates/agent-file-template.md — ✅ no changes needed (generic template)
  Follow-up TODOs: None
-->

# komponentbibliotek.flutter Constitution

## Core Principles

### I. Designsystemet Fidelity

Every component, token, and state in this library MUST faithfully
replicate the Norwegian designsystemet.no specification. Visual
appearance, interaction behavior, and state management MUST match
the reference implementation. Deviations are only permitted when
Flutter platform constraints make exact replication technically
impossible, and such deviations MUST be documented with rationale.

### II. Token-Driven Architecture

All visual properties — colors, typography, spacing, border radii,
elevation, opacity — MUST be expressed as design tokens. No
component may hardcode visual values. Tokens MUST be sourced from
designsystemet.no definitions and generated via the designsystemet
CLI when possible. This ensures theme consistency and enables
runtime theme switching.

### III. Theme Portability

Custom themes created in designsystemet.no MUST be importable and
convertible into a working Flutter `ThemeData` (and
`ThemeExtension`) configuration. The conversion pipeline MUST
preserve all token categories (color, typography, spacing,
component-specific tokens). A developer MUST be able to apply an
imported theme to an existing Flutter app without modifying the
library source code.

### IV. CLI-First Tooling

The designsystemet CLI MUST be utilized for token generation, theme
export, validation, and any other operation it supports. Build
scripts, CI pipelines, and developer workflows MUST prefer CLI
commands over manual or custom implementations. When the CLI does
not cover a required operation, the gap MUST be documented and a
custom tool SHOULD follow the CLI's conventions for input/output
format.

### V. Flutter-Idiomatic API

The component library MUST follow Flutter conventions:
- Components are `Widget` subclasses composable in the widget tree.
- Theming uses `ThemeExtension`, `InheritedWidget`, or equivalent
  Flutter-native patterns.
- Public API surfaces follow Effective Dart guidelines.
- Components MUST support both Material and Cupertino contexts
  where designsystemet.no defines platform-adaptive behavior.
- Null safety is mandatory; all public APIs MUST be fully typed.

### VI. Test-First Development (NON-NEGOTIABLE)

Widget tests and golden tests MUST be written before component
implementation. The red-green-refactor cycle is strictly enforced:
1. Write widget test and/or golden test describing expected behavior.
2. Verify the test fails (red).
3. Implement the component until the test passes (green).
4. Refactor while keeping tests green.

Golden tests MUST capture every visual state (default, hover,
focused, pressed, disabled, error) for each component.

### VII. Accessibility Compliance

All components MUST meet WCAG 2.1 AA standards, consistent with
designsystemet.no's accessibility requirements:
- Sufficient color contrast ratios for all token-driven color
  combinations.
- Semantic labels (`Semantics` widget) on all interactive elements.
- Keyboard and screen-reader navigability verified in tests.
- Focus management MUST follow platform conventions.

## Technology Stack & Constraints

- **Language**: Dart (latest stable SDK, null-safe)
- **Framework**: Flutter (latest stable channel)
- **Design System Source**: designsystemet.no (Norwegian public
  design system)
- **CLI Dependency**: `@digdir/designsystemet` CLI for token
  generation and theme operations
- **Testing**: `flutter_test` for widget tests, golden file tests
  for visual regression, `integration_test` for end-to-end flows
- **Package Structure**: Published as a single Dart package on
  pub.dev with clearly separated library entry points (tokens,
  components, theme importer)
- **Minimum Flutter Version**: Defined in `pubspec.yaml`; MUST
  support at least the two most recent stable Flutter releases
- **Platform Targets**: Android, iOS, Web, macOS, Linux, Windows
  (all platforms Flutter supports)

## Development Workflow

- **Branching**: Feature branches off `main`; PRs required for all
  merges.
- **Code Review**: Every PR MUST be reviewed for designsystemet
  fidelity, token usage, accessibility, and test coverage before
  merge.
- **CI Pipeline**: MUST run `flutter analyze`, `flutter test`, and
  golden test comparison on every PR. CLI-based token validation
  SHOULD be included when supported.
- **Token Sync**: When designsystemet.no updates its token set,
  the library MUST re-run the CLI export and update generated token
  files. Breaking token changes MUST result in a major version bump.
- **Versioning**: Follows semantic versioning (MAJOR.MINOR.PATCH).
  Breaking API or token changes → MAJOR. New components or token
  additions → MINOR. Bug fixes and documentation → PATCH.
- **Documentation**: Every public widget MUST have dartdoc comments
  with usage examples. A live example app (in `example/`) MUST
  demonstrate all components with the default theme and at least one
  custom imported theme.

## Governance

This constitution is the authoritative source for project
principles and development standards. It supersedes conflicting
guidance in other documents.

- **Amendments**: Any change to this constitution MUST be proposed
  via PR, reviewed by at least one maintainer, and include a
  migration plan for affected code if principles are modified or
  removed.
- **Versioning**: The constitution follows semantic versioning.
  MAJOR for principle removals or incompatible redefinitions, MINOR
  for new principles or material expansions, PATCH for
  clarifications and wording fixes.
- **Compliance**: All PRs and code reviews MUST verify adherence
  to these principles. Non-compliance MUST be flagged and resolved
  before merge.
- **Complexity Justification**: Any deviation from simplicity (e.g.,
  adding abstraction layers, external dependencies beyond the
  designsystemet CLI) MUST be justified in the relevant PR
  description.
- **Runtime Guidance**: Use `CLAUDE.md` (or equivalent agent
  guidance file) for runtime development guidance that supplements
  but does not override this constitution.

**Version**: 1.0.0 | **Ratified**: 2026-03-14 | **Last Amended**: 2026-03-14
