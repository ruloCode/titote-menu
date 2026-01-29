---
allowed-tools: Bash(git checkout:*), Bash(git add:*), Bash(git push:*), Bash(git commit:*), Bash(gh pr create:*), Bash(git status:*), Bash(git diff:*), Bash(git branch:*)
description: Create a pull request with proper description
---

## Context

- Current git status: !`git status`
- Current git diff: !`git diff HEAD`
- Current branch: !`git branch --show-current`
- Recent commits on this branch: !`git log --oneline -10`

## Your task

1. If there are uncommitted changes, commit them first
2. If on main/master, create a new feature branch
3. Push the branch to origin
4. Create a pull request using `gh pr create` with:
   - Clear title following conventional commits
   - Description with:
     - Summary of changes
     - Type of change (feature, bugfix, refactor, etc.)
     - Testing done
     - Screenshots if UI changes (mention if applicable)

Complete all steps in a single message.
