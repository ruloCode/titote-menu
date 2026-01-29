---
name: nextjs-frontend
description: Expert knowledge for building modern Next.js applications with App Router, React Server Components, and Tailwind CSS. Use this skill when creating pages, components, APIs, or working with Next.js features.
---

# Next.js Frontend Development Skill

This skill provides expert guidance for building production-grade Next.js 14+ applications with App Router.

## Project Stack

- **Next.js 14+** with App Router
- **React 19** with Server Components
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Vitest** for unit testing
- **Playwright** for E2E testing

## File Structure

```
src/
├── app/                    # App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── (marketing)/        # Route group
│   │   ├── about/page.tsx
│   │   └── pricing/page.tsx
│   ├── dashboard/          # Protected routes
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── api/                # API routes
│       └── [...]/route.ts
├── components/             # React components
│   ├── ui/                 # UI primitives
│   └── features/           # Feature components
├── lib/                    # Utilities
│   ├── utils.ts
│   └── api.ts
├── hooks/                  # Custom hooks
├── types/                  # TypeScript types
└── test/                   # Test setup
```

## Server vs Client Components

### Server Components (Default)

```tsx
// No directive needed - server by default
import { db } from '@/lib/db';

export default async function ProductList() {
  const products = await db.products.findMany();

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
```

**Use for:**

- Data fetching
- Database access
- Accessing backend resources
- Large dependencies
- Sensitive logic

### Client Components

```tsx
'use client';

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>;
}
```

**Use for:**

- Interactivity (onClick, onChange)
- State (useState, useReducer)
- Effects (useEffect)
- Browser APIs
- Custom hooks with state

## Data Fetching Patterns

### Server Component Fetching

```tsx
// app/products/page.tsx
async function getProducts() {
  const res = await fetch('https://api.example.com/products', {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();
  return <ProductList products={products} />;
}
```

### With Loading UI

```tsx
// app/products/loading.tsx
export default function Loading() {
  return <ProductSkeleton />;
}
```

### With Error Handling

```tsx
// app/products/error.tsx
'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

## Route Handlers (API)

```tsx
// app/api/products/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const products = await db.products.findMany();
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const body = await request.json();
  const product = await db.products.create({ data: body });
  return NextResponse.json(product, { status: 201 });
}
```

## Layouts & Templates

### Root Layout

```tsx
// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Titote',
  description: 'Your app description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

### Nested Layout

```tsx
// app/dashboard/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
```

## Metadata & SEO

```tsx
// Static metadata
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
  openGraph: {
    title: 'Page Title',
    description: 'Page description',
    images: ['/og-image.png'],
  },
};

// Dynamic metadata
export async function generateMetadata({ params }): Promise<Metadata> {
  const product = await getProduct(params.id);
  return {
    title: product.name,
    description: product.description,
  };
}
```

## Component Patterns

### With Types

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'rounded-lg font-medium transition-colors',
        variants[variant],
        sizes[size],
        disabled && 'cursor-not-allowed opacity-50',
        className
      )}
    >
      {children}
    </button>
  );
}
```

### Utility Function

```tsx
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## Testing Patterns

### Component Test (Vitest)

```tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });
});
```

### E2E Test (Playwright)

```tsx
import { test, expect } from '@playwright/test';

test('user can submit form', async ({ page }) => {
  await page.goto('/contact');
  await page.fill('[name="email"]', 'test@example.com');
  await page.fill('[name="message"]', 'Hello!');
  await page.click('button[type="submit"]');
  await expect(page.locator('.success-message')).toBeVisible();
});
```

## Performance Best Practices

1. **Use Server Components** by default
2. **Dynamic imports** for heavy components
3. **next/image** for all images
4. **next/font** for fonts
5. **Suspense** for streaming
6. **Parallel data fetching** when possible
7. **Proper caching** with revalidate

## Common Pitfalls

1. ❌ Using hooks in Server Components
2. ❌ Missing 'use client' for interactive components
3. ❌ Fetching in Client Components when Server works
4. ❌ Not handling loading/error states
5. ❌ Over-using Client Components
6. ❌ Not using TypeScript properly
