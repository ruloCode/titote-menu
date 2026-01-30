'use client';

import { useRef, useCallback, useEffect } from 'react';

interface UseSwipeToCloseOptions {
  onClose: () => void;
  threshold?: number;
  enabled?: boolean;
}

interface SwipeState {
  startY: number;
  currentY: number;
  isDragging: boolean;
}

export function useSwipeToClose({
  onClose,
  threshold = 100,
  enabled = true,
}: UseSwipeToCloseOptions) {
  const elementRef = useRef<HTMLDivElement>(null);
  const swipeState = useRef<SwipeState>({
    startY: 0,
    currentY: 0,
    isDragging: false,
  });

  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      if (!enabled) return;

      const element = elementRef.current;
      if (!element) return;

      // Only start swipe if at the top of the scroll container
      const scrollTop = element.scrollTop;
      if (scrollTop > 5) return;

      swipeState.current = {
        startY: e.touches[0].clientY,
        currentY: e.touches[0].clientY,
        isDragging: true,
      };
    },
    [enabled]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!enabled || !swipeState.current.isDragging) return;

      const element = elementRef.current;
      if (!element) return;

      const currentY = e.touches[0].clientY;
      const deltaY = currentY - swipeState.current.startY;

      swipeState.current.currentY = currentY;

      // Only allow downward swipe
      if (deltaY > 0) {
        // Prevent default scroll
        e.preventDefault();

        // Apply transform with resistance
        const resistance = 0.5;
        const translateY = deltaY * resistance;
        element.style.transform = `translateY(${translateY}px)`;
        element.style.transition = 'none';
      }
    },
    [enabled]
  );

  const handleTouchEnd = useCallback(() => {
    if (!enabled || !swipeState.current.isDragging) return;

    const element = elementRef.current;
    if (!element) return;

    const deltaY = swipeState.current.currentY - swipeState.current.startY;

    // Reset state
    swipeState.current.isDragging = false;

    // Check if swipe exceeded threshold
    if (deltaY > threshold) {
      // Animate out and close
      element.style.transition = 'transform 0.25s ease-out';
      element.style.transform = 'translateY(100%)';
      setTimeout(onClose, 250);
    } else {
      // Snap back
      element.style.transition = 'transform 0.2s ease-out';
      element.style.transform = 'translateY(0)';
    }
  }, [enabled, threshold, onClose]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !enabled) return;

    element.addEventListener('touchstart', handleTouchStart, {
      passive: true,
    });
    element.addEventListener('touchmove', handleTouchMove, {
      passive: false,
    });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [enabled, handleTouchStart, handleTouchMove, handleTouchEnd]);

  return elementRef;
}
