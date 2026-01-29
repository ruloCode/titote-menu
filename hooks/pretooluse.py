#!/usr/bin/env python3
"""
PreToolUse hook for validating bash commands in Next.js projects.
Exit codes:
  0 - Allow operation
  1 - Show stderr to user but not to Claude
  2 - Block tool call and show stderr to Claude
"""

import json
import re
import sys

# Define validation rules as (regex pattern, message) tuples
_VALIDATION_RULES = [
    (
        r"rm\s+-rf\s+(/|~|\$HOME)",
        "🚫 Dangerous rm command targeting system directories. Please verify the path.",
    ),
    (
        r"git\s+push\s+--force\s+origin\s+(main|master)",
        "🚫 Force push to main/master is blocked. Use a feature branch.",
    ),
    (
        r"npm\s+publish",
        "⚠️ Publishing to npm detected. Make sure you're ready to publish.",
    ),
    (
        r"rm\s+-rf\s+node_modules",
        "💡 Consider using 'rm -rf node_modules && npm install' for a clean install.",
    ),
]

# Next.js specific warnings
_NEXTJS_WARNINGS = [
    (
        r"next\s+build.*--no-lint",
        "⚠️ Building without lint. Consider running 'npm run lint' first.",
    ),
]


def _validate_command(command: str) -> tuple[list[str], bool]:
    """Validate command and return (issues, should_block)."""
    issues = []
    should_block = False

    for pattern, message in _VALIDATION_RULES:
        if re.search(pattern, command):
            issues.append(message)
            if message.startswith("🚫"):
                should_block = True

    for pattern, message in _NEXTJS_WARNINGS:
        if re.search(pattern, command):
            issues.append(message)

    return issues, should_block


def main():
    try:
        input_data = json.load(sys.stdin)
    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON input: {e}", file=sys.stderr)
        sys.exit(1)

    tool_name = input_data.get("tool_name", "")
    if tool_name != "Bash":
        sys.exit(0)

    tool_input = input_data.get("tool_input", {})
    command = tool_input.get("command", "")

    if not command:
        sys.exit(0)

    issues, should_block = _validate_command(command)

    if issues:
        for message in issues:
            print(message, file=sys.stderr)
        sys.exit(2 if should_block else 1)

    sys.exit(0)


if __name__ == "__main__":
    main()
