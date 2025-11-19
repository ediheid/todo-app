This template was generated using [create-vue](https://github.com/vuejs/create-vue), plus extra configuration for [Tailwind CSS](https://tailwindcss.com/).

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## VS Code Setup for Tailwind

To avoid warnings about unknown `@` rules like `@apply`, `@layer`, or `@tailwind`, add the following to your VS Code workspace settings:

1. Open (or create) `.vscode/settings.json` in the project root.
2. Add the following content:

```json
{
  "css.lint.unknownAtRules": "ignore",
  "scss.lint.unknownAtRules": "ignore",
  "less.lint.unknownAtRules": "ignore"
}
```

# NOTES

# Future Improvements

Explore the following:

- **User feedback for empty tasks:** Provide validation or feedback when a user attempts to add a task without a description.
- **Editing behavior:** Prevent or handle scenarios where a user edits a task and leaves the description empty.
- **Task status and urgency:** Evaluate whether toggling a task’s `isDone` status or editing it should reset the `isTaskUrgent` flag and/or update the created date.
- **Category selection:** Determine whether to use a default category (e.g., "Holiday") or include a placeholder option in the category selector, disabling the save action until a category is selected?
- **Moving tasks between categories:** Drag and drop seemed like a good solution without having to think about the user flow too much
- **Bigger cleanup and create more reusable components:**
- **Comprehensive testing:** Implement thorough tests using Vitest to cover both core functionality and edge cases.
