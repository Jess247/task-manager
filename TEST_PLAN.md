# Test Plan for Task Manager App

This document outlines the testing strategy for the Task Manager App, including unit tests, integration tests and edge case handling.
The goal is to ensure the app is robust, bug-free and user-friendly.

### Objectives

- Ensure components render and function as expected
- Validate user interactions (e.g. adding, editing and deleting tasks)
- Test the app's ability to handle edge cases (e.g. empty task lists, duplicate tasks)
- confirm state persistence using localStorage

### Scope

- Components:
  - Task
  - TaskList
  - Filters
- Features:
  - Adding, editing and deleting tasks
  - Filtering tasks (All, Completed, Pending)
  - State persistent using localStorage
- Scenarios:
  - Typical usage scenarios (adding tasks, marking tasks as completed, deleting tasks, editing tasks)
    -Edge cases (submitting empty input, duplicate tasks, deleting the last task)

### Types of Tests

1. **Unit Tests**
   - Verify that individual components function as intended.
   - Example: Ensure the `Task` component correctly displays the title and completion status.
2. **Integration Tests**
   - Test interactions between multiple components.
   - Example: Ensure the `TaskList` correctly filters tasks based on the selected filter.
3. **Mock Testing**
   - Simulate localStorage to test data persistence.
   - Example: Verify tasks are saved and loaded correctly from localStorage.
4. **Edge Case Testing**
   - Handle unexpected inputs or extreme scenarios.
   - Example: Ensure the app does not crash when the task list is empty.

### Test Cases

#### 1. Task Component

- **Description:** Verify the `Task` component renders correctly.
- **Input:** A task object with `id`, `title`, and `completed` properties.
- **Steps:**
  1. Render the `Task` component with a sample task object.
  2. Check if the title is displayed correctly.
  3. Check if the checkbox reflects the completion status.
- **Expected Result:** The title is displayed, and the checkbox state matches the `completed` property.

#### 2. Adding a Task

- **Description:** Ensure tasks can be added to the task list.
- **Input:** User enters "Buy groceries" and clicks "Add."
- **Steps:**
  1. Enter "Buy groceries" in the input field.
  2. Click the "Add" button.
  3. Check if the task appears in the list.
- **Expected Result:** The task "Buy groceries" is added to the list.

#### 3. State Persistence

- **Description:** Verify tasks persist between page reloads.
- **Input:** Add a task, then reload the page.
- **Steps:**
  1. Add a task, e.g., "Pay bills."
  2. Reload the page.
  3. Check if the task is still displayed.
- **Expected Result:** The task remains in the list after reload.

### Tools

- **Jest**: JavaScript testing framework for unit and integration tests.
- **React Testing Library**: For testing React components.
- **Mock Service Worker (MSW)**: For mocking API requests (if applicable).

### Test Execution

- To run the tests, use the following command:
  ```bash
  npm test
  ```
- For coverage reports, run:
  ```bash
  npm test -- --coverage
  ```

### Conclusion

By following this test plan, the Task Manager App will be thoroughly tested for both functionality and reliability, ensuring a high-quality user experience.
