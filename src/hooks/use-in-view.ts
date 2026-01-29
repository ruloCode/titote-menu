'use client';

import { useEffect, useRef, useState, RefObject } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isInView];
}

export function useStaggeredInView<T extends HTMLElement = HTMLDivElement>(
  itemCount: number,
  options: UseInViewOptions & { staggerDelay?: number } = {}
): [RefObject<T | null>, boolean[]] {
  const { staggerDelay = 100, ...inViewOptions } = options;
  const [ref, isInView] = useInView<T>(inViewOptions);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(itemCount).fill(false));

  useEffect(() => {
    if (isInView) {
      const timeouts: NodeJS.Timeout[] = [];
      for (let i = 0; i < itemCount; i++) {
        const timeout = setTimeout(() => {
          setVisibleItems(prev => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, i * staggerDelay);
        timeouts.push(timeout);
      }
      return () => {
        timeouts.forEach(clearTimeout);
      };
    }
  }, [isInView, itemCount, staggerDelay]);

  return [ref, visibleItems];
}

interface AnimationClasses {
  hidden: string;
  visible: string;
}

export function useAnimationClasses(
  isVisible: boolean,
  animation: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' = 'fade-up'
): string {
  const animations: Record<string, AnimationClasses> = {
    'fade-up': {
      hidden: 'opacity-0 translate-y-8',
      visible: 'opacity-100 translate-y-0',
    },
    'fade-left': {
      hidden: 'opacity-0 -translate-x-8',
      visible: 'opacity-100 translate-x-0',
    },
    'fade-right': {
      hidden: 'opacity-0 translate-x-8',
      visible: 'opacity-100 translate-x-0',
    },
    scale: {
      hidden: 'opacity-0 scale-95',
      visible: 'opacity-100 scale-100',
    },
  };

  const { hidden, visible } = animations[animation];
  return `transition-all duration-700 ease-out ${isVisible ? visible : hidden}`;
}
