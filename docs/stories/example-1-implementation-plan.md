# Implementation Plan: Example 1 (Steel Thread)

## Overview
This plan covers the implementation of Example 1 from the steel thread for the personal task management app: creating a new task and displaying it in the task list.

## Requirements
- The user can create a new task by providing a title.
- The system stores the new task.
- The user can view a list of all tasks.
- The newly created task appears in the list and is not marked as complete.

## Svelte Project Setup (with Vite)

We will use Vite to scaffold and develop the Svelte application. Vite provides a fast development server, instant TypeScript support, and bundles the app for static deployment.

### Steps:
1. **Ensure Node.js (LTS) and npm are installed.**
2. **Create a new Svelte project with TypeScript template in the current directory:**
   ```sh
   npm create vite@latest . -- --template svelte-ts
   ```
   > **Note:** The current directory should be empty (or only contain files you are willing to overwrite), as Vite will not scaffold into a non-empty directory without confirmation.
4. **Install dependencies:**
   ```sh
   npm install
   ```
5. **Start the development server:**
   ```sh
   npm run dev
   ```

This setup provides hot module reloading, TypeScript support, and outputs a static site that can be deployed without a backend server.

Only continue past this point once the user has confirmed that the environment is correctly set up.

## Test-Driven Development (TDD) Approach

Begin with a high-level, end-to-end test that exercises the full vertical slice of the feature:

### High-Level Feature Test (Vertical Slice)
- Simulate a user opening the app (with no tasks), entering a new task title (e.g., "Buy groceries"), submitting the form, and seeing the new task appear in the list as not complete.
- This test should interact with the UI as a user would, using Playwright.

#### Example Scenario
1. Open the app (task list is empty).
2. Enter "Buy groceries" in the new task input.
3. Submit the form.
4. The task list displays one task: "Buy groceries", not marked as complete.

## Implementation Steps
1. **Define Task Model**
   - Use a simple object: `{ title: string, completed: boolean }`.
2. **Set Up Storage**
   - Store tasks as an array in `localStorage`.
3. **Create Task Creation Functionality**
   - Implement a form to add a new task with a title.
   - On submission, add the task to the array with `completed: false` and update localStorage.
4. **Implement Task List Display**
   - Render the list of tasks from localStorage.
   - Each task shows its title and completion status.
5. **Integrate User Interaction**
   - After adding a task, refresh the task list display.

---
Do not implement any behaviours or validations not explicitly outlined in this document.
