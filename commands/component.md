---
allowed-tools: Write, Read, Glob
description: Create a new React component
argument-hint: '<ComponentName> [page|layout|component]'
---

## Your task

Create a new React component based on the arguments:

**Arguments:**

1. `ComponentName` - Name of the component (PascalCase)
2. Type (optional):
   - `page` - Creates a page.tsx in app/[name]/
   - `layout` - Creates a layout.tsx in app/[name]/
   - `component` (default) - Creates in src/components/[name]/

## Component Structure

For regular components, create:

```
src/components/[ComponentName]/
├── index.tsx           # Main component
├── [ComponentName].test.tsx  # Tests
└── types.ts            # TypeScript types (if needed)
```

## Templates

### Server Component (default)

```tsx
interface [ComponentName]Props {
  // props
}

export function [ComponentName]({ }: [ComponentName]Props) {
  return (
    <div>
      {/* content */}
    </div>
  );
}
```

### Client Component

```tsx
'use client';

import { useState } from 'react';

interface [ComponentName]Props {
  // props
}

export function [ComponentName]({ }: [ComponentName]Props) {
  return (
    <div>
      {/* content */}
    </div>
  );
}
```

Ask the user if they need a client or server component before creating.
