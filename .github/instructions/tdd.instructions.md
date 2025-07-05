---
applyTo: '**/*.{js,ts,go,kt}'
---

# TDD

- **Always** write tests before changing behavior
- No new functionality without a corresponding failing test first
- Tests must fail for the right reason before implementation begins
- Prioritize happy path tests to establish working functionality before covering
  edge cases
- All tests should be automated, and you should be able to easily interpret the results to know whether they succeeded or failed
- It should be possible to run all tests for the project by running a single script or command

## Test Execution Requirements

- **Always use VS Code's test runner** - use the `run_tests` tool to execute tests
- **Never fallback to terminal commands** - do not use `run_in_terminal` or `run_vs_code_task` to run tests
- **VS Code test integration is mandatory** - this provides better integration with the editor and clearer test result reporting

## Kinds of tests

It's unhelpful to make a distinction between unit, integration and e2e tests. Let's just make sure that:

- When we start on a new feature, we start with a high level test focussed on behaviour
- Add Given/When/Then comments to high level tests to make it very easy to see what is part of the arrangement, action, and assertion

## Test Verification After Changes

- **Always run tests immediately after making code changes** to verify they actually pass
- **Never assume tests pass** - always confirm by running them
- **Report actual test results** rather than saying "should now pass"

## Red-Green-Refactor Cycle

### 1. Red Phase

- Run the full test suite to ensure we're starting from a healthy state. If any tests are failing STOP and tell the user
- Write a failing test before implementing any new behavior

### 2. Green Phase

- **Write minimal code to pass the test** - never add code that isn't directly responsible for making the test pass
- **Document discovered edge cases** - if edge cases are discovered during implementation, document them in the relevant story for future consideration rather than implementing them immediately
- **Keep scope focused** - resist the urge to handle scenarios not covered by the current test

In general, if a newly added line can be removed without causing the test to fail, it shouldn't have been added in the first place.

### 3. Refactor Phase

- This is the phase where we'll make structural changes
- This phase is described by the `refactoring.instructions.md` file

## Separation of Concerns

- **Never mix structural changes with behavioral changes** in the same set of changes
- Structural changes = refactoring, reorganizing code, changing architecture
- Behavioral changes = new features, bug fixes, changing game logic

## Parking Strategy

If refactoring would make current work simpler, **park the current work**:

1. Stash the current behavioral changes
2. Do the refactor as a separate commit
3. Resume the behavioral work
