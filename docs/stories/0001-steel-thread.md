# Example Mapping Session: Personal Task Management App Steel Thread

## User Story
As a user, I want to create, view, and mark tasks as complete so that I can keep track of what I need to do.

## Business Rules (Steel Thread)
1. The user can create new tasks with a title.
2. The user can view a list of all tasks.
3. The user can mark a task as complete.

## Examples

### Example 1
- **Given:** There are no tasks in the system
- **When:** I create a new task with the title "Buy groceries"
- **Then:** The task list shows one task with the title "Buy groceries" and it is not marked as complete

### Example 2
- **Given:** There is a task with the title "Buy groceries" that is not complete
- **When:** I mark the task as complete
- **Then:** The task list shows "Buy groceries" as complete

### Example 3
- **Given:** There are two tasks in the system: "Buy groceries" (not complete) and "Walk dog" (complete)
- **When:** I view the task list
- **Then:** The task list displays both tasks:
- "Buy groceries" is shown and is not marked as complete
- "Walk dog" is shown and is marked as complete

### Example 4
- **Given:** The app has one task ("Buy groceries") saved from a previous session
- **When:** I open or reload the app
- **Then:** The task list displays one task: "Buy groceries", not marked as complete

## De-scoped Items
- Task deletion is not supported in this iteration.
- Tasks do not have descriptions, due dates, or priorities.
- There is no authentication or user management; the app is for a single user only.
- All tasks are visible to the single user; no privacy or sharing features.

## Key Assumptions
- The application will only be used by a single user (the product owner).
- Simplicity is prioritized for the steel thread; features will be expanded in future iterations as needed.
