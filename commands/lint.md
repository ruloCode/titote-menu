---
allowed-tools: Bash(npm run lint:*), Bash(npm run format:*)
description: Run linting and formatting checks
argument-hint: '[fix]'
---

## Your task

Run code quality checks:

- **No argument**: Check for issues without fixing

  ```bash
  npm run lint && npm run format:check
  ```

- **`fix`**: Auto-fix all fixable issues
  ```bash
  npm run lint:fix && npm run format
  ```

After running:

1. List any issues that couldn't be auto-fixed
2. Explain each issue and how to fix it manually
3. Suggest improvements to prevent similar issues
