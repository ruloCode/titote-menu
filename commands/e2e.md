---
allowed-tools: Bash(npm run test:e2e:*), Bash(npx playwright:*)
description: Run E2E tests with Playwright
argument-hint: '[ui]'
---

## Your task

Run end-to-end tests with Playwright:

- **No argument**: Run all E2E tests headlessly

  ```bash
  npm run test:e2e
  ```

- **`ui`**: Open Playwright UI for interactive testing
  ```bash
  npm run test:e2e:ui
  ```

**Note:** Make sure the dev server is running or it will be started automatically.

After running tests:

1. Report any failures with screenshots if available
2. Identify flaky tests
3. Suggest improvements for test stability
