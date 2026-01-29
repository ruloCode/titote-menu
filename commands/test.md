---
allowed-tools: Bash(npm run test:*), Bash(npx vitest:*)
description: Run tests with Vitest
argument-hint: '[watch|run|coverage]'
---

## Your task

Run tests based on the argument provided:

- **No argument or `run`**: Run all tests once

  ```bash
  npm run test:run
  ```

- **`watch`**: Run tests in watch mode

  ```bash
  npm run test
  ```

- **`coverage`**: Run tests with coverage report
  ```bash
  npm run test:coverage
  ```

After running tests:

1. Report any failures with file and line numbers
2. Suggest fixes for common issues
3. If coverage is low, suggest areas that need more testing
