# 3. Adopt Playwright for End-to-End Testing

Date: 2025-07-05

## Status
Accepted

## Context
We need a browser automation and end-to-end testing tool for the personal task management app. The tool should support high-level, behavior-driven tests, work well with offline-first web apps, and integrate seamlessly with VS Code and AI-powered workflows.

### Options Considered
- **Cypress**: Simple setup, great developer experience, and widely used for E2E testing in JavaScript projects. However, its VS Code integration is less feature-rich than Playwright’s.
- **Selenium**: Mature and supports many languages and browsers, but is more complex to set up and maintain, and lacks modern VS Code integration.
- **Playwright**: Modern, supports multiple browsers, and offers the best official VS Code test runner integration.

Playwright was chosen for its strong VS Code integration and robust browser support.

## Decision
- Adopt Playwright as the end-to-end testing framework for this project.
- Use the official Playwright VS Code extension for test authoring, running, and debugging.
- Write high-level, vertical slice tests to drive feature development, starting with Example 1 of the steel thread.

## Consequences
- Playwright provides robust browser automation, supports Chromium, Firefox, and WebKit, and works well for offline and local file testing.
- The official VS Code extension enables tight integration with the editor for writing, running, and debugging tests.
- Team members benefit from a modern, maintainable, and well-supported E2E testing workflow.
- Future ADRs can revisit this decision if requirements change or new tools emerge.
