#!/usr/bin/env python3
"""
PostToolUse hook for checking code quality after file writes.
Exit codes:
  0 - Success, no issues
  1 - Show warning to user
"""

import json
import re
import sys

# Patterns to warn about in written code
_CODE_WARNINGS = [
    (
        r"console\.log\(",
        "⚠️ console.log detected - remove before committing"
    ),
    (
        r"console\.error\(",
        "💡 console.error - consider using a proper error logging solution"
    ),
    (
        r"// TODO",
        "📝 TODO comment added"
    ),
    (
        r"// FIXME",
        "🔧 FIXME comment - this should be addressed"
    ),
    (
        r"@ts-ignore",
        "⚠️ @ts-ignore - try to fix the TypeScript error instead"
    ),
    (
        r"@ts-expect-error",
        "💡 @ts-expect-error - document why this is needed"
    ),
    (
        r": any\b",
        "⚠️ 'any' type detected - use a more specific type"
    ),
    (
        r"as any\b",
        "⚠️ Type assertion to 'any' - avoid if possible"
    ),
]

# Next.js specific warnings
_NEXTJS_WARNINGS = [
    (
        r"'use client'[\s\S]*useEffect\s*\(\s*\(\)\s*=>\s*\{[\s\S]*fetch\(",
        "💡 Consider moving data fetching to a Server Component"
    ),
    (
        r"<img\s",
        "⚠️ Use next/image instead of <img> for optimization"
    ),
    (
        r"import\s+\{[^}]*useRouter[^}]*\}\s+from\s+['\"]next/router['\"]",
        "⚠️ Use 'next/navigation' instead of 'next/router' in App Router"
    ),
]


def _check_content(content: str, file_path: str) -> list[str]:
    """Check content for potential issues."""
    warnings = []

    # Only check TypeScript/JavaScript/JSX/TSX files
    if not any(file_path.endswith(ext) for ext in ['.ts', '.tsx', '.js', '.jsx']):
        return warnings

    for pattern, message in _CODE_WARNINGS:
        if re.search(pattern, content, re.IGNORECASE):
            warnings.append(message)

    for pattern, message in _NEXTJS_WARNINGS:
        if re.search(pattern, content, re.IGNORECASE):
            warnings.append(message)

    return warnings


def main():
    try:
        input_data = json.load(sys.stdin)
    except json.JSONDecodeError:
        sys.exit(0)

    tool_name = input_data.get("tool_name", "")
    if tool_name not in ["Write", "Edit"]:
        sys.exit(0)

    tool_input = input_data.get("tool_input", {})
    file_path = tool_input.get("file_path", "")
    content = tool_input.get("content", "") or tool_input.get("new_string", "")

    if not content:
        sys.exit(0)

    warnings = _check_content(content, file_path)

    if warnings:
        filename = file_path.split('/')[-1]
        print(f"\n📋 Code notes for {filename}:", file=sys.stderr)
        for warning in warnings:
            print(f"  {warning}", file=sys.stderr)
        sys.exit(1)

    sys.exit(0)


if __name__ == "__main__":
    main()
